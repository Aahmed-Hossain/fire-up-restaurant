import img from '../../assets/lottie/singing-contract.json'
import googleImg from '../../assets/images/google.png'
import githubImg from '../../assets/images/github.png'
import Lottie from 'lottie-react';
import { Link, useNavigate,  } from "react-router-dom";
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const navigate = useNavigate();
    const {googleLogin, githubLogin, createUser, handleUpdateProfile} = useAuth();
    
  const handleRegister = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const name = form.get("name")
    const img = form.get('img')
    const email = form.get('email')
    const password = form.get('password')
    console.log(name, img, email, email, password);

    if (password.length < 6) {
        swal("Oops", "Password must be at least 6 characters", "warning");
        return;
      }
      else if (!/(?=.*[A-Z])(?=.*[@$!%*?&])/.test(password)) {
        swal("Oops", "Password must contain at least one uppercase letter and one special character", "warning");
        return;
      }
      createUser(email, password)
      .then((res) => {
        console.log(res);
        handleUpdateProfile(name, img)
        swal("WoW!", "User created successfully!", "success");
        navigate(location?.state ? location.state : '/');
      })
      .catch((err) => {
        swal("Oops!", err.message, "error");
      });
  }
  // social login
  const hadleSocialLogin = (media) => {
    media()
    .then(res => {console.log(res)})
    .catch(err => {console.log(err)})
    
}
  return (
    <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <Lottie animationData={img}></Lottie>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm border border-[#dc2626] rounded-none">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold text-[#dc2626]">Sign Up Now</h1>
                        <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Your Name
          </label>
          <input
            className="border-b border-[#dc2626] w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none bg-transparent"
            type="text"
            id="name"
            name='name'
            placeholder="Enter your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Image URL
          </label>
          <input
            className="border-b border-[#dc2626] bg-transparent w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none"
            type="text"
            id="img"   name='img'
            placeholder="Enter your image url"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="border-b border-[#dc2626] w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none bg-transparent"
            type="email"
            id="email"
            name='email'
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="border-b border-[#dc2626] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-transparent"
            type="password"
            name='password'
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          className="hover:bg-[#dc2626] bg-[rgb(243,34,34)] font-semibold py-2 px-4 w-full text-white"
          type="submit">Register</button>
      </form>
                        <p className="divider">OR</p>
            <button  onClick={() =>hadleSocialLogin(googleLogin)}  className="rounded-full px-3 py-2 border border-[#dc2626] flex justify-around items-center mb-2 w-full"> <img className='h-[1rem] w-[1rem]' src={googleImg}alt="" /><span>Continue with Google</span></button>
            <button onClick={() =>hadleSocialLogin(githubLogin)} className="rounded-full px-3 py-2 border border-[#dc2626] flex justify-around items-center mb-2 w-full"> <img className='h-[1.5rem] w-[1.5rem]' src={githubImg}alt="" /><span>Continue with Github</span></button>
            <p className="my-2">Already have an account?<Link to={'/login'} className="text-[#dc2626] font-bold hover:underline"> Please Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Register;