import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";

const UpdateAddedFood = () => {
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
  const updateAddedFood = useLoaderData();
  console.log("update added  single food", updateAddedFood);
  const {
    _id,
    image,
    category,
    food_name,
    date,
    food_origin,
    made_by,
    quantity,
    price,
    description,
  } = updateAddedFood;

  const handleUpdateAddedFood = (e) => {
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

    const updatedAddedFood = {
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
    console.log(updatedAddedFood);
    axiosHook
      .put(`/allFoods/${_id}`, updatedAddedFood)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          alert("Food updated Successfully");
        } form.reset();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className=" bg-base-200">
      <h1 className=" font-bold text-4xl text-center mb-2">
        Update Your Added Food:{" "}
        <span className="text-[#FF3811]">{food_name}</span>
      </h1>
      <div className="relative h-[18rem]">
        <img src={image} className="h-[18rem] w-full rounded-xl" />
        <div className="absolute inset-0 bg-black opacity-20 rounded-xl"></div>
      </div>
      <form onSubmit={handleUpdateAddedFood}>
        <div className="flex gap-4">
          <div className="w-1/2">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Set Food Name</span>
              </label>
              <input
                defaultValue={food_name}
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
                defaultValue={food_origin}
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
                defaultValue={made_by}
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
                defaultValue={date}
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
                  defaultValue={price}
                  className="input border border-orange-500 focus:outline-none focus:border-2 focus:border-orange-500"
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
                  defaultValue={quantity}
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
                defaultValue={category}
                name="category"
                required
                className="input border border-orange-500 focus:outline-none focus:border-2 focus:border-orange-5000"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="">Select Food Category</option>
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
            defaultValue={image}
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
            defaultValue={description}
            className="w-full rounded-xl outline outline-orange-600"
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
    </div>
  );
};

export default UpdateAddedFood;
