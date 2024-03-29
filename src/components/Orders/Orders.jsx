import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import OrderList from "./OrderList";
import banner1 from "../../assets/images/banner1.jpg";
import PageTitle from "../PageTitle/PageTitle";
const Orders = () => {
  const { user } = useAuth();
  const hookAxios = useAxios();
  const getOrders = async () => {
    const res = await hookAxios.get(`/orders?email=${user.email}`);
    return res;
  };
  const {
    data: orders,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({ queryKey: ["orders", user], queryFn: getOrders });
  console.log(orders?.data);
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    return <p>Something Went Wrong:{error}</p>;
  }
  return (
    <div className="space-y-3">
      <PageTitle title={"Order Lists"}></PageTitle>
      <h1 className=" font-bold text-xl lg:text-4xl md:text-3xl text-center text-orange-500">
        Your Order List
      </h1>
      <div className="relative h-[8rem] md:h-[12rem] lg:h-[15rem]">
        <img
          src={banner1}
          className="h-[8rem] md:h-[12rem] lg:h-[15rem] w-full lg:w-9/12 md:w-11/12 mx-auto rounded-xl"
        />
      </div>
      {orders?.data?.map((order, index) => (
        <OrderList key={index} order={order} refetch={refetch}></OrderList>
      ))}
    </div>
  );
};

export default Orders;
