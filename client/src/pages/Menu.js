import React from "react";

const Menu = () => {
  const navLinks = [
    { label: "Home", icon: "home", path: "/" },
    { label: "Message", icon: "question_answer", path: "/message" },
    { label: "Discover", icon: "explore", path: "/discover" },
  ];



  return (
    <div className="menu" style={{backgroundColor: "black", display: "flex", justifyContent: "center"}}>
      <ul className="navbar-nav flex-row mb-2 mb-lg-0" style={{display: "flex", listStyle: "none", fontStyle: "bold"}}>
        {navLinks.map((link, index) => (
          <li key={index} style={{padding: "0 30px",color: "white"}}>
            <div className={`nav-link `} to={link.path}>
              <span className={`material-icons`}>{link.icon}</span>
            </div>
          </li>
        ))}

        <li className="nav-item dropdown" style={{ opacity: "1" }}>
          <span
            className="nav-link position-relative"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span
              style={{ color: "red"}}
              className={`material-icons`}
            >
              notifications
            </span>
            <span className="notify_length">{1}</span>
          </span>

        </li> 

        <li className="nav-item dropdown" style={{ opacity: "1" }}>
          <span
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
          </span>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{display: "flex", listStyle: "none"}}>
            <li>
              <div
                style={{ color: "white" }}
                className="dropdown-item"
              >
                Profile
              </div>
            </li>
            <li>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>

            <li>
              <div
                style={{ color: "white", paddingLeft: "30px" }}
                className="dropdown-item"
                to="/"
              >
                Logout
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
