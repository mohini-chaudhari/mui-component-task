import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../App.css";

import { Navigation,Pagination } from "swiper/modules";
import { Box, Container } from "@mui/material";

const carouselItem = [
  {
    id: 1,
    title: "download1.jpg",
  },
  {
    id: 2,
    title: "download2.avif",
  },
  {
    id: 3,
    title: "download3.webp",
  },
];

const ImageCarousel = () => {
  return (
    <>
      <Container maxWidth='xl' sx={{p:'0px !important'}}>
      <Swiper
        navigation={true}
        modules={[Navigation,Pagination]}
        pagination={true}
        className="mySwiper"
      >
        {carouselItem.map((item) => (
          <SwiperSlide>
            <img src={item.title}/>
            
          </SwiperSlide>
        ))}
      </Swiper>
      </Container>
    </>
  );
};
export default ImageCarousel;
