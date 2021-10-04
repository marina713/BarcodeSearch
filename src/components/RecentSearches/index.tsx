import React from "react";
import { useSelector } from "react-redux";
import {
  getHistoricalData
} from "../../state/search/selectors";
import { ProductItem } from "../../state/search/constants";
import Thumbnail from "../Thumbnail";
import { Wrapper, Container } from "./styles"

const RecentSearches = React.memo(() => {
  const historicalData = useSelector(getHistoricalData);

  return historicalData.length > 0 ? (
    <Container>
      <h3>Recent searches</h3>
      <Wrapper>
        {historicalData.map((item: ProductItem) => (
          <Thumbnail data={item} key={item.code} />
        ))}
      </Wrapper>
    </Container>
  ) : null;
});

export default RecentSearches;
