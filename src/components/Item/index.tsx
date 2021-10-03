import React from "react";
import { RowContainer, ImgContainer, Img } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import ItemInfo from "./ItemInfo";
import IngredientsList from "../IngredientsList";
import barcodeNoImg from "../../assets/barcodeNoImg.svg";
import { setCurrentItem } from "../../state/search/actions";
import { ProductItem } from "../../state/search/constants";
import { getCurrentItem } from "../../state/search/selectors";

type Props = {
  data: ProductItem,
  isThumbnail?: boolean,
}

const Item = React.memo(({ data, isThumbnail }: Props) => {
  const dispatch = useDispatch();
  const currentItem = useSelector(getCurrentItem);

  const handleClick = () => {
    if (isThumbnail) {
      dispatch(setCurrentItem(data));
    }
  };
  const isSelected = currentItem.code === data.code;
  console.log(data.ingredients_text);
  return (
    <RowContainer
      isThumbnail={isThumbnail}
      onClick={handleClick}
      selected={isSelected}
    >
      <ImgContainer isThumbnail={isThumbnail}>
        {data.image_url ? (
          <Img src={data.image_url} alt="product" isThumbnail={isThumbnail} />
        ) : (
          <Img src={barcodeNoImg} alt="no product" isThumbnail={isThumbnail} />
        )}
      </ImgContainer>
      <div style={{ width: "100%" }}>
        <ItemInfo
          label={"Name"}
          value={data.product_name}
          small={isThumbnail}
        />
        {!isThumbnail ? <ItemInfo label={"Brand"} value={data.brands} /> : null}
        <ItemInfo label={"Code"} value={data.code} small={isThumbnail} />
        {!isThumbnail ? (
          <ItemInfo label={"Score"} value={"nutrition-score-fr_100g"} />
        ) : null}
        {!isThumbnail && data.ingredients_text ? (
          <ItemInfo
            label={"Ingredients"}
            /* @ts-ignore */
            value={
              <IngredientsList
                ingredientsList={data.ingredients_text.split(",")}
              />
            }
            column
          />
        ) : null}
      </div>
    </RowContainer>
  );
});

export default Item;
