import axios from "axios";

export const httpTokenInstance = axios.create({
  baseURL: "https://accounts.spotify.com/api/token",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
  auth: {
    username: "9aaaddb6b4a84a13a3757fdfbe6244b4",
    password: "bfde46eb6a904bf79b22937e988123c9",
  },
});
export const httpSpotifyInstance = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
