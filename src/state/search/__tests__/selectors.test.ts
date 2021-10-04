import {
  getBarcode,
  getHistoricalData,
  getCurrentItem,
  getErrorMsg,
} from "../selectors";

const mockParameters = {
  search: {
    barcode: "",
    historicalData: [],
    currentItem: {},
    errorMsg: "",
  },
};

describe("Search Selectors", () => {
  it("should return correct value of getBarcode", () => {
    const selected = getBarcode.resultFunc(mockParameters.search);
    expect(selected).toEqual("");
  });

  it("should return correct value of getHistoricalData", () => {
    const selected = getHistoricalData.resultFunc(mockParameters.search);
    expect(selected).toEqual([]);
  });

  it("should return correct value of getCurrentItem", () => {
    const selected = getCurrentItem.resultFunc(mockParameters.search);
    expect(selected).toEqual({});
  });

  it("should return correct value of getErrorMsg", () => {
    const selected = getErrorMsg.resultFunc(mockParameters.search);
    expect(selected).toEqual("");
  });
});
