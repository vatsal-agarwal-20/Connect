import React from 'react';
import Menu from './Menu';
import Sidebar from './sidebar/Sidebar';
import Login from './Login';

 
const Home = () => {
    return (
      <div className="home row mx-0">
        <div className="col-md-8">
          
        </div>

        <div className="col-md-4">
          <Sidebar/>
          <Menu/>
          <Login/>
        </div>
      </div>
    );
}

export default Home;
