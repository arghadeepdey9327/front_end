import Navbar from "./component/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signup from './component/Signup'
import { useState } from "react";
import Login from "./component/Login";
import Error404 from "./component/404";
import CakeDetails from "./component/CakeDetails";
import FullDetails from "./component/FullCakeDetails";
export default function App() {
  const [data,setData]=useState([])
  return (
    <BrowserRouter>
          <Navbar signup="SignUp" login="Login" Cake_Details="Cake Details"/>
    <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path="/signup" element={<Signup details={data} setDeatails={setData}/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/cakeDetails" element={<CakeDetails/>}/>
    <Route path="/fullDetails" element={<FullDetails/>}/>
      <Route path="*" element={<Error404/>}/>
    </Routes>
    </BrowserRouter>
      
     );
}

