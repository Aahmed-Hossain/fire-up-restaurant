import StaffCard from "./StaffCard";
import { staffs } from "../../../public/info";

const Staffs = () => {
  return (
    <div className="my-2">
      <h1 className="text-4xl font-bold text-center">Meet Our Chef</h1>
      <h1 className="text-[#dc2626] text-xl font-semibold text-center">
        Experienced Team
      </h1>
      <p className="text-sm  dark:text-gray-200 text-center my-3 hidden md:block lg:block">
        Skilled chef crafting exquisite dishes, blending flavors for a
        delightful.Delicious cuisine, prompt service,
        <br />
        inviting ambiance our commitment to your dining satisfaction.
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 my-8">
      {
       staffs.map((staff,idx)=>(
        <StaffCard key={idx} staff={staff}/>
       )) 
      }
      </div>
    </div>
  );
};
export default Staffs;
