import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import SearchForm from "../components/SearchForm";
import Item from "../components/Item";
import RecentSearches from "../components/RecentSearches";
import {
  setCurrentItem,
  addToHistory,
  setError,
} from "../state/search/actions";
import { ProductItem } from "../state/search/constants";
import {
  getBarcode,
  getCurrentItem,
  getHistoricalData,
  getErrorMsg,
} from "../state/search/selectors";
import { API_ENDPOINT, errorMessages } from '../constants';
import { FlexContainer } from "./styles"

const findItemInHistory = (historicalData: ProductItem[], barcode: string) =>
  historicalData.find((item) => item.code === barcode);

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [hasPerformedSearch, setHasPerformedSearch] = useState(false);

  const barcode = useSelector(getBarcode);
  const currentItem = useSelector(getCurrentItem);
  const historicalData = useSelector(getHistoricalData);
  const errorMsg = useSelector(getErrorMsg);

  const dispatch = useDispatch();

  const handleResponse = useCallback(
    (response) => {
      setHasPerformedSearch(true);
      const data = response?.data?.product;

      if (data && data.code !== "") {
        dispatch(setCurrentItem(data));
        dispatch(addToHistory(data));
      } else {
        dispatch(setError(errorMessages.BARCODE_NOT_FOUND));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (barcode !== "") {
      const itemInHistory = findItemInHistory(historicalData, barcode);
      if (itemInHistory) {
        dispatch(setCurrentItem(itemInHistory));
      } else {
        let url = `${API_ENDPOINT}product/${barcode}/?fields=code,product_name,image_url,ingredients_text,brands,categories_tags,labels_tags,nutriments`;
        setLoading(true);
        axios(url)
          .then((response) => {
            return handleResponse(response)
          })
          .catch((e) => {
            const errorMessage = e?.response?.status === 404 ? errorMessages.BARCODE_NOT_FOUND : errorMessages.NETWORK_ERROR;
            setHasPerformedSearch(true);
            dispatch(setError(errorMessage));
          })
          .finally(() => setLoading(false));
      }
    }
  }, [barcode, historicalData, dispatch, handleResponse]);

  const errorMessage = hasPerformedSearch && errorMsg;

  return (
    <>
      <SearchForm loading={loading} errorMsg={errorMessage || ""} />
      {historicalData ? (
        <FlexContainer>
          <Item data={currentItem} />
          <RecentSearches />
        </FlexContainer>
      ) : null}
    </>
  );
};

export default Home;
