import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading";
import useAxios from "../../hooks/useAxios";
import FoodCard from "../../components/TopFood/FoodCard";
import { useState } from "react";

const AllFood = () => {
  const [price, setPrice] = useState("");
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/allFood/${encodeURIComponent(searchTerm)}`
      );
      const data = await response.json();
      setSearchResults(data);
      setSearchTerm('')
      // console.log('serch',searchResults);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const categories = [
    "burger",
    "pizza",
    "steak",
    "French Fries",
    "Wings",
    "Dessert",
  ];
  const limit = 9;
  const hookAxios = useAxios();
  const getFoods = async () => {
    const res = await hookAxios.get(
      `/allFoods?page=${page}&limit=${limit}&sortField=price&sortOrder=${price}&category=${category}`
    );
    return res;
  };
  const {
    data: foods,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["foods", page, price, category],
    queryFn: getFoods,
  });
  console.log("all foods", foods);
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    return <p>Something Went Wrong:{error}</p>;
  }
  const pages = [...Array(Math.ceil(foods?.data?.totalFoods / limit)).keys()];
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (page < pages.length) {
      setPage(page + 1);
    }
  };
  return (
    <div className="my-6">
      <div className="flex items-center justify-between gap-8 bg-opacity-90  py-2 px-2 border-2 border-orange-600 rounded-xl mb-4">
        <div>
          <h1 className="text-3xl font-bold text-orange-500">
            Hundrends of Flavors <br /> Under One Roof
          </h1>
        </div>
        {/* serch option */}

        <div className="flex items-center border-2 border-orange-500 rounded-xl p-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}   // Call handleSearch when Enter key is pressed
            placeholder="Search Your Foods"
            className="flex-1 px-4 py-2 border-none focus:outline-none"
          />
          <button
          onClick={handleSearch}
           className="ml-2 p-2 hover:bg-orange-600 bg-orange-500 text-white rounded-full focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M21 21l-5-5m0 0a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        {/* sorting div right side */}
        <div className="flex justify-center gap-2">
          {/*  sorting  by price */}
          <div className="border-2 border-orange-500 rounded-xl p-2">
            <select
              className="flex-1 px-4 py-2 border-none focus:outline-none"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            >
              <option>Select Price Category</option>
              <option value="asc">Low to High</option>
              <option value="dsc"> High To Low</option>
            </select>
          </div>
          {/* sorting by category */}
          <div className="border-2 border-orange-500 rounded-xl p-2">
            <select
              name="category"
              value={category}
              className="flex-1 px-4 py-2 border-none focus:outline-none"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option className="">Select Food Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* all foods below */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {searchResults.length === 0
          ? foods?.data?.result?.map((food, index) => (
              <FoodCard key={index} food={food}></FoodCard>
            ))
          : searchResults.map((food, index) => (
              <FoodCard key={index} food={food}></FoodCard>
            ))}
      </div>
      <div className="join flex justify-center my-12">
        <button onClick={handlePrev} className="join-item btn">
          «
        </button>
        {isLoading ? (
          <Loading></Loading>
        ) : (
          pages.map((item, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => {
                  setPage(pageNumber);
                }}
                className={
                  pageNumber === page
                    ? "join-item btn bg-[#FF3811]"
                    : "join-item btn"
                }
              >
                {pageNumber}
              </button>
            );
          })
        )}
        <button onClick={handleNext} className="join-item btn">
          »
        </button>
      </div>
    </div>
  );
};

export default AllFood;
