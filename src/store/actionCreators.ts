import * as actionTypes from "./actionTypes";

export function searchReducer(
  searchKeyword: string,
  albums = [],
  songs = [],
  artists = []
) {
  const action: SearchAction = {
    type: actionTypes.SEARCH,
    payloadKeyword: searchKeyword,
    payloadAlbums: albums,
    payloadArtists: songs,
    payloadSongs: artists,
  };

  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

export function filterReducer(
  filterType: "bestMatch" | "artist" | "album" | "song" | "history"
) {
  const action: SearchAction = {
    type: actionTypes.FILTER,
    payloadFilter: filterType,
  };

  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
