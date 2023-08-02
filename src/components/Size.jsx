import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Fit } from "./Styling.js";

const Size = () => {
  const data = [
    3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
    12.5, 13, 13.5, 14, 14.5, 15,
  ];
  return (
    <Fit>
      <select>
        <option>Size</option>
        {data.map((item) => {
          return <option value="size">{item}</option>;
        })}
      </select>
    </Fit>
  );
};

export default Size;
