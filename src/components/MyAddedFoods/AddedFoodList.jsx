/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import edit from '../../assets/images/edit.jpg'
import useAxios from '../../hooks/useAxios';
import swal from 'sweetalert';

const AddedFoodList = ({addedFood,refetch}) => {
    const {_id, image, quantity ,price ,date, food_name, email,customerName } = addedFood;
const axiosHook = useAxios();
    const handleDelete = id => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this.!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Yes! Your Food has been deleted!", {
            icon: "success",
          });
          axiosHook.delete(`/allFoods/${id}`)
          .then(res => {
            console.log(res.data);
            if(res.data.deleteCount){
                alert('deleted succesfully')
            }
            refetch();
        })
        } else {
          swal("Your Food not deleted!");
        }
      });
    }
    return (
        <div className="w-full md:w-11/12 lg:w-9/12 mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 items-center justify-between gap-2  border border-slate-200 rounded-xl mb-4 px-0 md:px-2 lg:px-2 ">
        {/* left container */}
        <div className='flex items-center gap-3'>
        <button onClick={()=>handleDelete(_id)} className=" btn-circle btn-sm opacity-50 ml-2 hover:opacity-70 bg-black text-white">
          X
        </button>
          <img className="w-[15rem] rounded-xl flex items-start" src={image} alt="" />
        <div>
          <p className='text-xl font-semibold text-[#FF3811]'>{food_name}</p>
          <p className='text-[#A2A2A2]'>Email: {email}</p>
          <p className='text-[#A2A2A2]'>Name: {customerName}</p>
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