import {
  SUBMIT_SEARCH,
  SET_CURRENT_ITEM,
  SET_ERROR,
  ADD_TO_HISTORY,
  ProductItem,
} from "./constants";

export const submitSearch = (value: string) => {
  return {
    type: SUBMIT_SEARCH,
    payload: { value },
  };
};

export const setCurrentItem = (value: ProductItem) => {
  return {
    type: SET_CURRENT_ITEM,
    payload: { value },
  };
};

export const addToHistory = (value: ProductItem) => {
  return {
    type: ADD_TO_HISTORY,
    payload: { value },
  };
};

export const setError = (value: string) => {
  return {
    type: SET_ERROR,
    payload: { value },
  };
};
