import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Tutorcard from "./Tutorcard";
import { ref, onValue, set } from "firebase/database";
import { db } from "../firebase";
import "./Autocarousel.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual } from "swiper/modules";

function Autocarousel({ autoSlide = true, autoSlideInterval = 3000 }) {
  const [data, setData] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(5);

  const carouselRef = useRef(null);
  const [swiperRef, setSwiperRef] = useState(null);
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);


  useLayoutEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
    handleResize();
  } , [width])

  const handleResize = () => {
    const width = window.innerWidth;
    if (width > 1200) {
      setSlidesPerView(5);
    } else if (width > 900) {
      setSlidesPerView(4);
    } else if (width > 700) {
      setSlidesPerView(3);
    } else if (width > 500) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(1);
    }
  };

  const fetchData = async () => {
    const dataRef = ref(db, "tutors/"); // Replace with your reference
    // dataRef.orderByChild('nestedObject.subject').equalTo('Chemistry')
    onValue(
      dataRef,
      (snapshot) => {
        const retrievedData = [];
        snapshot.forEach((childSnapshot) => {
          const item = childSnapshot.val();
          const uid = childSnapshot.key;
          retrievedData.push({ uid, ...item });
        });
        setData(retrievedData);
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );
    console.log(data);
  };

  const [currentIndex, setCurrentIndex] = useState(0);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    // <div className="carousel-container">
    //   <ul className="carousel" ref={carouselRef}>
    //     {data &&
    //       data.map((item) => (
    //         <li key={item.uid} className="carousel-item">
    //           <Tutorcard
    //             id={item.uid}
    //             name={item.name}
    //             aboutclass={item.aboutclass}
    //             profilepic={item.profilepic}
    //             bio={item.bio}
    //             sub={item.sub}
    //           />
    //         </li>
    //       ))}
    //   </ul>
    // </div>
<>
<Swiper
        slidesPerView={slidesPerView}
        centeredSlides={width>500 ? true : false}
        spaceBetween={width>500 ? 50: 0}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay,Virtual]}
        className="mySwiper"
      >
        {data &&
          data.map((item) => (
             <SwiperSlide className={width <500 ?`flex w-full justify-center items-center` : `grid gap-8`} ><Tutorcard
                id={item.uid}
                name={item.name}
                aboutclass={item.aboutclass}
                profilepic={item.profilepic}
                bio={item.bio}
                sub={item.sub}
              />
              </SwiperSlide> 
          ))}
      </Swiper>
    </>
  );
}

export default Autocarousel;
