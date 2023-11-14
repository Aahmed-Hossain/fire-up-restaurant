/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import edit from '../../assets/images/edit.jpg'
import useAxios from '../../hooks/useAxios';

const AddedFoodList = ({addedFood,refetch}) => {
    console.log(addedFood);
    const {_id, image, quantity ,price ,date, food_name, email,name } = addedFood;
const axiosHook = useAxios();
    const handleDelete = id => {
      const proceed = confirm('are want to proceed?')
      if(proceed){
        axiosHook.delete(`/allFoods/${id}`)
          .then(res => {
              console.log(res.data);
              if(res.data.deleteCount){
                  alert('deleted succesfully')
              }
              refetch();
          })
      }
    }
    return (
        <div className="w-9/12 mx-auto ">
      
      <div className="flex items-center justify-between gap-2  py-2 border border-slate-200 rounded-xl mb-4">
        {/* left div */}
        <div className='flex items-center gap-3'>
        <button onClick={()=>handleDelete(_id)} className=" btn-circle btn-sm opacity-50 ml-2 hover:opacity-70 bg-black text-white">
          X
        </button>
          <img className="w-[15rem] rounded-xl flex items-start" src={image} alt="" />
        <div>
          <p className='text-xl font-semibold text-[#FF3811]'>{food_name}</p>
          <p className='text-[#A2A2A2]'>Email: {email}</p>
          <p className='text-[#A2A2A2]'>Name: {name}</p>
          <p className='text-[#A2A2A2]'>Price: {price}</p>
          <p className='text-[#A2A2A2]'>Quantity: {quantity}</p>
        </div>
        </div>
        {/* right div */}
        <div className='flex items-center gap-4 pr-2'>
        <div>
          <p>Date: {date}</p>
        </div>
        <Link to={`/updateAddedFood/${_id}`}><img className='w-[2rem] hover: hover:bg-black hover:opacity-70' src={edit} alt="" />
        </Link >
        </div>
      </div>
    </div>
    );
};

export default AddedFoodList;