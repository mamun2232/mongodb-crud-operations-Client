import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './compnonents/Home/Home';
import AddUser from './compnonents/AddUser/AddUser';
import Update from './compnonents/UpdateUser/Update';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='user/add' element={<AddUser></AddUser>}></Route>
       <Route path='/update/:id' element={<Update></Update>}> </Route>
     </Routes>
    </div>
  );
}

export default App;
