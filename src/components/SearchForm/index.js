import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import {
  Form,
  Container,
  SubTitle,
  Input,
  InputContainer,
  RowContainer,
  Image,
} from "./styles";
import { submitSearch } from "../../state/search/actions";
import { useDispatch, useSelector } from "react-redux";
// import { useTranslation } from "react-i18next";
import barcodeImg from "../../assets/barcode.svg";
import barcodeErrorImg from "../../assets/barcodeError.png";
// import { ReactComponent as Logo } from './logo.svg';

function SearchForm({ loading, errorMsg }) {
  // const { t } = useTranslation();
  const dispatch = useDispatch();
  const barcode = useSelector((state) => state.search.barcode);
  const selectedItem = useSelector((state) => state.search.selectedItem);
  const [inputText, setInputText] = useState(barcode);

  useEffect(() => {
    setInputText("");
  }, [selectedItem]);

  const handleSubmit = (e) => {
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
        <SubTitle> Insert the barcode number: </SubTitle>
        <RowContainer>
          <div style={{ flexDirection: "column", display: "flex" }}>
            {errorMsg ? (
              <>
                <Image alt={barcode} src={barcodeErrorImg} />
                <span style={{ color: "indianred", fontSize: "small" }}>
                  {errorMsg}
                </span>
              </>
            ) : (
              <Image alt={barcode} src={barcodeImg} isLoading={loading} />
            )}
          </div>

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
}

export default SearchForm;
