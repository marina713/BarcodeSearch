export const submitSearch = (value) => {
  return {
    type: "SUBMIT_SEARCH",
    payload: { value },
  };
};

export const setCurrentItem = (value) => {
  return {
    type: "SET_CURRENT_ITEM",
    payload: { value },
  };
};

export const addToHistory = (value) => {
  return {
    type: "ADD_TO_HISTORY",
    payload: { value },
  };
};

export const setError = (value) => {
  return {
    type: "SET_ERROR",
    payload: { value },
  };
};
