import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import men from "../assets/men.webp";
import women from "../assets/women.webp";

const Swipper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img src={men} width={"100%"} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={women} width={"100%"} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Swipper;
