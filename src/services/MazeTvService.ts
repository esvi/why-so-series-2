import http from "@/http-common";

class MazeTvService {
  getAll(): Promise<any> {
    return http.get("/shows");
  }

  getById(id: string): Promise<any> {
    return http.get(`/shows/${id}?embed[]=cast&embed[]=episodes`);
  }

  getByQuery(query: any): Promise<any> {
    return http.get(`/shows?q=${query}`);
  }
}

export default new MazeTvService();
