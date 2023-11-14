import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading";
import useAxios from "../../hooks/useAxios";
import FoodCard from "../../components/TopFood/FoodCard";
import { useState } from "react";

const AllFood = () => {
  const [price, setPrice] = useState('')
  const [page, setPage] = useState(1);
  const limit = 9;
  const hookAxios = useAxios();
  const getFoods = async () => {
    const res = await hookAxios.get(`/allFoods?page=${page}&limit=${limit}&sortField=price&sortOrder=${price}`);
    return res;
  };
  const {
    data: foods,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ["foods", page], queryFn: getFoods });
  console.log('all foods' ,foods);
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    return <p>Something Went Wrong:{error}</p>;
  }
  
  const pages = [...Array(Math.ceil(foods?.data?.totalFoods/limit)).keys()];
  const handlePrev = () =>{
   if(page>1){
    setPage(page-1)
   }
  }
  const handleNext = () =>{
    if(page<pages.length){
      setPage(page+1)
    }
  }
  return (
    <div className="my-6">
      {/* category and sorting  */}
      <div className="form-control">
      <label className="label">
         <span className="label-text">Sort By Price</span>
        </label>
        <select className="input input-bordered"
        onChange={(e)=>setPrice(e.target.value)}>
          <option disabled selected>Choose One</option>
          <option value="asc">Low to High</option>
          <option value="dsc">High To Low</option>
        </select>
      </div>
      {/* all foods below */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {foods?.data?.result?.map((food, index) => (
          <FoodCard key={index} food={food}></FoodCard>
        ))}
      </div>
      <div className="join flex justify-center my-12">
        <button onClick={handlePrev} className="join-item btn">«</button>
        {
          isLoading ? <Loading></Loading> :
          pages.map((item, index) =>{
            const pageNumber = index+1;
            return (
              <button key={pageNumber}
          onClick={()=>{setPage(pageNumber)}}
          className={pageNumber===page ? "join-item btn bg-[#FF3811]" : "join-item btn"}>{pageNumber}</button>
            )
          } )
        }
        <button onClick={handleNext} className="join-item btn">»</button>
      </div>
    </div>
  );
};

export default AllFood;
