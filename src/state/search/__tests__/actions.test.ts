import configureStore from "redux-mock-store";

import * as actions from "../actions";

const mockStore = configureStore();
const store = mockStore();

const defaultParams = {
  error: undefined,
  meta: undefined,
  payload: undefined,
};

const productMock = {
  code: "123456",
  ingredients_text: "tomato",
  image_url: "some url",
  product_name: "Tomato Soup",
  brands: "Campbell's",
};

describe("Search actions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe("submitSearch", () => {
    test("dispatches the correct action and payload", () => {
      const expectedActions = [
        {
          ...defaultParams,
          type: "search/SUBMIT_SEARCH",
          payload: { value: "123456" },
        },
      ];

      store.dispatch(actions.submitSearch("123456"));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("setCurrentItem", () => {
    test("dispatches the correct action and payload", () => {
      const expectedActions = [
        {
          ...defaultParams,
          type: "search/SET_CURRENT_ITEM",
          payload: { value: productMock },
        },
      ];

      store.dispatch(actions.setCurrentItem(productMock));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("addToHistory", () => {
    test("dispatches the correct action and payload", () => {
      const expectedActions = [
        {
          ...defaultParams,
          type: "search/ADD_TO_HISTORY",
          payload: { value: productMock },
        },
      ];

      store.dispatch(actions.addToHistory(productMock));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("setError", () => {
    test("dispatches the correct action and payload", () => {
      const expectedActions = [
        {
          ...defaultParams,
          type: "search/SET_ERROR",
          payload: { value: "Network error" },
        },
      ];

      store.dispatch(actions.setError("Network error"));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
