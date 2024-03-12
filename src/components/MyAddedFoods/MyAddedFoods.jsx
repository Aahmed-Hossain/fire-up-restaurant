import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import Loading from "../Loading";
import banner1 from "../../assets/images/banner1.jpg"
import AddedFoodList from "./AddedFoodList";
import PageTitle from "../PageTitle/PageTitle";

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
          <h1 className=" font-bold text-xl lg:text-4xl md:text-3xl text-center text-orange-500">Your Added Foods
      </h1>
          <div className="relative h-[8rem] md:h-[12rem] lg:h-[15rem] ">
  <img src={banner1} className="h-[8rem] md:h-[12rem] lg:h-[15rem] w-full lg:w-9/12 md:w-11/12 mx-auto rounded-xl" />
</div>
        {addedFoods?.data?.result?.map((addedFood, index) => (
          <AddedFoodList key={index} addedFood={addedFood} refetch={refetch}></AddedFoodList>
        ))}
        <PageTitle title={'Your Added Foods'}></PageTitle>
      </div>
    );
};

export default MyAddedFoods;