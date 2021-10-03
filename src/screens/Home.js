import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
// import { useTranslation } from "react-i18next";
// App Components
import SearchForm from "../components/SearchForm";
import Item from "../components/Item";
import { setCurrentItem, addToHistory } from "../state/search/actions";

const findItemInHistory = (historicalData, barcode) =>
  historicalData.find((item) => item.code === barcode);

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [hasPerformedSearch, setHasPerformedSearch] = useState(false);
  const [hasFoundItem, setHasFoundItem] = useState(false);
  const [networkError, setNetworkError] = useState(false);

  const barcode = useSelector((state) => state.search.barcode);
  const currentItem = useSelector((state) => state.search.currentItem);
  const historicalData = useSelector((state) => state.search.historicalData);
  //   const showMoreSearchesClickCounter = useSelector(
  //     (state) => state.search.showMoreSearchesClickCounter
  //   );
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
        setHasFoundItem(true);
        dispatch(setCurrentItem(data));
        dispatch(addToHistory(data));
      } else {
        setHasFoundItem(false);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    console.log({ barcode });
    if (barcode !== "") {
      const itemInHistory = findItemInHistory(historicalData, barcode);
      setNetworkError(false);
      if (itemInHistory) {
        dispatch(setCurrentItem(itemInHistory));
        setHasFoundItem(true);
        setHasPerformedSearch(true);
      } else {
        let url = `https://world.openfoodfacts.org/api/v2/search?code=${barcode}&fields=code,product_name,image_url,ingredients_text,brands,categories_tags,nutrition-score-fr_100g,labels_tags`;
        setLoading(true);
        axios(url, { crossdomain: true })
          .then((response) => handleResponse(response))
          .catch((error) => {
            setNetworkError(true);
            console.log("Error fetching and parsing data", error);
          })
          .finally(() => setLoading(false));
      }
    }
  }, [barcode, historicalData, dispatch, handleResponse]);

  const errorMsg =
    hasPerformedSearch && !hasFoundItem
      ? "No results found"
      : networkError
      ? "Network Error"
      : null;
  console.log({ historicalData });
  return (
    <>
      <SearchForm loading={loading} errorMsg={errorMsg} />
      {currentItem.code ? <Item data={currentItem} /> : null}
      <div style={{ display: "flex", flexDirection: "row" }}>
        {historicalData.map((item) => (
          <Item data={item} key={item.code} isThumbnail={true} />
        ))}
      </div>
    </>
  );
};

export default Home;
