import "./Sidebar.css";
import React from "react";

const Sidebar = () => {


  return (
    <>

      <div className="sidebar_responsive" id="sidebar">
        <div className="sidebar__title">
          <div className="sidebar__img">
            <h1>Connect</h1>
          </div>
          <i className="fa fa-times" id="sidebarIcon" aria-hidden="true"></i>
        </div>

        <div className="sidebar__menu">
          <div
          >
            <i className="fa fa-th"></i>
            <a href="#!">Dashboard</a>
          </div>
          <h2>ADMIN CONTROL</h2>
          <div
          >
            <i className="fa fa-lock" aria-hidden="true"></i>
            <a href="#!">Admin Management</a>
          </div>
          <div
          >
            <i className="fa fa-ban"></i>
            <a href="#!">Spams Management</a>
          </div>
          <div
          >
            <i className="fa fa-wrench"></i>
            <a href="#!">Users Management</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-archive"></i>
            <a href="#!">xyz</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-handshake-o"></i>
            <a href="#!">xyz</a>
          </div>

          <div className="sidebar__logout">
            <i className="fa fa-power-off"></i>
            <div >
              Log out
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
