import React, { useEffect } from "react";
import SearchBar from "./components/SearchBar";
import styled from "styled-components";
import axios from "axios";
import querystring from "querystring";

function App() {
  useEffect(() => {
    axios
      .post(
        "https://accounts.spotify.com/api/token",
        "grant_type=client_credentials",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          auth: {
            username: "9aaaddb6b4a84a13a3757fdfbe6244b4",
            password: "bfde46eb6a904bf79b22937e988123c9",
          },
        }
      )
      .then(function (response) {
        console.log(response.data.access_token);
      });
  }, []);
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
