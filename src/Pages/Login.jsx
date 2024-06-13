import React from "react";
import "./Login.css";

let container = document.getElementById("container");



function Login() {
  return (
    <>
      <div class="container" id="container">
        <div class="form-container sign-up">
          <form action="">
            <h1>Create Account</h1>
            <div class="social-icon">
              <a href="#" class="icon">
                <i class="fa-brands fa-google"></i>
              </a>
              <a href="#" class="icon">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="#" class="icon">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="#" class="icon">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" class="icon">
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
            <span>or use Your email for registration</span>
            <input type="text" placeholder="Name" name="" id="" />
            <input type="email" placeholder="Email" name="" id="" />
            <input type="password" placeholder="Password" name="" id="" />
            <button>Signup</button>
          </form>
        </div>
        <div class="form-container sign-in">
          <form action="">
            <h1>Sign In</h1>
            <div class="social-icon">
              <a href="#" class="icon">
                <i class="fa-brands fa-google"></i>
              </a>
              <a href="#" class="icon">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="#" class="icon">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="#" class="icon">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" class="icon">
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
            <span>or use email ID and Password </span>
            <input type="email" placeholder="Email" name="" id="" />
            <input type="password" placeholder="Password" name="" id="" />
            <a href="">For got Your Password </a>
            <button>Sign in</button>
          </form>
        </div>
        <div class="toggle-container">
          <div class="toggle">
            <div class="toggle-pannel toggle-left">
              <h1>Welcome Back !</h1>
              <p>Enter your personal details to use all of the site features</p>
              <button
                class="hidden"
                id="login"
                onClick={(e) => {
                  e.preventDefault()
                  container.classList.remove("active");
                }}
              >
                Sign In
              </button>
            </div>
            <div class="toggle-pannel toggle-right">
              <h1>Hello friends !</h1>
              <p>
                Register with your personal details to use all of the site
                features
              </p>
              <button
                class="hidden"
                id="register"
                onClick={(e) => {
                  e.preventDefault()
                  container.classList.add("active");
                }}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
