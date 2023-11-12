import Lottie from 'lottie-react';
import lottie from '../../assets/lottie/Animation - 1699712478283.json'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (

        <div className="flex flex-col items-center justify-center h-screen">
        <Lottie className='w-[55%]' animationData={lottie}></Lottie>
        <Link className="px-4 py-2 my-4 text-white font-bold bg-[#FF3811] rounded cursor-pointer" to={'/'}>Go Home</Link>
      </div>
        // <div className='flex-col justify-center items-center mx-auto border-8 border-amber-500'>
        //     <div>
        //     <Lottie className='w-[50%] border border-amber-500' animationData={lottie}></Lottie>
        //     </div>
        //     <div className='border-2 border-violet-700 text-center my-8'>
        //     <Link className='px-3 py-3 bg-[#FF3811] font-bold text-white' to={'/'}>Go Home</Link>
        //     </div>
        // </div>
    );
};

export default ErrorPage;