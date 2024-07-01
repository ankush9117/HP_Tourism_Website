
import React from "react";
import { NavLink } from "react-router-dom";
const Navbar=()=>{
    return(<>
    {/* navbar working */}
    <nav  className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    < NavLink className="navbar-brand" to="#"><img data-aos="zoom-in" data-aos-duration="3000"  src="https://i.pinimg.com/736x/68/44/9e/68449e69d755bbb605242ed5bbf47bfe.jpg"style={{width:'80px',height:'80px',borderRadius:'10px', boxShadow:'0px 0px 10px black'}}></img></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{}}>
        <li className="nav-item">
          <NavLink data-aos="zoom-in" data-aos-duration="3000"  className="nav-link active" aria-current="page" to="" style={{fontFamily:'times new roman',fontSize:'25px'}}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink data-aos="zoom-in" data-aos-duration="3000"  className="nav-link" to="About"  style={{fontFamily:'times new roman',fontSize:'25px'}}>About</NavLink>
        </li>   
        <li className="nav-item">
          <NavLink data-aos="zoom-in" data-aos-duration="3000"  className="nav-link" to="Hotel"  style={{fontFamily:'times new roman',fontSize:'25px'}}>Hotels</NavLink>
        </li>   
        <li className="nav-item">
          <NavLink data-aos="zoom-in" data-aos-duration="3000"  className="nav-link" to="Temples"  style={{fontFamily:'times new roman',fontSize:'25px'}}>Temples</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink data-aos="zoom-in" data-aos-duration="3000"  className="nav-link" to="Contact"  style={{fontFamily:'times new roman',fontSize:'25px'}}>Contact</NavLink>
        </li>
         <li className="nav-item">
          <NavLink data-aos="zoom-in" data-aos-duration="3000"  className="nav-link" to="Login"  style={{fontFamily:'times new roman',fontSize:'25px'}}>Booking For Trip</NavLink>
        </li>
        <li className="nav-item">
          <NavLink data-aos="zoom-in" data-aos-duration="3000"  className="nav-link" to="Review"  style={{fontFamily:'times new roman',fontSize:'25px'}}>Review </NavLink>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{fontSize:'25px',fontFamily:'times new roman'}}/>
        <button className="btn btn-outline-primary" type="submit"  style={{fontFamily:'times new roman',fontSize:'25px'}}>Search</button>
      </form>
    </div>
  </div>
</nav>
{/* Footer working*/}
   </>
    )
}
export default Navbar;