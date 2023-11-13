/* eslint-disable react/prop-types */
import axios from 'axios';
import edit from '../../assets/images/edit.jpg'

const OrderList = ({ order, refetch }) => {
  const {_id, image, quantity ,price ,date, food_name } = order;

  const handleDelete = id => {
    const proceed = confirm('are want to proceed?')
    if(proceed){
        axios.delete(`http://localhost:5000/orders/${id}`)
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
    <div className="w-9/12 mx-auto">
      <div className="flex items-center justify-between gap-2  py-2 border border-red-200  rounded-xl">
        {/* left div */}
        <div className='flex items-center gap-3'>
        <button onClick={()=>handleDelete(_id)} className=" btn-circle btn-sm opacity-50 ml-2 hover:opacity-70 bg-black text-white">
          X
        </button>
          <img className="w-[15rem] rounded-xl flex border-2 items-start" src={image} alt="" />
        <div>
          <p>{food_name}</p>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
        </div>
        </div>
        {/* right div */}
        <div className='flex items-center gap-3'>
        <div>
          <p>Date: {date}</p>
        </div>
        <div><img className='w-[2rem] hover:bg-red-300 border-2' src={edit} alt="" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
