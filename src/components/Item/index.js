import React from "react";
import { RowContainer } from "./styles";
import ItemInfo from "./ItemInfo";
import barcodeNoImg from "../../assets/barcodeNoImg.svg";

const Item = ({ data, isThumbnail }) => {
  return (
    <RowContainer isThumbnail={isThumbnail}>
      <div style={{ height: 150, width: 150, alignSelf: "center" }}>
        {data.image_url ? (
          <img
            src={data.image_url}
            alt="product"
            style={{ maxHeight: 150, maxWidth: 150 }}
          />
        ) : (
          <img
            src={barcodeNoImg}
            alt="no product"
            style={{ maxHeight: 150, maxWidth: 150 }}
          />
        )}
      </div>
      <div style={{ width: "100%" }}>
        <ItemInfo label={"Name"} value={data.product_name} />
        <ItemInfo label={"Brand"} value={data.brands} />
        <ItemInfo label={"Code"} value={data.code} />
        <ItemInfo label={"Score"} value={data["nutrition-score-fr_100g"]} />
      </div>
    </RowContainer>
  );
};

export default Item;
