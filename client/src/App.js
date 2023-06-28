
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter, Route } from "react-router-dom";
import Admin from './pages/admin/Admin';

function App() {
  return (
    <div className="App">
        {/* <div className='component'><Admin/></div> */}
        {/* <div className='component'><Login/></div> */}
        <div className='component'><Home/></div>
    </div>
  );
}

export default App;
