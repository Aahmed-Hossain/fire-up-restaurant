import Lottie from 'lottie-react';
import lottie from '../../assets/lottie/Animation - 1699712478283.json'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (

        <div className="flex flex-col items-center justify-center h-screen">
        <Lottie className='w-[55%]' animationData={lottie}></Lottie>
        <Link className="px-4 py-2 my-4 text-white font-bold bg-[#FF3811] rounded cursor-pointer" to={'/'}>Go Home</Link>
      </div>
    );
};

export default ErrorPage;