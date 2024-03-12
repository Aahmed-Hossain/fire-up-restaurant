import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../Loading";
import PageTitle from "../PageTitle/PageTitle";

const FoodDetails = () => {
  const singleFood = useLoaderData();
  const navigation = useNavigation();
  if (!navigation.state == "idle") {
    return <Loading></Loading>;
  }
  return (
    <div className="mb-8">
      <PageTitle title={"Food Details"}></PageTitle>
      <h2 className="font-extrabold text-center uppercase text-[#FF3811] my-4 text-4xl">
        {singleFood.category}
      </h2>
      <div className=" flex flex-col md:flex-row lg:flex-row gap-4">
        {/* left container */}
        <div className="w-full md:w-block lg:w-4/6">
          <h2 className="font-extrabold text-3xl md:text-4xl lg:text-4xl mb-2">
            {singleFood.food_name}:
          </h2>
          <p className="text-[#33333380] text-justify">
            {singleFood?.description?.making_procedures ||
              singleFood?.description}
          </p>
          <div className="relative">
            <img
              className="rounded-xl h-[15rem] md:h-[19rem] lg:h-[23rem] w-full"
              src={singleFood.image}
              alt=""
            />
            <span className="absolute top-4 font-bold right-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded">
              Price:$ {singleFood.price}
            </span>
          </div>
        </div>
        {/* right container */}
        <div className="w-full md:w-block lg:w-2/6 mx-auto space-y-3">
          <h3 className="text-3xl font-bold mb-2  ">INGREDIENTS:</h3>
          <p className="text-[#33333380] text-justify">
            {singleFood?.description?.ingredients || singleFood?.description}
          </p>
          <h4 className="text-md font-semibold">
            Mady By: 
            <span className="text-red-500 font-bold text-xl">
               {singleFood.made_by}
            </span>
          </h4>
          <h5 className="text-md font-semibold">
            Originated From:
            <span className="tex-xl text-[#FF3811]">
              {singleFood.food_origin}
            </span>
          </h5>
          <h6 className="font-semibold">
            Available Quantity:
            <span className="text-red-500 font-bold text-xl">
              {singleFood.quantity}
            </span>
          </h6>
          <div className=" flex mx-auto">
            <Link
              to={`/orderNow/${singleFood._id}`}
              className="my-8 px-8  mx-auto py-2 da font-bold border-2 border-gray-600 bg-[#FF3811] rounded-md cursor-pointer text-xl text-white dark:text-gray-200"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
