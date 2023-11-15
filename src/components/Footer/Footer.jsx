import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaMapMarkerAlt ,FaMailBulk} from 'react-icons/fa';
import logo from '../../assets/images/logo.png';
const Footer = () => {
    return (
         <footer className="footer p-6 bg-gray-100 mb-4 text-base-content">
            <div>
                <Link to={'/'}>
                <img className='w-[6rem] flex items-center justify-center' src={logo} alt="" /></Link>
                <p ><span className='font-bold text-[#FF3811]'>Fire Up Restaurant</span><br />Providing reliable food since 1992</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <nav>
        <header className="text-xl footer-title">Have a Questions?</header> 
        <div className='flex justify-items-center my-2'>
        <span><FaMapMarkerAlt></FaMapMarkerAlt> </span>
        <p className='ml-4 -mt-4'>203 Fake St. Mountain View, San Francisco,<br/> California,USA</p>
        </div>
        <div className='flex justify-items-center my-2'>
        <span><FaPhoneAlt/></span>
        <p className='ml-4 -mt-2 link-hover'>+2 392 3929 210</p>
        </div>
        <div className='flex justify-items-center '>
        <span><FaMailBulk/></span>
        <p className='ml-4 -mt-2 link-hover'>FireUpRestaurant@gmail.com</p>
        </div>
      </nav> 
        </footer>
       
      
    );
};

export default Footer;