import React, { useEffect, useState, useRef } from "react";
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
import { submitSearch, setError } from "../../state/search/actions";
import { getBarcode, getCurrentItem } from "../../state/search/selectors";
import { useDispatch, useSelector } from "react-redux";
import barcodeImg from "../../assets/barcode.svg";
import barcodeErrorImg from "../../assets/barcodeError.png";

type Props = {
  loading: boolean,
  errorMsg: string,
};

const normaliseInput = (text: string) => text.replace(/\s/g, "");

const isValidBarcode = (text: string) => !!text.match(/^\d+$/);

const SearchForm = React.memo(({ loading, errorMsg }: Props) => {
  const dispatch = useDispatch();
  const barcode = useSelector(getBarcode);
  const currentItem = useSelector(getCurrentItem);
  const [inputText, setInputText] = useState(barcode);
  const inputRef = useRef<any>();

  useEffect(() => {
    setInputText("");
  }, [currentItem]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!loading) {
      const normalisedInput = normaliseInput(inputText);
      const isValid = isValidBarcode(normalisedInput);
      if (isValid) {
        dispatch(submitSearch(normalisedInput));
        setInputText("");
        e.target.reset();
        inputRef.current && inputRef.current.blur();
      } else {
        dispatch(setError("Only numbers allowed"));
      }
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
              ref={inputRef}
            />
          </InputContainer>
        </RowContainer>
      </Container>
    </Form>
  );
});

export default SearchForm;
