/* eslint-disable react/prop-types */
const  StaffCard = ({staff}) => {
    return (
      <div className="flex flex-col items-center">
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
    <img className='my-2'
    src="https://i.ibb.co/DptJbCm/logo-Social-removebg-preview.png" alt="" />  

    </div>
    
    );
};

export default StaffCard;