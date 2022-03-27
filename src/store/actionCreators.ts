import * as actionTypes from "./actionTypes";

export function setAlbums(result: Result[]) {
  const action: SearchAction = {
    type: actionTypes.SET_NEW_RELEASES,
    payload: result,
  };

  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

export function searchReducer(searchKeyword: string) {
  const action: SearchAction = {
    type: actionTypes.SEARCH,
    payload: searchKeyword,
  };

  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
