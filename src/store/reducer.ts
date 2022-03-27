import * as actionTypes from "./actionTypes";

const initialState: ResultState = {
  results: [],
};

const reducer = (
  state: ResultState = initialState,
  action: SearchAction
): ResultState => {
  switch (action.type) {
    case actionTypes.SET_NEW_RELEASES:
      return {
        ...state,
        results: action.payload,
      };
  }
  return state;
};

export default reducer;
