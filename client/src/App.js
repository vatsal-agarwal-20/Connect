import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Admin from './pages/admin/Admin';
import Register from './pages/register';

function App() {
  return (
    <div className="App">
        {/* <div className='component'><Admin/></div> */}
        {/* <div className='component'><Login/></div> */}
        <div className='component'><Home/></div>
          <Menu/>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Register/>
            <Login/>
          </div>
    </div>
  );
}

export default App;
