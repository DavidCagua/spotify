import { httpTokenInstance, httpSpotifyInstance } from "./common-api";
// import ITutorialData from "../types/tutorial.type";
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
      try {
        let response = await httpTokenInstance.post(
          "",
          "grant_type=client_credentials"
        );
        window.localStorage.setItem("accessToken", response.data.access_token);
        return httpTokenInstance(originalConfig);
      } catch {}
      throw new Error();
    }
  }
);
class DataService {
  getRecommendations() {
    return httpSpotifyInstance.get("browse/new-releases");
  }
}
export default new DataService();
