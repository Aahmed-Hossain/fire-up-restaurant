import Staff1 from "./Staff1";
import Staff2 from "./Staff2";
import Staff3 from "./Staff3";
import Staff4 from "./Staff4";

const Staffs = () => {
    return (
    <div className='my-[4rem] '>
        <h1 className='text-4xl font-bold text-center'>Meet Our Chef</h1>
        <h1 className='text-[#dc2626] text-center'>Experienced Team</h1>
        <p className='text-sm text-center my-2 text-zinc-500'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-6 my-8'>
        <Staff1></Staff1>
        <Staff2></Staff2>
        <Staff3></Staff3>
        <Staff4></Staff4>
        </div>
    </div>
    );
};
export default Staffs;

