
import './App.css';
import Users from './axios/Users';
import UsersService from './axios/UsersService';
import CopyFromInput from './component/CopyFromInput';
import Counter from './component/Counter';
import EvrntHandler from './component/EvrntHandler';
import Home from './component/Home';
import Input from './component/Input';
import Map from './component/Map';
import Navbar from './component/Navbar';
import Profile from './component/Profile';
import State from './component/Slate';
function App() {
  return (
    <div className="App">
     {/* <Navbar/>
     {/* <Counter/>
     <Profile/> 
     <EvrntHandler/> */}
     {/* <Input/> */}
     {/* <State/> */}
     {/* <CopyFromInput/> */}
     {/* <Map/> */}
     <Users/>
     
 

    </div>
  );
}

export default App;
