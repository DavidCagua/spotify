import * as actionTypes from "./actionTypes";

const initialState: ResultState = {
  results: [],
  searchKeyword: "",
};

const reducer = (
  state: ResultState = initialState,
  action: SearchAction
): ResultState => {
  switch (action.type) {
    case actionTypes.SET_NEW_RELEASES:
      return {
        ...state,
        results: [],
      };
    case actionTypes.SEARCH:
      console.log(action.payload);

      return {
        ...state,
        searchKeyword: "action.payload",
      };
  }
  return state;
};

export default reducer;
