/* eslint-disable react/no-unescaped-entities */
import chef1 from '../../assets/images/chef1.jpg'
const  Staff1 = () => {
    return (
      <div className="flex flex-col items-center">
      <img
        src={chef1}
        alt="Description"
        className="rounded-full w-52 h-52 mb-4"
      />
      <div className='text-center space-y-1'>
      <p className="font-bold text-xl">Jogen Joy</p>
      <p className='text-[#dc2626] text-sm'> Master Chef</p>
      <p className='text-[#737373]'>Skilled chef crafting exquisite dishes, blending flavors for a delightful.</p>
      </div>
    <img className='my-2'
    src="https://i.ibb.co/DptJbCm/logo-Social-removebg-preview.png" alt="" />  

    </div>
    
    );
};

export default Staff1;