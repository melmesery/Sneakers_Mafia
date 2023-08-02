import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {
  SiAdidas,
  SiJordan,
  SiNewbalance,
  SiNike,
  SiPuma,
  SiUnderarmour,
} from "react-icons/si";
import { Brand, BrandsContainer } from "./Styling.js";

const Brands = () => {
  const brands = [
    <SiAdidas />,
    <SiJordan />,
    <SiNewbalance />,
    <SiNike />,
    <SiPuma />,
    <SiUnderarmour />,
  ];

  return (
    <Container fluid>
      <Row>
        <BrandsContainer>
          {brands?.map((brand, index) => {
            return (
              <Col xs={2} key={index}>
                <Brand>{brand}</Brand>
              </Col>
            );
          })}
        </BrandsContainer>
      </Row>
    </Container>
  );
};

export default Brands;
