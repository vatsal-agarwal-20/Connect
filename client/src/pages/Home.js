import React from 'react';
import Menu from './Menu';
import Sidebar from './sidebar/Sidebar';
import Login from './Login';
import Register from './Register';

 
const Home = () => {
    return (
      <div className="home row mx-0">
        <div className="col-md-8">
          
        </div>

        <div className="col-md-4">
          <Sidebar/>
          <Menu/>
          <div style={{display: "flex", justifyContent: "center"}}>
            <Register/>
            <Login/>
          </div>
        </div>
      </div>
    );
}

export default Home;
