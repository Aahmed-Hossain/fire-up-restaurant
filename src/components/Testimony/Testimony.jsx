import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import ReviewCard from "./Reviewcard";
const data = [
  {
    name: "John Doe",
    designation: "Digital Marketing Expert",
    description:
      "Deliciously crafted dishes with exquisite flavors! The restaurant's diverse menu caters to every palate. The ambiance enhances the dining experience, making it a perfect culinary retreat.",
    image: "https://i.ibb.co/v3ZrB7t/staff-4-jpg.webp",
  },
  {
    name: "Jane Smith",
    designation: "UX Designer",
    description:
      "An exceptional gastronomic journey! The culinary creations are a symphony of taste and presentation. The warm and inviting ambiance adds to the pleasure of savoring extraordinary dishes memorable dining experience.",
    image: "https://i.ibb.co/CBfG8Vs/staff-3-jpg.webp",
  },
  {
    name: "Alex Johnson",
    designation: "Marketing Manager",
    description:
      "A culinary haven! The menu showcases a delightful array of dishes, each a masterpiece. The cozy ambiance with subtle decor creates an intimate and enjoyable setting for a memorable dining experience.",
    image: "https://i.ibb.co/MBqFSTs/staff-1-jpg.webp",
  },
  {
    name: "Emily Williams",
    designation: "Product Manager",
    description:
      "An epicurean's dream! The restaurant offers a delectable fusion of flavors that tantalize the taste buds. The atmosphere elevates the dining adventure, making it a must-visit",
    image: "https://i.ibb.co/zHdT4v0/staff-2-jpg.webp",
  },
];

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
        {data.map((datum, idx) => (
          <SwiperSlide key={idx}>
            <ReviewCard datum={datum}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Testimony;
