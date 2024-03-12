/* eslint-disable react/prop-types */
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const  StaffCard = ({staff}) => {
    return (
      <div className="flex flex-col items-center border p-2 rounded shadow-lg hover:shadow-2xl">
      <img
        src={staff.image}
        alt="staff image"
        className="rounded-full w-52 h-52 mb-4"
      />
      <div className='text-center space-y-1'>
      <p className="font-bold text-xl">{staff.name}</p>
      <p className='text-[#dc2626] text-sm'>{staff.designation}</p>
      <p className='text-[#737373]'>{staff.description}</p>
      </div>
      <div className="text-2xl font-bold flex justify-center  items-center gap-4 mt-3 ">
      <FaTwitter className="text-red-600 hover:text-red-400 cursor-pointer"/>
      <FaFacebookF className="text-red-600 hover:text-red-400 cursor-pointer"/>
      <FaYoutube className="text-red-600 hover:text-red-400 cursor-pointer"/>
      <GrInstagram className="text-red-600 hover:text-red-400 cursor-pointer"/>
      </div>
    </div>
    
    );
};

export default StaffCard;