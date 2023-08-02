import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Spinner = () => {
  const spinner = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px",
  };

  return (
    <div style={spinner}>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
