import Staff1 from "./Staff1";
import Staff2 from "./Staff2";
import Staff3 from "./Staff3";
import Staff4 from "./Staff4";

const Staffs = () => {
    return (
    <div className='my-2'>
        <h1 className='text-4xl font-bold text-center'>Meet Our Chef</h1>
        <h1 className='text-[#dc2626] text-xl font-semibold text-center'>Experienced Team</h1>
        <p className='text-sm  dark:text-gray-200 text-center my-3'>Skilled chef crafting exquisite dishes, blending flavors for a delightful.Delicious cuisine, prompt service,<br />
inviting ambiance our commitment to your dining satisfaction.</p>
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

