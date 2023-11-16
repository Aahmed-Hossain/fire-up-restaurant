import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import swal from "sweetalert";
import PageTitle from "../PageTitle/PageTitle";
const OrderNow = () => {
  const food = useLoaderData();
  const navigate = useNavigate();
  // console.log('single food',food);
  const {_id,image, category,food_id,food_name, food_origin, order_count, quantity,price,made_by} = food || {};
    const { user } = useAuth();
    const handleBookService = e => {
        e.preventDefault();
        const form = e.target;
        if(food?.quantity < form.quantity.value){
          swal("Oppss!", "Please set available Quantity!", "warning");
          return;
        }
        const name = form.name.value;
        const price = (form.price.value);
        const email = user?.email;
        const date = form.date.value;
        const quantity = form.quantity.value;
        const order = { customerName: name, email, date,price,category,food_origin,order_count,food_id,made_by,quantity,image, food_name,_id};
        axios.post(`http://localhost:5000/orders`,order)
        .then(res=> {console.log(res.data)
          if(res.data.insertedId){
            swal("Great!", "Your order placed successfully!", "success");
          }
          form.reset();
          navigate('/orders')
        })
        .catch(error=> console.log(error));
    }
    return (
        <div className=" bg-base-00">
          <PageTitle title={'Order Now'}></PageTitle>
          <div className="relative h-[18rem]">
  <img src={image} className="h-[18rem] w-full rounded-xl" />
  <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
</div>
            <h2 className="text-center mt-3  font-bold text-3xl text-[#FF3811]">{food_name}</h2>
      <form onSubmit={handleBookService}>
        <div className="flex gap-4">
        <div className="w-1/2">
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Name</span>
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input border border-orange-500 focus:outline-none focus:border-2 focus:border-orange-500" defaultValue={user?.email} required readOnly/>
        </div>
        </div>
        <div className="w-1/2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input name="date" type="date" className="input border border-orange-500 focus:outline-none focus:border-2 focus:border-orange-500" required />
        </div>
        <div className="flex justify-between">
        <div className="">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input defaultValue={'$' + price.toString().replace(/^\$/, '')} className="input border border-orange-500 focus:outline-none focus:border-2 focus:border-orange-500" name="price" required readOnly />
        </div>
        <div className="">
          <label className="label">
            <span className="label-text">Set Quantiy</span>
          </label>
          <input name="quantity" placeholder={'Available Quantity: '+ quantity} className="input border border-orange-500 focus:outline-none focus:border-2 focus:border-orange-500" required  />
        </div>
        </div>
        </div>
        </div>
        <input type="submit" className=" py-2 px-4 w-full rounded text-white font-bold text-lg bg-[#FF3811] my-3" value="Place Order" />
      </form>
    </div>
    );
};

export default OrderNow;