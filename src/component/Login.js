import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "./Providers/UserProvider";
import baseApi from "./utils/baseApi";
import { toast } from "react-toastify";


export default function Login() {
    const navigate = useNavigate();
    const {isUserLoggedIn, loginUser} = useContext(UserContext);
    const [loginInfo, setLoginInfo] = useState({
        email:"",
        password:""
    })
    const [signinInfo, setSignInInfo] = useState({
        name:"",
        email:"",
        password:""
    })
    const handelonSigninchange =(e)=>{
        setSignInInfo((prev)=>{
            return {
                ...prev,
                [e.target.name]:e.target.value
            };
        });

    }
    const handleOnLoginChange=(e)=>{
        setLoginInfo((prev)=>{
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
        
    }
    const handleLogin=async(e)=>{
        e.preventDefault();
        if (loginInfo.email === "" || loginInfo.password === "") {
           
            // return toast.error("fill the form please");
        }
        try {

            const res = await baseApi.post(`/userLogin`, {
              email: loginInfo.email,
              password: loginInfo.password,
            });
            if (res.status === 200) {
              
              localStorage.setItem("token", res.data.message);
            //   toast.success("Login Successfull");
              navigate("/packages", { replace: true });
              loginUser();
            }
          } catch (err) {
            // toast.error("LOGIN CREDENTIALS DID'NT MATCH");
          }
    }
    const handleSignup=async(e)=>{
        e.preventDefault();
        if(!signinInfo.name||!signinInfo.email || !signinInfo.password){
          // toast error
          return ;
        }
        try {
          const res = await baseApi.post(`/user`, {
            email: signinInfo.email,
            password: signinInfo.password,
            name:signinInfo.name
          });
          if (res.status === 200) {
            localStorage.setItem("token", res.data.message);
            toast.success("Accout created Successfull");
            navigate("/login");
          }
        } catch (err) {
          toast.error("error while creating account");
        }
  }

  
  const handelOnSignIn = (e) => {
    const container = document.getElementById("container");
    container.classList.remove("active");
  };
  const handelOnSignUp = (e) => {
    const container = document.getElementById("container");
    container.classList.add("active");
  };

  if(isUserLoggedIn) return <Navigate to="/packages" replace />
  else
  return (
    <div className=" parent-container ">
      <div className="container w-screen" id="container">
        <div className="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registeration</span>
            <input type="text" name="name" placeholder="Name" onChange={handelonSigninchange}/>
            <input type="email" name="email" placeholder="Email" onChange={handelonSigninchange}/>
            <input type="password" name="password" placeholder="Password" onChange={handelonSigninchange}/>
            <button type="submit" onClick={handleSignup}>
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" name="email" onChange={handleOnLoginChange}/>
            <input type="password" placeholder="Password" name="password" onChange={handleOnLoginChange}/>
            <a href="#">Forget Your Password?</a>
            <button type="submit" onClick={handleLogin}>
              Sign In
            </button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your credientials to start chatting. </p>
              <button className="hiddens" id="login" onClick={handelOnSignIn}>
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>New to the site? Provide us your details so you</p>
              <button
                className="hiddens"
                id="register"
                onClick={handelOnSignUp}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}