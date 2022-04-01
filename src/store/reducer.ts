import * as actionTypes from "./actionTypes";

const initialState: ResultState = {
  albums: [],
  songs: [],
  artists: [],
  history: [],
  searchKeyword: "",
  filter: "history",
};

const reducer = (
  state: ResultState = initialState,
  action: SearchAction
): ResultState => {
  switch (action.type) {
    case actionTypes.SEARCH:
      return {
        ...state,
        searchKeyword: action.payloadKeyword!,
        albums: action.payloadAlbums!,
        songs: action.payloadSongs!,
        artists: action.payloadArtists!,
      };
    case actionTypes.FILTER:
      return {
        ...state,
        filter: action.payloadFilter!,
      };
    case actionTypes.HISTORY:
      return {
        ...state,
        history: action.payloadHistory!,
      };
  }
  return state;
};

export default reducer;
