import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import ReviewCard1 from './Reviewcard1';
import ReviewCard2 from './ReviewCard2';
import ReviewCard3 from './ReviewCard3';
import ReviewCard4 from './ReviewCard4';

const Testimony = () => {
    return (

<div className='my-[6rem]'>
<h1 className="text-center text-4xl font-bold my-2">Our Happy Clients</h1>
<h1 className="text-center text-[#dc2626]">We Care About Our Customer</h1>
<h1 className="text-center text-[#737373]">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</h1>

<Swiper
  spaceBetween={40}
  slidesPerView={3}
  loop={true}
  autoplay={{
    delay: 2000,
    reverseDirection: true,
  }}
  modules={[Autoplay]}
  className='my-8'
>
  <SwiperSlide><ReviewCard1></ReviewCard1></SwiperSlide>
  <SwiperSlide> <ReviewCard2></ReviewCard2></SwiperSlide>
  <SwiperSlide> <ReviewCard3></ReviewCard3></SwiperSlide>
  <SwiperSlide> <ReviewCard4></ReviewCard4></SwiperSlide>
</Swiper>
</div>
    );
};
export default Testimony;




