import Lottie from "lottie-react";
import lottie from '../assets/lottie/25TmWgk6yi.json'

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <Lottie className='w-[55%] h-[90%]' animationData={lottie}></Lottie>
      </div>
    );
};

export default Loading;