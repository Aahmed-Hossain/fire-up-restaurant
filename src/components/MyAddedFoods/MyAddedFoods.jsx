import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import Loading from "../Loading";
import banner1 from "../../assets/images/banner1.jpg"
import AddedFoodList from "./AddedFoodList";

const MyAddedFoods = () => {
    const {user} = useAuth() 
    const hookAxios = useAxios();
  const loadFoods = async () => {
    const res = await hookAxios.get(`/allFoods?email=${user.email}`);
    return res;
  };
  const {
    data: addedFoods,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({ queryKey: ["addedFood", user], queryFn: loadFoods });
  console.log(addedFoods?.data);
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    return <p>Something Went Wrong:{error}</p>;
  }
    return (
        <div className="space-y-3">
          <div className="relative h-[15rem]">
  <img src={banner1} className="h-[15rem] w-9/12 mx-auto rounded-xl" />
  <div className="absolute inset-0 bg-black opacity-20 rounded-xl w-9/12 mx-auto"></div>
</div>
        {addedFoods?.data?.result?.map((addedFood, index) => (
          <AddedFoodList key={index} addedFood={addedFood} refetch={refetch}></AddedFoodList>
        ))}
      </div>
    );
};

export default MyAddedFoods;