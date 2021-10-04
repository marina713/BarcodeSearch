import * as actions from "../actions";
import reducer from "../";
import { initialState } from "../constants";

const productMock = {
  code: "123456",
  ingredients_text: "tomato",
  image_url: "some url",
  product_name: "Tomato Soup",
  brands: "Campbell's",
};

describe("Search #reducer", () => {
  it("returns state for `submitSearch` action", () => {
    const result = reducer(initialState, actions.submitSearch("987654321"));
    expect(result.barcode).toStrictEqual("987654321");
    expect(result.historicalData).toStrictEqual([]);
    expect(result.currentItem).toStrictEqual({});
    expect(result.errorMsg).toStrictEqual("");
  });

  it("returns state for `setCurrentItem` action", () => {
    const result = reducer(initialState, actions.setCurrentItem(productMock));
    expect(result.barcode).toStrictEqual(productMock.code);
    expect(result.historicalData).toStrictEqual([]);
    expect(result.currentItem).toStrictEqual(productMock);
    expect(result.errorMsg).toStrictEqual("");
  });

  it("returns state for `addToHistory` action", () => {
    const result = reducer(initialState, actions.addToHistory(productMock));
    expect(result.barcode).toStrictEqual("");
    expect(result.historicalData).toStrictEqual([productMock]);
    expect(result.currentItem).toStrictEqual({});
    expect(result.errorMsg).toStrictEqual("");
  });

  it("returns state for `setError` action", () => {
    const result = reducer(initialState, actions.setError("Network error"));
    expect(result.barcode).toStrictEqual("");
    expect(result.historicalData).toStrictEqual([]);
    expect(result.currentItem).toStrictEqual({});
    expect(result.errorMsg).toStrictEqual("Network error");
  });
});
