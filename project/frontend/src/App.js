import {Route , Routes,Link} from "react-router-dom";
import Home from "./Home";
import './App.css';
import About from "./About";
import Hotel from "./Hotel";
import Review from "./Review";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Temples from "./Temples";
import Login from "./Login";
import './index.css';
const App = () =>{
   
    return(
      <>
      <Navbar/>      
  <Routes>
    <Route path="/" element={<Home></Home>}/>
    <Route path="/About" element={<About></About>}/>
    <Route path="/Hotel" element={<Hotel></Hotel>}/>
    <Route path="/Contact" element={<Contact></Contact>}/>
    <Route path="/Review" element={<Review></Review>}/>
    <Route path="/Temples" element={<Temples></Temples>}/>
    <Route path="/Login" element={<Login></Login>}/>
    

  </Routes>
  
     
     
      </>
    );

};
export default App;







