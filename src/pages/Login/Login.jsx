/* eslint-disable react/no-unescaped-entities */

import { Link, useLocation, useNavigate } from "react-router-dom";

import img from "../../assets/lottie/singing-contract.json";
import swal from "sweetalert";
import Lottie from "lottie-react";
import useAuth from "../../hooks/useAuth";
import PageTitle from "../../components/PageTitle/PageTitle";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";

const Login = () => {
  const { googleLogin, githubLogin, logIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((res) => {
        console.log(res);
        swal("WoW!", "User logged in successfully!", "success");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        swal("opps!", err.message, "error");
      });
  };
  // social login
  const hadleSocialLogin = (media) => {
    media()
      .then((res) => {
        console.log(res);
        navigate(location?.state ? location.state : "/")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="hero min-h-screen">
      <PageTitle title={'Login Page'}></PageTitle>
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-11/12 md:w-1/2 lg:w-1/2 mr-12 ">
          <Lottie animationData={img}></Lottie>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm border border-[#dc2626] rounded-none">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold text-[#dc2626]">
              Login
            </h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className=" border-b border-[#dc2626] w-full py-3 px-3 focus:outline-none bg-transparent"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="border-b border-[#dc2626] w-full py-3 px-3 focus:outline-none bg-transparent"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="hover:bg-[#dc2626] bg-[rgb(243,34,34)] text-white font-bold py-2 px-4 w-full"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="divider">OR</p>
            <button
              onClick={() => hadleSocialLogin(googleLogin)}
              className="rounded-full border border-[#dc2626] flex justify-center gap-1 items-center mb-2 w-full p-2"
            >
              <FcGoogle className="text-lg "/>

              <span>Continue with Google</span>
            </button>
            <button
              onClick={() => hadleSocialLogin(githubLogin)}
              className="rounded-full border border-[#dc2626] flex justify-center gap-1 items-center mb-2 w-full p-2"
            >
              <VscGithub className="text-lg text-blue-400"/>
              <span>Continue with Github</span>
            </button>
            <p className="my-4 text-center">
              New to Fire Up Restaurant{" "}
              <Link
                className="text-orange-600 font-bold link-hover "
                to="/register"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
