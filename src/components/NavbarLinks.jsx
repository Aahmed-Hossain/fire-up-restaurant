/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";


const NavbarLinks = ({close,handleClose}) => {
    return (
        <ul className={`flex gap-4 text-md font-bold lg:flex-row flex-col ${close ? 'hidden lg:flex' : 'visible lg:hidden'}`}>
        <NavLink onClick={handleClose} to="/" className={({ isActive})=> isActive ? `border-b-2 border-[#FF3811] text-[#FF3811] hover:text-[#FF3811]`: `hover:text-[#FF3811] ` }>Home</NavLink>
        <NavLink onClick={handleClose} to="/allFoods" className={({ isActive})=>isActive ? 'border-b-2 text-[#FF3811] border-[#FF3811]': 'hover:text-[#FF3811]'}>All Foods</NavLink>
        <NavLink onClick={handleClose} to="/blogs" className={({ isActive})=>isActive ? 'border-b-2 text-[#FF3811] border-[#FF3811]': 'hover:text-[#FF3811]'}>Blogs</NavLink>
        </ul>
    );
};

export default NavbarLinks;