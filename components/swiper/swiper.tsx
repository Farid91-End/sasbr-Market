"use client"
  import React, { useRef, useState } from "react";
  // Import Swiper React components
  import { Swiper, SwiperSlide } from "swiper/react";
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/navigation";
  import "@/components/swiper/swiper";
  import banner1 from "@/public/image/banner/banner1.jpg" 
  import banner2 from "@/public/image/banner/banner2.jpg" 
  import banner3 from "@/public/image/banner/banner3.jpg" 
  import banner4 from "@/public/image/banner/banner4.jpg" 

  // import required modules
  import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";


type Props = {}

const SwiperArea = (props: Props) => {
  return (
    <div className="rounded-[10px] ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-[7px]"
      >
        <SwiperSlide>
          <Image src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperArea;