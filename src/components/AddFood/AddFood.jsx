import banner1 from "../../assets/images/banner1.jpg";
import { useState } from "react";
import useAxios from "./../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";
import PageTitle from "../PageTitle/PageTitle";
import { useNavigate } from "react-router-dom";
const AddFood = () => {
  const navigate = useNavigate()
  const categories = [
    "Burger",
    "Pizza",
    "Steak",
    "French Fries",
    "Wings",
    "Dessert",
  ];
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const { user } = useAuth();
  const name = user?.displayName;
  const email = user?.email;
  const axiosHook = useAxios();

  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const category = form.category.value;
    const image = form.image.value;
    const food_name = form.food_name.value;
    const price = form.price.value;
    const date = form.date.value;
    const made_by = form.made_by.value;
    const food_origin = form.food_origin.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const addFood = {
      category,
      image,
      food_name,
      price,
      date,
      made_by,
      food_origin,
      quantity,
      description,
      email,
      name,
    };
    axiosHook.post("/allFoods", addFood).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        swal("Great!","Your food added successfully!", "success");
      }
      form.reset();
      navigate('/MyAddedFoods')
    });
  };
  return (
    <div className=" p-4 bg-base-200">
      <div className="relative h-[18rem]">
        <img src={banner1} className="h-[18rem] w-full rounded-xl" />
        <div className="absolute inset-0 bg-black opacity-20 rounded-xl"></div>
      </div>
      <form onSubmit={handleAddFood}>
        <div className="flex gap-4">
          <div className="w-1/2">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Set Food Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Food Name"
                name="food_name"
                className="input border border-orange-500 focus:outline-none focus:border-2 focus:border-orange-500"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Set Oring</span>
              </label>
              <input
                type="text"
                name="food_origin"
                placeholder="Your Food Origin"
                className="input border border-orange-500 focus:outline-none focus:border-2 focus:border-orange-500"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Set Chef Name</span>
              </label>
              <input
                type="text"
                name="made_by"
                placeholder="Chef of Your Food"
                className="input border border-orange-500 focus:outline-none focus:border-2 focus:border-orange-500"
                required
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Set Date</span>
              </label>
              <input
                name="date"
                type="date"
                className="input border border-orange-500 focus:outline-none focus:border-2 focus:border-orange-500"
                required
              />
            </div>
            <div className="flex justify-between ">
              <div className=" form-control">
                <label className="label">
                  <span className="label-text">Add Price</span>
                </label>
                <input
                  className="input border border-orange-500 focus:outline-none focus:border-2 focus:border-orange-500 "
                  placeholder="Food Price"
                  name="price"
                  required
                  type="number"
                  min="1"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Set Quantiy</span>
                </label>
                <input
                  name="quantity"
                  placeholder={"Add Quantity"}
                  className="input border border-orange-500 focus:outline-none focus:border-2 focus:border-orange-500"
                  type="number"
                  min="1"
                  required
                />
              </div>
            </div>

            {/* select category */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Select Category</span>
              </label>
              <select
                id="foodCategory"
                name="category"
                required
                className="input border border-orange-500 focus:outline-none focus:border-2 focus:border-orange-500"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="">Select</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            {/* end select category */}
          </div>
        </div>
        {/* image link */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Set Image Link</span>
          </label>
          <input
            type="text"
            name="image"
            placeholder="Your Food Image Link"
            className="input border border-orange-500 focus:outline-none focus:border-2 focus:border-orange-500"
            required
          />
        </div>
        {/* text area (description) */}
        <div>
          <label className="label">
            <span className="label-text">Describe About Your Food</span>
          </label>
          <textarea
            className="w-full rounded-xl    border border-orange-500 focus:outline-none focus:border-2 focus:border-orange-500"
            name="description"
            id=""
            rows="6"
            required
          ></textarea>
        </div>

        <input
          type="submit"
          className=" py-2 px-4 w-full rounded text-white font-bold text-lg bg-[#FF3811] my-3"
          value="Add Your Food"
        />
      </form>
      <PageTitle title={'Add Foods'}></PageTitle>
    </div>
  );
};

export default AddFood;
