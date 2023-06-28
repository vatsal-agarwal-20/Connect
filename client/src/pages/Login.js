import React from "react";
import logo from "../images/logo.png"

const applogo={
  height:"3em",
  width:"5em",
  mixBlendMode:"multiply"
}
const Login = () => {

  return (
    <div className="auth_page">
      <form className="inner-shadow">
        <h3 className="text-uppercase text-center mb-4 auth-heading ">
        <img src={logo} alt="" style={applogo}/>
        </h3>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <div className="outer-shadow hover-in-shadow form-input-wrap">
            <input
              type="email"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
            />
          </div>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <div className="pass">
            <div className="outer-shadow hover-in-shadow form-input-wrap">
              <input
                className="form-control"
                id="exampleInputPassword1"
                name="password"
              />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-evenly  mx-0 mb-4">
          <label htmlFor="User">
            User:
            <input
              type="radio"
              id="User"
              name="gender"
              defaultChecked
            />
          </label>

          <label htmlFor="Admin">
            Admin:
            <input
              type="radio"
              id="Admin"
              name="gender"
            />
          </label>
        </div>

        <button
          type="submit"
          className="btn-1 w-100 d-flex outer-shadow hover-in-shadow justify-content-center"
        >
          Login
        </button>
        <p className="my-2">
          Don't have an account?{" "}
          <div style={{ color: "crimson" }}>
            Register Now.
          </div>
        </p>
      </form>
    </div>
  );
};

export default Login;
