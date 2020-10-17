import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="container_loading">
      <Spinner className="spinner" animation="border" variant="info"/>
    </div>
  );
};

export default Loading;
