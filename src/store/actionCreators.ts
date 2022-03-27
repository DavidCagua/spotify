import * as actionTypes from "./actionTypes";

export function setAlbums(result: Result[]) {
  const action: SearchAction = {
    type: actionTypes.SET_NEW_RELEASES,
    payload: result,
  };

  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}

export function simulateHttpRequest(action: SearchAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
