import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading";
import useAxios from "../../hooks/useAxios";
import FoodCard from "../../components/TopFood/FoodCard";

const AllFood = () => {
    const hookAxios = useAxios();
    const getFoods = async () => {
      const res = await hookAxios.get("/allFoods");
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
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {
        foods?.data?.map((food, index) => (
            <FoodCard 
            key={index}
            food={food}
            ></FoodCard>
        ))
        }
      </div>
    </div>
  );
};

export default AllFood;

