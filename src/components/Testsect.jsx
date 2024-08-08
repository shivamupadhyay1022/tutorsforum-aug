import React, { useRef, useState, useEffect } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial from "./Testimonial";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

function Testsect() {

  const [swiperRef, setSwiperRef] = useState(null);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <>
    <Swiper
      modules={[Virtual, Navigation, Pagination]}
      onSwiper={setSwiperRef}
      centeredSlides={true}
      slidesPerView={width>500 ? 5: 1 }
      spaceBetween={1}
      navigation={true}
      virtual
      className="my-16"
    >
      <SwiperSlide className="flex justify-center">
        <Testimonial />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
        <Testimonial />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
        <Testimonial />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
        <Testimonial />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
        <Testimonial />
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default Testsect