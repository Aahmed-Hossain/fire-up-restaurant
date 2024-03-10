// import { Link } from 'react-router-dom'
// import img1 from '../../../assets/images/banner1.jpg'
// import img2 from '../../../assets/images/banner2.jpg'
// import img3 from '../../../assets/images/banner3.jpg'
// import img4 from '../../../assets/images/banner4.jpg'
// import img5 from '../../../assets/images/banner5.jpg'
// import img6 from '../../../assets/images/banner6.jpg'

// const Banner = () => {
//     return (
//         <div className="carousel h-[28rem]  rounded-xl w-full">
//   <div id="slide1" className="carousel-item relative w-full">
//     <img src={img1} className="w-full  " />
//     <div className="absolute left-0 top-0 flex items-center h-full gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white ">
//         <div className=' pl-12 w-1/2'>
//       <h1 className='my-6 text-6xl font-bold space-y-16'>Hundreds of flavors under one roof.</h1>
//       <p className='text-sm font-light'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
//       <div className='my-6 ml-24'>
//       <Link to={'/allFoods'} className="px-3 py-2 font-bold rounded-md border-2 border-[#FF3811]">View Menu</Link>
//       </div>
//       </div>
//     </div>
//     <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
//       <a href="#slide6" className="btn text-white btn-circle bg-red-600">❮</a> 
//       <a href="#slide2" className="btn btn-circle text-white bg-red-600">❯</a>
//     </div>
//   </div> 
//   <div id="slide2" className="carousel-item relative w-full">
//   <img src={img2} className="w-full  " />
//   <div className="absolute left-0 top-0 flex items-center h-full gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white ">
//         <div className=' pl-12 w-1/2'>
//       <h1 className='my-6 text-6xl font-bold space-y-16'>Hundreds of flavors under one roof.</h1>
//       <p className='text-sm font-light'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
//       <div className='my-6 ml-24'>
//       <Link to={'/allFoods'} className="px-3 py-2 font-bold rounded-md border-2 border-[#FF3811]">View Menu</Link>
//       </div>
//       </div>
//     </div>
//     <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
//       <a href="#slide1" className="btn btn-circle text-white bg-red-600">❮</a> 
//       <a href="#slide3" className="btn btn-circle text-white bg-red-600">❯</a>
//     </div>
//   </div> 
//   <div id="slide3" className="carousel-item relative w-full">
//   <img src={img3} className="w-full  " />
//   <div className="absolute left-0 top-0 flex items-center h-full gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white ">
//         <div className=' pl-12 w-1/2'>
//       <h1 className='my-6 text-6xl font-bold space-y-16'>Hundreds of flavors under one roof.</h1>
//       <p className='text-sm font-light'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
//       <div className='my-4 ml-24'>
//       <Link to={'/allFoods'} className="px-3 py-2 font-bold rounded-md border-2 border-[#FF3811]">View Menu</Link>
//       </div>
//       </div>
//     </div>
//     <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
//       <a href="#slide2" className="btn btn-circle text-white bg-red-600">❮</a> 
//       <a href="#slide4" className="btn btn-circle text-white bg-red-600">❯</a>
//     </div>
//   </div> 
//   <div id="slide4" className="carousel-item relative w-full">
//   <img src={img4} className="w-full  " />
//   <div className="absolute left-0 top-0 flex items-center h-full gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white ">
//         <div className=' pl-12 w-1/2'>
//       <h1 className='my-6 text-6xl font-bold space-y-16'>Hundreds of flavors under one roof.</h1>
//       <p className='text-sm font-light'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
//       <div className='my-4 ml-24'>
//       <Link to={'/allFoods'} className="px-3 py-2 font-bold rounded-md border-2 border-[#FF3811]">View Menu</Link>
//       </div>
//       </div>
//     </div>
//     <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
//       <a href="#slide3" className="btn btn-circle text-white bg-red-600">❮</a> 
//       <a href="#slide5" className="btn btn-circle text-white bg-red-600">❯</a>
//     </div>
//   </div>
//   <div id="slide5" className="carousel-item relative w-full">
//   <img src={img5} className="w-full  " />
//   <div className="absolute left-0 top-0 flex items-center h-full gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white ">
//         <div className=' pl-12 w-1/2'>
//       <h1 className='my-6 text-6xl font-bold space-y-16'>Hundreds of flavors under one roof.</h1>
//       <p className='text-sm font-light'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
//       <div className='my-6 ml-24'>
//       <Link to={'/allFoods'} className="px-3 py-2 font-bold rounded-md border-2 border-[#FF3811]">View Menu</Link>
//       </div>
//       </div>
//     </div>
//     <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
//       <a href="#slide4" className="btn btn-circle text-white bg-red-600">❮</a> 
//       <a href="#slide6" className="btn btn-circle text-white bg-red-600">❯</a>
//     </div>
//   </div>
//   <div id="slide6" className="carousel-item relative w-full">
//   <img src={img6} className="w-full  " />
//   <div className="absolute left-0 top-0 flex items-center h-full gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white ">
//         <div className=' pl-12 w-1/2'>
//       <h1 className='my-6 text-6xl font-bold space-y-16'>Hundreds of flavors under one roof.</h1>
//       <p className='text-sm font-light'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
//       <div className='my-6 ml-24'>
//       <Link to={'/allFoods'} className="px-3 py-2 font-bold rounded-md border-2 border-[#FF3811]">View Menu</Link>
//       </div>
//       </div>
//     </div>
//     <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
//       <a href="#slide5" className="btn btn-circle text-white bg-red-600">❮</a> 
//       <a href="#slide1" className="btn btn-circle text-white bg-red-600">❯</a>
//     </div>
//   </div>
// </div>
//     );
// };

