import http from "@/http-common";

class MazeTvService {
  getAll(): Promise<any> {
    return http.get("/shows");
  }

  getById(id: string): Promise<any> {
    return http.get(`/shows/${id}?embed[]=cast&embed[]=episodes`);
  }

  getByQuery(query: string): Promise<any> {
    return http.get(`/search/shows?q=${query}`);
  }
}

export default new MazeTvService();
