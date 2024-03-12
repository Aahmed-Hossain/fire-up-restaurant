import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import TestimonyCard from "./TestimonyCard";
import { testimonies } from "../../../public/info";

const Testimony = () => {
  return (
    <div className="">
      <h1 className="text-center text-4xl font-bold my-2">Our Happy Clients</h1>
      <h1 className="text-[#FF3811] text-xl font-semibold mt-2 text-center">
        We Care About Our Pricious Customers & Supporters
      </h1>
      <h1 className="text-sm  dark:text-gray-200 text-center my-3 hidden md:block lg:block">
        Skilled chef crafting exquisite dishes, blending flavors for a
        delightful.Delicious cuisine, prompt service, <br />
        inviting ambiance our commitment to your dining satisfaction.
      </h1>

      <Swiper
        spaceBetween={40}
        // slidesPerView={3}
        breakpoints={{
          992: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          reverseDirection: true,
        }}
        modules={[Autoplay]}
        className="my-8"
      >
        {testimonies.map((testimony, idx) => (
          <SwiperSlide key={idx}>
            <TestimonyCard testimony={testimony}></TestimonyCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Testimony;
