import React from "react";
import Container from "react-bootstrap/esm/Container.js";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard.jsx";
import { Recomendation } from "./Styling.js";

const Recommended = () => {
  const { items } = useSelector((state) => state.product);

  const reversedItems = [...items].reverse();
  const products = [];
  reversedItems?.map((product, index) => {
    if (index < 8) {
      products.push(product);
    }
  });

  const breakpoints = {
    320: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  };

  return (
    <Recomendation>
      <Container>
        <h3>Recommended for you</h3>
        <Swiper
          id="swiper-container"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          breakpoints={breakpoints}
        >
          {products?.map((product, index) => {
            return (
              <SwiperSlide md={3} key={index} id="swiper-slide">
                <ProductCard product={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Recomendation>
  );
};

export default Recommended;
