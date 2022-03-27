import React, { useEffect } from "react";
import SearchBar from "./components/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import apiService from "./api/api-service";
import { setAlbums } from "./store/actionCreators";
import { Dispatch } from "redux";
import ResultList from "./components/ResultList";
import Filters from "./components/Filters";
import Wrapper from "./components/Wrapper";

function App() {
  const searchKeyword: string = useSelector(
    (state: ResultState) => state.searchKeyword
  );
  const results: Result[] = useSelector((state: ResultState) => state.results);

  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    apiService
      .getRecommendations()
      .then((response) => {
        console.log(response.data.albums.items);
        dispatch(
          setAlbums(
            response.data.albums.items.map((resultItem: Result) => {
              return {
                id: resultItem.id,
                name: resultItem.name,
                image: resultItem.images[1].url,
              };
            })
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Wrapper>
      <SearchBar />
      <Filters />
      <ResultList resultsa={results} />
    </Wrapper>
  );
}

export default App;
