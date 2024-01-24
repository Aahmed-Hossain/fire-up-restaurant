import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Loading from "./../Loading";
import FoodCard from "./FoodCard";
import { Link } from "react-router-dom";

const TopFood = () => {
  const hookAxios = useAxios();
  const getFoods = async () => {
    const res = await hookAxios.get("/allFoods?sortField=order_count&sortOrder=dsc");
    return res;
  };
  const {
    data: foods,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ["foods"], queryFn: getFoods });
  console.log(foods);
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    return <p>Something Went Wrong:{error}</p>;
  }
  return (
    <div className="my-6">
      <h2 className=" font-bold text-4xl text-center">Our Top Foods Zone</h2>
      <p className="text-[#FF3811] mt-2 text-xl font-semibold text-center">
        You will get our the most six ordered food in this zone.
      </p>
      <p className="text-sm  dark:text-gray-200 text-center my-3">
        Skilled chef crafting exquisite dishes, blending flavors for a
        delightful.Delicious cuisine, prompt service, <br />
        inviting ambiance our commitment to your dining satisfaction.
      </p>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {
        foods?.data?.result?.slice(0,6).map((food, index) => (
            <FoodCard 
            key={index}
            food={food}
            ></FoodCard>
        ))
        }
      </div>
      <div className="mt-4 flex  mx-auto">
      <Link className="my-8 px-16 mx-auto py-2 da font-bold border-2 border-gray-600 bg-[#FF3811] rounded-md cursor-pointer text-xl text-white dark:text-gray-200" to={'/allFoods'}>See All</Link>

      </div>
    </div>
  );
};

export default TopFood;

