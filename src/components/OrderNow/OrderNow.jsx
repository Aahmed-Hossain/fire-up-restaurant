import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import swal from "sweetalert";
import PageTitle from "../PageTitle/PageTitle";
const OrderNow = () => {
  const food = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    image,
    category,
    food_id,
    food_name,
    food_origin,
    order_count,
    quantity,
    price,
    made_by,
  } = food || {};
  const { user } = useAuth();
  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    if (food?.quantity < form.quantity.value) {
      swal("Oppss!", "Please set available Quantity!", "warning");
      return;
    }
    const name = form.name.value;
    const price = form.price.value;
    const email = user?.email;
    const date = form.date.value;
    const quantity = form.quantity.value;
    const order = {
      customerName: name,
      email,
      date,
      price,
      category,
      food_origin,
      order_count,
      food_id,
      made_by,
      quantity,
      image,
      food_name,
      _id,
    };
    axios
      .post(`https://fire-up-restaurant-server.vercel.app/orders`, order, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          swal("Great!", "Your order placed successfully!", "success");
        }
        form.reset();
        navigate("/orders");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <PageTitle title={"Order Now"}></PageTitle>
      <div className="relative h-[10rem] md:h-[18rem] lg:h-[20rem]">
        <img src={image} className="h-[10rem] md:h-[18rem] lg:h-[20rem] w-full rounded-xl" />
        <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
      </div>
      <h2 className="text-center mt-3  font-bold text-3xl text-[#FF3811]">
        {food_name}
      </h2>
      <form onSubmit={handleBookService}>
        <div className="flex flex-col md:flex-row lg:flex-row gap-0 md:gap-3 lg:gap-4">
          <div className="w-full md:w-1/2">
            {/* name input field */}
            <div className="form-control ">
              <label className="label">
                <span className="label-text  font-bold">Name:</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                placeholder="Your Name"
                name="name"
                className="input border border-orange-500 focus:outline-none focus:border-2 focus:border-orange-500"
                required
              />
            </div>
            {/* email input field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email:</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input border border-orange-500 focus:outline-none focus:border-2 focus:border-orange-500"
                defaultValue={user?.email}
                required
                readOnly
              />
            </div>
            {/* date input field */}
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Date:</span>
              </label>
              <input
                name="date"
                type="date"
                className="input border border-orange-500 focus:outline-none focus:border-2 focus:border-orange-500"
                required
              />
            </div>
            {/* Price input field */}
            <div className="flex flex-col md:flex-row lg:flex-row gap-0 md:gap-2 lg:gap-3 ">
              <div className="w-full md:w-1/2 lg:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Price:</span>
                </label>
                <input
                  defaultValue={"$" + price.toString().replace(/^\$/, "")}
                  className="input border border-orange-500 focus:outline-none focus:border-2 focus:border-orange-500 w-full"
                  name="price"
                  required
                  readOnly
                />
              </div>
             {/* Quantiy input field */}
              <div className="w-full md:w-1/2 lg:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Set Quantiy:</span>
                </label>
                <input
                  name="quantity"
                  placeholder={"Available Quantity: " + quantity}
                  className="input border border-orange-500 focus:outline-none focus:border-2 focus:border-orange-500 w-full"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <input
          type="submit"
          className="cursor-pointer py-2 px-4 w-full rounded text-white font-bold text-lg bg-[#FF3811] my-3"
          value="Place Order"
        />
      </form>
    </div>
  );
};

export default OrderNow;
