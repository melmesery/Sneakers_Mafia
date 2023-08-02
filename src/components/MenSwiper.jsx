import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetAllProductsQuery } from "../store/productsApi.js";
import ProductCard from "./ProductCard.jsx";

const MenSwiper = () => {
  const { data } = useGetAllProductsQuery();

  const maleProducts = [];
  data?.products?.map((product) => {
    if (product.gender === "male") {
      maleProducts.push(product);
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
    <Swiper
      id="swiper-container"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      breakpoints={breakpoints}
    >
      {maleProducts.map((product, index) => {
        if (index < 8) {
          return (
            <SwiperSlide md={3} key={index} id="swiper-slide">
              <ProductCard product={product} />
            </SwiperSlide>
          );
        }
      })}
    </Swiper>
  );
};

export default MenSwiper;
