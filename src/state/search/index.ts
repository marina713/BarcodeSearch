import { initialState } from "./variables";

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT_SEARCH":
      return { ...state, barcode: action.payload.value };
    case "SET_CURRENT_ITEM":
      return { ...state, currentItem: action.payload.value, errorMsg: "" };
    case "SET_ERROR":
      return { ...state, errorMsg: action.payload.value };
    case "ADD_TO_HISTORY":
      return {
        ...state,
        errorMsg: "",
        historicalData: [action.payload.value, ...state.historicalData].slice(
          0,
          9
        ),
      };

    default:
      return state;
  }
};

export default searchReducer;
