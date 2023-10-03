import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Products from './components/Products';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';
import AddTask from './components/AddTask';
import AllTasks from './components/AllTasks';
import Login from './components/Login';
import Pnf from './components/Pnf';
import Mobiles from './components/products/Mobiles';
import Watches from './components/products/Watches';
import Televsion from './components/products/Televsion';
import Laptops from './components/products/Laptops';
import UpdateTask from './components/UpdateTask';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />} />

        // <Route path='products' element={<Products />}>
        // <Route index  element={<Televsion />} />

        //   <Route path='mobiles'  element={<Mobiles />} />
        //   <Route path='watches' element={<Watches />} />
        //   <Route path='televisions' element={<Televsion/>} />
        //   <Route path='laptops' element={<h1>Laptops</h1>} />

        // </Route>

        // <Route path='/adduser' element={<AddUser />} />
        // <Route path='/userlist' element={<UsersList />} />
        <Route path='/addtask' element={<AddTask />} />
        <Route path='/alltask' element={<AllTasks />} />
        <Route path='/updatetask/:id' element={<UpdateTask />} />

        // <Route path='/login' element={<Login />} />
        <Route path='*' element={<Pnf />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
