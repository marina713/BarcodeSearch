export type ProductItem = {
  code?: string;
  ingredients_text?: string;
  image_url?: string;
  product_name?: string;
  brands?: string;
  "nutrition-score-fr_100g"?: string;
  nutriments?: object;
};

export type StateProps = {
  barcode: string;
  historicalData: ProductItem[];
  currentItem: ProductItem;
  errorMsg: string;
};

export const initialState: StateProps = {
  barcode: "",
  historicalData: [],
  currentItem: {},
  errorMsg: "",
};

export const SUBMIT_SEARCH = "search/SUBMIT_SEARCH";
export const SET_CURRENT_ITEM = "search/SET_CURRENT_ITEM";
export const SET_ERROR = "search/SET_ERROR";
export const ADD_TO_HISTORY = "search/ADD_TO_HISTORY";
