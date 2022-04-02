import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import { useSelector } from "react-redux";
import { setHistory } from "./store/actionCreators";
import apiService from "./api/api-service";
import ResultList from "./components/ResultList";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import Filters from "./components/Filters";
import Wrapper from "./components/Wrapper";

function App() {
  const dispatch: Dispatch<any> = useDispatch();

  const filter = useSelector((state: ResultState) => state.filter);
  const albums: Result[] = useSelector((state: ResultState) => state.albums);
  const artists: Result[] = useSelector((state: ResultState) => state.artists);
  const songs: Result[] = useSelector((state: ResultState) => state.songs);
  const history: Result[] = useSelector((state: ResultState) => state.history);

  useEffect(() => {
    apiService.getHistory().then((res) => {
      dispatch(setHistory(res.data));
    });
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
