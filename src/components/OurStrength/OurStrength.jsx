import strength1 from '../../assets/images/strength1 (1).png'
import strength2 from '../../assets/images/strength4 (1).png'
import strength3 from '../../assets/images/strength6.png'
import strength4 from '../../assets/images/strength.png'

const OurStrength = () => {
    return (
        <div className='my-8'>
            <h2 className=' font-bold text-4xl text-center' >Our Strength</h2>
            <p className='text-[#FF3811] text-xl font-semibold mt-2 text-center'>Your Trust & Support Is Our Ultimate Goal.</p>
            <p className="text-sm dark:text-gray-200 text-center my-3 hidden md:block lg:block">Skilled chef crafting exquisite dishes, blending flavors for a delightful.Delicious cuisine,  prompt service,  <br />inviting ambiance our commitment to your dining satisfaction.</p>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center gap-4">
            
            {/* first Div */}
        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-2">
        <img className="object-cover h-[6rem] w-[35%] mx-auto" src={strength4} alt="avatar"/>
    <div className="space-y-2 text-center">
        <a className="block text-xl font-bold text-gray-800 dark:text-white" >Skilled Chef</a>
        <span className="text-sm text-gray-700 dark:text-gray-200">Delicious cuisine, prompt service, inviting ambiance our commitment to your dining satisfaction.</span>
    </div>
</div>
        {/* Second Div */}
        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-2">
        <img className="object-cover h-[6rem] w-[45%] mx-auto" src={strength3} alt="avatar"/>
    <div className="space-y-2 text-center">
        <a className="block text-xl font-bold text-gray-800 dark:text-white" >Fresh Environment</a>
        <span className="text-sm text-gray-700 dark:text-gray-200">Delicious cuisine, prompt service, inviting ambiance our commitment to your dining satisfaction.</span>
    </div>
</div>
  
        {/* Third Div */}
        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-2">
        <img className="object-cover w-[35%] mx-auto" src={strength1} alt="avatar"/>
    <div className="space-y-2 text-center">
        <a className="block text-xl font-bold text-gray-800 dark:text-white" >Enjoy & Party</a>
        <span className="text-sm text-gray-700 dark:text-gray-200">Delicious cuisine, prompt service, inviting ambiance our commitment to your dining satisfaction.</span>
    </div>
</div>
{/* 4th Div */}
<div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-2">
        <img className="object-cover w-[35%] mx-auto" src={strength2} alt="avatar"/>
    <div className="space-y-2 text-center">
        <a className="block text-xl font-bold text-gray-800 dark:text-white" >High Quality Food</a>
        <span className="text-sm text-gray-700 dark:text-gray-200">Delicious cuisine, prompt service, inviting ambiance our commitment to your dining satisfaction.</span>
    </div>
</div>
      </div>
        </div>
    );
};

export default OurStrength;