import React, { useEffect, useState } from "react";
import {
  Form,
  Container,
  SubTitle,
  Input,
  InputContainer,
  RowContainer,
  Image,
  ImageBox,
  ErrorMessage,
} from "./styles";
import { submitSearch } from "../../state/search/actions";
import { getBarcode, getCurrentItem } from "../../state/search/selectors";
import { useDispatch, useSelector } from "react-redux";
import barcodeImg from "../../assets/barcode.svg";
import barcodeErrorImg from "../../assets/barcodeError.png";

type Props = {
  loading: boolean,
  errorMsg: string,
};

const SearchForm = React.memo(({ loading, errorMsg }: Props) => {
  const dispatch = useDispatch();
  const barcode = useSelector(getBarcode);
  const currentItem = useSelector(getCurrentItem);
  const [inputText, setInputText] = useState(barcode);

  useEffect(() => {
    setInputText("");
  }, [currentItem]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!loading) {
      dispatch(submitSearch(inputText));
      setInputText("");
      e.target.reset();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <SubTitle>Insert the barcode number:</SubTitle>
        <RowContainer>
          <ImageBox>
            {errorMsg ? (
              <>
                <Image alt={barcode} src={barcodeErrorImg} />
                <ErrorMessage>
                  {errorMsg}
                </ErrorMessage>
              </>
            ) : (
              <Image alt={barcode} src={barcodeImg} isLoading={loading} />
            )}
          </ImageBox>

          <InputContainer isLoading={loading}>
            <Input
              type="search"
              onChange={(e) => setInputText(e.target.value)}
              value={inputText}
              name="search"
              placeholder="e.g 2334561002236"
            />
          </InputContainer>
        </RowContainer>
      </Container>
    </Form>
  );
});

export default SearchForm;
