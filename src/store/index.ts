import { defineStore } from "pinia";
import MazeTvService from "../services";
import router from "../router";
import {
  ShowsResponse,
  ShowResponse,
  SearchedShowsResponse,
  Episode,
} from "@/types";

export const useSeriesStore = defineStore("series", {
  state: () => ({
    results: <any>[],
    genres: <any>[],
    shows: <any>[],
    show: <any>{},
  }),
  actions: {
    async getAllShows() {
      MazeTvService.getAll()
        .then((response: ShowsResponse) => {
          this.shows = response.data;

          // Find available genre data
          this.genres = this.getSortedGenres(this.shows);
        })
        .catch((error: Error) => {
          this.erorrHandler(error);
        });
    },
    async getShowById(id: string) {
      MazeTvService.getById(id)
        .then((response: ShowResponse) => {
          // Find complete season/episode data
          this.show = this.getEmbeddedShowsData(response.data);
        })
        .catch((error: Error) => {
          this.erorrHandler(error);
        });
    },
    async getShowsByQuery(query: string) {
      const path = "/search";

      MazeTvService.getByQuery(query)
        .then((response: SearchedShowsResponse) => {
          this.results = response.data;

          // Navigate to result
          router.push({ path });
        })
        .catch((error: Error) => {
          this.erorrHandler(error);
        });
    },
    getSortedGenres(shows: any) {
      // The FREE API does not give us a collection of
      // available genres
      const allShows = shows || [];
      const unsortedGenres = <any>{};
      let sortedGenres = <any>[];

      for (let i = 0; i < allShows.length; i++) {
        // Create genre reels
        const show = allShows[i];

        show.genres.forEach(function (genre: any) {
          // Initialise genre entry if it does not yet exist
          if (!unsortedGenres[genre]) unsortedGenres[genre] = {};

          // Create shows dictionary to avoid duplicates
          unsortedGenres[genre][show.id] = show;
        });
      }

      // Process and sort shows in genre
      sortedGenres = Object.keys(unsortedGenres).map(function (genreKey) {
        return {
          genre: genreKey,
          shows: Object.keys(unsortedGenres[genreKey])
            .map(function (showKey) {
              return unsortedGenres[genreKey][showKey];
            })
            .sort(function (a, b) {
              return b.rating.average - a.rating.average;
            }),
        };
      });

      return sortedGenres;
    },
    getEmbeddedShowsData(show: any) {
      // Due to the way the FREE API works we have to do some behind
      // the scenes magic to get usable season/episode data
      const aShow = show || {};

      // Break up episodes into seasons
      if (aShow._embedded) {
        aShow.cast = aShow._embedded.cast || [];
        aShow.seasons = {};

        for (let i = 0; i < aShow._embedded.episodes.length; i++) {
          const episode = aShow._embedded.episodes[i];
          const season = episode.season;

          // If the season hasn't been initiliased...
          if (!aShow.seasons[season]) aShow.seasons[season] = [];

          // Finally add episode to season
          aShow.seasons[season].push(episode as Episode);
        }
      }

      return aShow;
    },
    erorrHandler(error: any) {
      if (error.response) {
        // Error response code received
        console.log("Error response code received:", error);
      } else if (error.request) {
        // Request not done
        console.log("Request not done:", error);
      } else {
        // Other errors
        console.log("Error:", error);
      }
    },
  },
});
