import React from 'react';
import logo from "../images/logo.png"

const applogo={
  height:"5em",
  width:"5em",
  mixBlendMode:"multiply"
}
const Register = () => {


    return (
      <div className="auth_page" style={{padding: "0 50px"}}>
        <form  className="inner-shadow">
          <h3 className="text-uppercase text-center mb-4 auth-heading">
          <img src={logo} alt="" style={applogo}/>
          </h3>
          <div className="mb-3">
            <label htmlFor="fullname" className="form-label">
              Full name
            </label>
            <div className="outer-shadow hover-in-shadow form-input-wrap">
              <input
                type="text"
                className="form-control"
                id="fullname"
                name="fullname"
                style={{ background: `${alert.fullname ? "#fd2d6a14" : ""} ` }}
              />
            </div>
            <small className="form-text text-danger">
              {alert.fullname ? alert.fullname : ""}
            </small>
          </div>

          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              User name
            </label>
            <div className="outer-shadow hover-in-shadow form-input-wrap">
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                style={{ background: `${alert.username ? "#fd2d6a14" : ""} ` }}
              />
            </div>
            <small className="form-text text-danger">
              {alert.username ? alert.username : ""}
            </small>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <div className="outer-shadow hover-in-shadow form-input-wrap">
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                name="email"
                style={{ background: `${alert.email ? "#fd2d6a14" : ""} ` }}
              />
            </div>
            <small className="form-text text-danger">
              {alert.email ? alert.email : ""}
            </small>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="pass">
              <div className="outer-shadow hover-in-shadow form-input-wrap">
                <input
                  className="form-control"
                  id="password"
                  name="password"
                  style={{
                    background: `${alert.password ? "#fd2d6a14" : ""} `,
                  }}
                />
                <small >
                </small>
              </div>
            </div>
            <small className="form-text text-danger">
              {alert.password ? alert.password : ""}
            </small>
          </div>

          <div className="mb-3">
            <label htmlFor="cf_password" className="form-label">
              Confirm Password
            </label>
            <div className="pass">
              <div className="outer-shadow hover-in-shadow form-input-wrap">
                <input
                  className="form-control"
                  id="cf_password"
                  name="cf_password"
                  style={{
                    background: `${alert.cf_password ? "#fd2d6a14" : ""} `,
                  }}
                />
                <small>
                </small>
              </div>
            </div>
            <small className="form-text text-danger">
              {alert.cf_password ? alert.cf_password : ""}
            </small>
          </div>

          <div className="d-flex justify-content-evenly  mx-0 mb-1">
            <label htmlFor="male">
              Male:
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                defaultChecked
              />
            </label>

            <label htmlFor="female">
              Female:
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
              />
            </label>
          </div>

          <button
            type="submit"
            className="btn-1 w-100 d-flex outer-shadow hover-in-shadow justify-content-center"
          >
            Register
          </button>
          <p className="my-2">
            Already have an account?{" "}
            <div style={{ color: "crimson" }}>
              Login Now.
            </div>
          </p>
        </form>
      </div>
    );
}

export default Register;
