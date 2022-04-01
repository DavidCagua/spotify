import axios from "axios";

export const httpTokenInstance = axios.create({
  baseURL: "https://accounts.spotify.com/api/token",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
  auth: {
    username: process.env.REACT_APP_CLIENT_ID!,
    password: process.env.REACT_APP_SECRET!,
  },
});
export const httpSpotifyInstance = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export const httpServerInstance = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
