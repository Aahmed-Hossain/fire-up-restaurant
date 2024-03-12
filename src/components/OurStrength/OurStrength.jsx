
import { strengths } from '../../../public/info';
import StrengthCard from './StrengthCard';

const OurStrength = () => {
    return (
        <div className='my-8'>
            <h2 className=' font-bold text-4xl text-center' >Our Strength</h2>
            <p className='text-[#FF3811] text-xl font-semibold mt-2 text-center'>Your Trust & Support Is Our Ultimate Goal.</p>
            <p className="text-sm dark:text-gray-200 text-center my-3 hidden md:block lg:block">Skilled chef crafting exquisite dishes, blending flavors for a delightful.Delicious cuisine,  prompt service,  <br />inviting ambiance our commitment to your dining satisfaction.</p>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center gap-4">
                {
                    strengths.map((strength, idx)=>(
                        <StrengthCard key={idx} strength={strength}/>
                    ))
                }
      </div>
        </div>
    );
};

export default OurStrength;