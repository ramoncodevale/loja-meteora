// src/components/Banner/Banner.tsx
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import BannerControls from './banner-controls';
import { banner, bannerMobile, bannerTablet } from '../constants';
import SearchBar from './search-bar';


const Banner = () => {
  const desktopSwiperRef = useRef<any>(null);
  const tabletSwiperRef = useRef<any>(null);
  const mobileSwiperRef = useRef<any>(null);

  const handlePrev = (ref: React.RefObject<any>) => {
    if (ref.current) ref.current.slidePrev();
  };

  const handleNext = (ref: React.RefObject<any>) => {
    if (ref.current) ref.current.slideNext();
  };

  return (
    <>
      <section className="relative hidden lg:block w-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => (desktopSwiperRef.current = swiper)}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="h-[450px]"
        >
          {banner.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.img}
                alt={`Banner ${item.id}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <BannerControls
          onPrev={() => handlePrev(desktopSwiperRef)}
          onNext={() => handleNext(desktopSwiperRef)}
        />
      </section>

      <section className="relative hidden md:block lg:hidden w-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => (tabletSwiperRef.current = swiper)}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="h-[300px]"
        >
          {bannerTablet.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.img}
                alt={`Banner ${item.id}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <BannerControls
          onPrev={() => handlePrev(tabletSwiperRef)}
          onNext={() => handleNext(tabletSwiperRef)}
        />
      </section>

      <section className="relative block md:hidden w-full">
        <SearchBar />
        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => (mobileSwiperRef.current = swiper)}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="h-[300px]"
        >
          {bannerMobile.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.img}
                alt={`Banner ${item.id}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <BannerControls
          onPrev={() => handlePrev(mobileSwiperRef)}
          onNext={() => handleNext(mobileSwiperRef)}
        />
      </section>
    </>
  );
};

export default Banner;
