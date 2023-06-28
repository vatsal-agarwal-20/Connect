import React from 'react';
import Menu from './Menu';
import Sidebar from './sidebar/Sidebar';
import Login from './Login';
import Main from '../components/main/Main';
import Register from './register';

 
const Home = () => {
    return (
      <div className="home row mx-0">
        <div className="col-md-8">
          
        </div>

        <div className="col-md-4">
          <Sidebar/>
          <Main/>
          
        </div>
      </div>
    );
}

export default Home;
