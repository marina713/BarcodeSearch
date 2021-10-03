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
import Loading from "../Loading";
import barcodeImg from "../../assets/barcode.svg";

function SearchForm({ loading, errorMsg }) {
  // const { t } = useTranslation();
  const dispatch = useDispatch();
  const barcode = useSelector((state) => state.search.barcode);
  const [inputText, setInputText] = useState(barcode);
  // const advancedSearchQuery = useSelector(
  //   (state) => state.search.advancedSearchQuery
  // );
  // const history = useHistory();

  const handleSubmit = (e) => {
    console.log({ inputText });
    e.preventDefault();
    if (!loading) {
      dispatch(submitSearch(inputText));
      setInputText("");
      e.target.reset();
    }
    // history.push(`${searchText}?${advancedSearchQuery}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <SubTitle> Insert the barcode number: </SubTitle>
        <RowContainer>
          <div style={{ flexDirection: "column", display: "flex" }}>
            <Image
              src={barcodeImg}
              alt={barcode}
              isLoading={loading}
              error={!!errorMsg}
            />
            {errorMsg ? (
              <span style={{ color: "indianred", fontSize: "small" }}>
                {errorMsg}
              </span>
            ) : null}
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
