import React from "react";
import { ItemBox, RowContainer, ImgContainer, Img } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import ItemInfo from "../ItemInfo";
import barcodeNoImg from "../../assets/barcodeNoImg.svg";
import { setCurrentItem } from "../../state/search/actions";
import { ProductItem } from "../../state/search/constants";
import { getCurrentItem } from "../../state/search/selectors";

type Props = {
  data: ProductItem,
}

const Thumbnail = React.memo(({ data }: Props) => {
  const dispatch = useDispatch();
  const currentItem = useSelector(getCurrentItem);

  const handleClick = () => {
    dispatch(setCurrentItem(data));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
  const isSelected = currentItem.code === data.code;
  const ITEM_INFO = [
    { label: "Name", value: data.product_name },
    { label: "Code", value: data.code },
  ]
  return (
    <ItemBox>
      <RowContainer
        onClick={handleClick}
        selected={isSelected}
      >
        <ImgContainer>
          {data.image_url ? (
            <Img src={data.image_url} alt="product" />
          ) : (
            <Img src={barcodeNoImg} alt="no product" />
          )}
        </ImgContainer>

        <div>
          {ITEM_INFO.map(item =>
            <ItemInfo
              key={item.label}
              label={item.label}
              value={item.value}
              small
            />)}
        </div>
      </RowContainer>
    </ItemBox>

  );
});

export default Thumbnail;
