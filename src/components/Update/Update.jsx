import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useLoaderData } from "react-router-dom";


const Update = () => {
    const updateFood = useLoaderData()
    console.log('update single food',updateFood);
    const {_id, image, category,food_id,food_name, food_origin, order_count, quantity,price,made_by} = updateFood;
    const { user } = useAuth();

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const email = user?.email;
        const date = form.date.value;
        const quantity = form.quantity.value;
        const updateOrder = { customerName: name, email, date,price,category,food_origin,order_count,food_id,made_by,quantity,image, food_name}
        console.log(updateOrder);
        axios.put(`http://localhost:5000/orders/${_id}`,updateOrder)
        .then(res=> {console.log(res.data)
          if(res.data.modifiedCount>0){
            alert('Food updated Successfully')
          }
        })
        .catch(error=> console.log(error));
    }
    return (
        <div className=" p-4 bg-base-200">
          <div className="relative h-[18rem]">
  <img src={image} className="h-[18rem] w-full rounded-xl" />
  <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
</div>
            <h2 className="text-center mt-3  font-bold text-3xl">Update: <span className="text-[#FF3811]">{food_name}</span></h2>
      <form onSubmit={handleUpdate}>
        <div className="flex gap-4">
        <div className="w-1/2">
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" defaultValue={user?.displayName} placeholder="Your Name" name="name" className="input focus:outline-orange-600" required  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input focus:outline-orange-600" defaultValue={user?.email} required readOnly/>
        </div>
        </div>
        <div className="w-1/2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input name="date" type="date" className="input focus:outline-orange-600" required />
        </div>
        <div className="flex justify-between">
        <div className="">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input defaultValue={ price} className="input focus:outline-orange-600" name="price" required readOnly />
        </div>
        <div className="">
          <label className="label">
            <span className="label-text">Set Quantiy</span>
          </label>
          <input name="quantity" placeholder={'Available Quantity: '+ quantity} className="input focus:outline-orange-600" required  />
        </div>
        </div>
        </div>
        </div>
        <input type="submit" className=" py-2 px-4 w-full rounded text-white font-bold text-lg bg-[#FF3811] my-3" value="Update Your Order" />
      </form>
    </div>
    );
};

export default Update;