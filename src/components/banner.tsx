import { banner } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  const swiperRef = useRef<any>(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
     <>
     <div className="flex justify-center gap-2 mt-6 lg:hidden">
      <input
       className="w-[225px] h-[38px] border border-[#6C757D] text-black pl-2" 
       type="text"
       placeholder="Digite o produto" />
      <button className="text-black border-2 border-black w-[88px] h-[37px]">Search</button>
     </div>

     <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="h-[300px] md:h-[450px]"
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

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 cursor-pointer bg-black/40 text-white rounded-full p-2 hover:bg-black/70 transition"
        aria-label="Anterior"
      >
        <FiChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 z-10 -translate-y-1/2 cursor-pointer bg-black/40 text-white rounded-full p-2 hover:bg-black/70 transition"
        aria-label="Próximo"
      >
        <FiChevronRight size={24} />
      </button>
    </section>
   </>  
  );
};

export default Banner;
