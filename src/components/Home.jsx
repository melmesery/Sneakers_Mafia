import React from "react";
import Brands from "./Brands.jsx";
import Footer from "./Footer.jsx";
import Services from "./Services.jsx";
import Swipper from "./Swiper.jsx";
import Recommended from "./Recommended.jsx";
import MenSwiper from "./MenSwiper.jsx";
import WomenSwiper from "./WomenSwiper.jsx";
import { styled } from "styled-components";
import { Container } from "react-bootstrap";
import { MenSection, WomenSection } from "./Styling.js";

const Home = () => {
  return (
    <div>
      <Swipper />
      <Brands />
      <Recommended />
      <MenSection>
        <Container>
          <h3>Shop men</h3>
          <MenSwiper />
        </Container>
      </MenSection>
      <WomenSection>
        <Container>
          <h3>Shop women</h3>
          <WomenSwiper />
        </Container>
      </WomenSection>
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
