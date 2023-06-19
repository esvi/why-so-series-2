import http from "@/http-common";

class MazeTvService {
  // Fetch all available shows
  getAll(): Promise<any> {
    return http.get("/shows");
  }

  // Fetch a specific show by ID
  getById(id: string): Promise<any> {
    return http.get(`/shows/${id}?embed[]=cast&embed[]=episodes`);
  }

  // Fetch available shows via query
  getByQuery(query: string): Promise<any> {
    return http.get(`/search/shows?q=${query}`);
  }
}

export default new MazeTvService();
