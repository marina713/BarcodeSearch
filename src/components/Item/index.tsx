import React from "react";
import { ItemBox, RowContainer, ImgContainer, Img } from "./styles";
import ItemInfo from "../ItemInfo";
import Nutriments from "./Nutriments";
import IngredientsList from "../IngredientsList";
import barcodeNoImg from "../../assets/barcodeNoImg.svg";
import { ProductItem } from "../../state/search/constants";

type Props = {
  data: ProductItem,
}

const Item = React.memo(({ data }: Props) => {

  const ITEM_INFO = [
    { label: "Name", value: data.product_name },
    { label: "Brand", value: data.brands },
    { label: "Code", value: data.code },
    { label: "Score", value: data["nutrition-score-fr_100g"] },
  ]
  return (
    <ItemBox>
      <h3>{data.product_name}</h3>
      <RowContainer>
        <ImgContainer>
          {data.image_url ? (
            <Img src={data.image_url} alt="product" />
          ) : (
            <Img src={barcodeNoImg} alt="no product" />
          )}
        </ImgContainer>
        <div>
          {ITEM_INFO.map(item => <ItemInfo
            key={item.label}
            label={item.label}
            value={item.value}
          />)}

          {data.nutriments ?
            <Nutriments /> : null}

          {data.ingredients_text ? (
            <IngredientsList
              ingredientsList={data.ingredients_text.split(",")}
            />
          ) : null}
        </div>
      </RowContainer>
    </ItemBox>

  );
});

export default Item;
