import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import { useSelector } from "react-redux";
import apiService from "./api/api-service";
import ResultList from "./components/ResultList";
import Filters from "./components/Filters";
import Wrapper from "./components/Wrapper";

function App() {
  const filter = useSelector((state: ResultState) => state.filter);
  const albums: Result[] = useSelector((state: ResultState) => state.albums);
  const artists: Result[] = useSelector((state: ResultState) => state.artists);
  const songs: Result[] = useSelector((state: ResultState) => state.songs);
  const [history, setHistory] = useState<Result[]>([]);

  useEffect(() => {
    apiService.getHistory().then((res) => {
      setHistory(res.data);
    });
    console.log(process.env.REACT_APP_KEY);
  }, []);
  return (
    <Wrapper>
      <SearchBar />
      <Filters />
      <ResultList
        albums={albums}
        artists={artists}
        songs={songs}
        history={history}
        filter={filter}
      />
    </Wrapper>
  );
}

export default App;
