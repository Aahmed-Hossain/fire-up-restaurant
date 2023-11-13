import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import OrderList from "./OrderList";

const Orders = () => {
    const {user} = useAuth() 
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
    refetch
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
        {orders?.data?.map((order, index) => (
          <OrderList key={index} order={order} refetch={refetch}></OrderList>
        ))}
      </div>
    );
};

export default Orders;