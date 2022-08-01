import React from "react";
import loading from "../loadergif/loading.gif";

const Spinner = () => {
  return (
    <div className="text-center my-3">
      <img src={loading} alt="" />
    </div>
  );
};

export default Spinner;
