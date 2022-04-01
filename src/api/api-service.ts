import {
  httpTokenInstance,
  httpSpotifyInstance,
  httpServerInstance,
} from "./common-api";

httpSpotifyInstance.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("accessToken");
    if (token) {
      config.headers!["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
httpSpotifyInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (err.response.status === 401) {
      console.log("expired");

      try {
        let response = await httpTokenInstance.post(
          "",
          "grant_type=client_credentials"
        );
        window.localStorage.setItem("accessToken", response.data.access_token);
        return httpTokenInstance(originalConfig);
      } catch {
        throw new Error();
      }
    }
  }
);
class DataService {
  combinedSearch(keyword: string) {
    return httpSpotifyInstance.get(
      `search?q=name:${keyword}&type=album,track,artist&include_external=audio`
    );
  }
  postHistory(song: string) {
    return httpServerInstance.post("history", { song });
  }
  getHistory() {
    return httpServerInstance.get("history");
  }
}
export default new DataService();