// export default Banner;


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/banner1.jpg';
import img2 from '../../../assets/images/banner2.jpg';
import img3 from '../../../assets/images/banner3.jpg';
import img4 from '../../../assets/images/banner4.jpg';
import img5 from '../../../assets/images/banner5.jpg';
import img6 from '../../../assets/images/banner6.jpg';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // Adjust the autoplay speed in milliseconds
  };
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <Slider {...settings} className="carousel h-[28rem]  rounded-xl w-full">
      {images.map((img, index) => (
        <div key={index} className="carousel-item relative rounded-xl w-full">
          <img src={img} className="w-full rounded-xl  h-[26rem]" alt={`Slide ${index + 1}`} />
          <div className="absolute left-0 top-0 flex items-center h-full gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white rounded-xl ">
            <div className='lg:pl-12 p-4 lg:w-1/2 w-full'>
              <h1 className='my-6 lg:text-6xl md:text-3xl text-xl font-bold space-y-16'>Hundreds of flavors under one roof.</h1>
              <p className='text-sm font-light'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
              <button className="px-3 py-2 font-bold rounded-md border-2 border-[#FF3811] hover:bg-[#FF3811] my-8">
                <Link to={'/allFoods'} >View Menu</Link>
              </button>
            </div>
          </div>
          <div className=''>
          <div className="absolute flex  gap-4 justify-end right-5 bottom-8">
            <a href={`#slide${index === 0 ? images.length : index}`} className="btn text-white btn-circle bg-red-600 ">❮</a>
            <a href={`#slide${index === images.length - 1 ? 1 : index + 2}`} className="btn btn-circle text-white bg-red-600 ">❯</a>
          </div>
          </div>


         {/* <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0 lg:flex md:visible hidden">
  <a href={`#slide${index === 0 ? images.length : index}`} className="btn text-white btn-circle bg-red-600">❮</a>
  <a href={`#slide${index === images.length - 1 ? 1 : index + 2}`} className="btn btn-circle text-white bg-red-600">❯</a>
</div> */}


        </div>
      ))}
    </Slider>
  );
};

export default Banner;
