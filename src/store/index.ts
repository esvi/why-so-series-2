import { defineStore } from "pinia";
import MazeTvService from "../services/MazeTvService";
import ResponseData from "@/types/ResponseData";

export const useSeriesStore = defineStore("series", {
  state: () => ({
    results: <any>[],
    genres: <any>[],
    shows: <any>[],
    show: <any>{},
  }),
  actions: {
    async getAllShows() {
      console.log("getAllShows");

      MazeTvService.getAll()
        .then((response: ResponseData) => {
          this.shows = response.data;

          console.log("shows results:", this.shows);

          // Due to the way the MazeTV free API works
          // we have to do some magic to get usable
          // genre data
          this.genres = this.getSortedGenres(this.shows);

          return this.shows;
        })
        .catch((error: Error) => {
          this.erorrHandler(error);
        });
    },
    async getShowById(id: any) {
      console.log("getShowById", id);

      // MazeTvService.getById(id)
      //   .then((response: ResponseData) => {
      //     this.show = response.data;

      //     console.log("show result:", this.show);

      //     return this.show;
      //   })
      //   .catch((error: Error) => {
      //     this.erorrHandler(error);
      //   });
    },
    async getShowsByQuery(query: any) {
      console.log("getShowsByQuery", query);

      // MazeTvService.getByQuery(query)
      //   .then((response: ResponseData) => {
      //     const path = '/search';
      //     if (path !== router.history.current.path) router.push(path);

      //     this.results = response.data;

      //     console.log("search results:", this.results);

      //     return this.results;
      //   })
      //   .catch((error: Error) => {
      //     this.erorrHandler(error);
      //   });
    },
    getSortedGenres(shows: any) {
      console.log("getSortedGenres", shows);

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
      console.log("getEmbeddedShowsData", show);

      const aShow = show || {};

      // Break up episodes into seasons
      if (aShow._embedded) {
        aShow.seasons = {};

        for (let i = 0; i < aShow._embedded.episodes.length; i++) {
          const episode = aShow._embedded.episodes[i];
          const season = episode.season;

          if (!aShow.seasons[season]) aShow.seasons[season] = [];

          aShow.seasons[season].push(episode);
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
