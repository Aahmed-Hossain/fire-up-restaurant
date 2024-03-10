
import swal from 'sweetalert';
import logo from '../assets/images/logo.png'
import useAuth from '../hooks/useAuth';
import NavbarLinks from "./NavbarLinks";
import {  Link, NavLink, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle/ThemeToggle';
import { useState } from 'react';


const Navbar = () => {
const [close,setClose]=useState(true);
const handleClose=()=>{
  setClose(!close)
}
const {user,logOut} = useAuth();
const navigateToLogin = useNavigate()
  const handleLogout = () =>{
    logOut()
    .then(swal("Nice!", "You logged out successfully!", "success"))
    navigateToLogin('/login')
    .catch(err => {swal(err.message)})
  }
  const links = <>
    <NavbarLinks close={close} handleClose={handleClose}></NavbarLinks>
    </>
  return (
      <div className="navbar bg-base-100">
<div className="navbar-start ">
  <div className="dropdown">
    <label onClick={handleClose} tabIndex={0} className="btn btn-ghost  lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 `} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </label>
    <ul  tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-900 text-white rounded-box w-[90px]">
    {links}
      
    </ul>
  </div>
  <Link to={'/'}>
  <img className="w-[5rem] h-[3.2rem]" src={logo} alt="" /></Link>
</div>
<div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1">
  {/* {links} */}
  <ul className={`flex gap-4 text-md font-bold lg:flex-row flex-col`}>
        <NavLink  to="/" className={({ isActive})=> isActive ? `border-b-2 border-[#FF3811] text-[#FF3811] hover:text-[#FF3811]`: `hover:text-[#FF3811] ` }>Home</NavLink>
        <NavLink  to="/allFoods" className={({ isActive})=>isActive ? 'border-b-2 text-[#FF3811] border-[#FF3811]': 'hover:text-[#FF3811]'}>All Foods</NavLink>
        <NavLink  to="/blogs" className={({ isActive})=>isActive ? 'border-b-2 text-[#FF3811] border-[#FF3811]': 'hover:text-[#FF3811]'}>Blogs</NavLink>
        </ul>
  </ul>
</div>
<div className="navbar-end">
  <ThemeToggle></ThemeToggle>
{
   user?.email ? 
  <div className="dropdown dropdown-end ">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full"><img onClick={handleClose} src={user.photoURL} /></div>
      </label>
    <ul onClick={handleClose}  tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-900 text-white rounded-box w-52  ${close ? 'hidden lg:flex' : 'visible lg:hidden'} `}>
      <li><button  className="btn btn-sm  btn-ghost">{user.displayName}</button></li>
      <li> <button className="btn btn-sm  btn-ghost"><Link to={'/orders'}> My Orders</Link></button></li>
      <li> <button className="btn btn-sm  btn-ghost"><Link to={'/addFoods'}>Add Foods</Link></button></li>
      <li> <button className="btn btn-sm btn-ghost"><Link to={'/MyAddedFoods'}>My Added Foods</Link></button></li>
      <li><button onClick={handleLogout}  className="btn btn-sm  btn-ghost">Logout</button></li>
    </ul>
  </div>
    :
    <NavLink to="/login" className={({ isActive})=>isActive ? 'border-b-2 text-[#FF3811] font-bold border-[#FF3811]': 'hover:text-[#FF3811] font-bold'}>Login</NavLink>
  }
</div>
</div>
  );
};

export default Navbar;
