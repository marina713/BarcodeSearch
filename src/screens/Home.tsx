import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import SearchForm from "../components/SearchForm";
import Item from "../components/Item";
import {
  setCurrentItem,
  addToHistory,
  setError,
} from "../state/search/actions";
import { ProductItem } from "../state/search/constants";

const findItemInHistory = (historicalData: ProductItem[], barcode: string) =>
  historicalData.find((item) => item.code === barcode);

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [hasPerformedSearch, setHasPerformedSearch] = useState(false);

  const barcode = useSelector((state) => state.search.barcode);
  const currentItem = useSelector((state) => state.search.currentItem);
  const historicalData = useSelector((state) => state.search.historicalData);
  const errorMsg = useSelector((state) => state.search.errorMsg);

  const dispatch = useDispatch();

  //   const { t } = useTranslation();
  //   const code = "3263855093192";
  //   const code = "8410179012018";
  //   const code = "8437020652940";
  //   const code = "20425555";
  const handleResponse = useCallback(
    (response) => {
      setHasPerformedSearch(true);
      const data = response.data.products[0];
      if (data && data.code !== "") {
        dispatch(setCurrentItem(data));
        dispatch(addToHistory(data));
      } else {
        dispatch(setCurrentItem({}));
        dispatch(setError("No results found"));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    console.log({ barcode });
    if (barcode !== "") {
      const itemInHistory = findItemInHistory(historicalData, barcode);
      if (itemInHistory) {
        dispatch(setCurrentItem(itemInHistory));
      } else {
        let url = `https://world.openfoodfacts.org/api/v2/search?code=${barcode}&fields=code,product_name,image_url,ingredients_text,brands,categories_tags,nutrition-score-fr_100g,labels_tags`;
        setLoading(true);
        axios(url, { crossdomain: true })
          .then((response) => handleResponse(response))
          .catch((error) => {
            dispatch(setError("Network Error"));
            console.log("Error fetching and parsing data", error);
          })
          .finally(() => setLoading(false));
      }
    }
  }, [barcode, historicalData, dispatch, handleResponse]);

  const errorMessage = hasPerformedSearch && errorMsg;

  return (
    <>
      <SearchForm loading={loading} errorMsg={errorMessage} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {currentItem.code ? <Item data={currentItem} /> : null}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: 900,
          }}
        >
          {historicalData.map((item) => (
            <Item data={item} key={item.code} isThumbnail={true} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
