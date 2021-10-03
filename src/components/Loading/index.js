import React from "react";
import barcode from "../../assets/barcode-scanner.gif";

const Loading = ({ isLoading }) => {
  return (
    isLoading && (
      <img
        src={barcode}
        alt={"loading..."}
        style={{ marginLeft: 20, width: 70 }}
      />
    )
  );
};

export default Loading;
