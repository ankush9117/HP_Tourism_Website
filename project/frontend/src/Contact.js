// import './Contact.css';
import { useEffect, useState } from 'react';
import './Contact.css';
// import { Link, NavLink } from "react-router-dom";
function Contact() {
  const [form, setForm] = useState({});
  const [users, setUsers] = useState([]);

  const handleForm = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const response = await fetch('http://localhost:8080/thakur',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data = await response.json();
   console.log(data);
  }

  const getUsers = async ()=>{
    const response = await fetch('http://localhost:8080/thakur',{
      method:'GET',
    })
   const data = await response.json();
   setUsers(data);
  }

  useEffect(()=>{
    getUsers();
  },[])

  const handleButtonClick=()=>{
    alert('Hi user your contact form is successfully submited');
  };

  return (
    <div>

{/* <center><img src='https://assets-global.website-files.com/5daaade3e3e3f04da71daa8e/60c9d40039e3533cb7d9373f_GIFs%20in%20Emails.gif' style={{height:'200px',borderRadius:'20px',marginTop:'-40px',width:'400px'}}></img></center>*/}
    
<div className="row"><div className="col-lg-12 text-center p-5" style={{backgroundColor:'#F1F1F1'}}>
  <h1 style={{fontFamily:' Brush Script MT',fontSize:'50px'}}> Contact Form </h1>
  <br></br> <fieldset className='w'  data-aos="zoom-in"
     data-aos-duration="3000" style={{borderRadius:'20px'}}><br></br>
     <br></br>
     <br></br>
   <form onSubmit={handleSubmit}>
        <span style={{fontFamily:'times new roman',fontSize:'25px',fontWeight:'bold'}}>Name</span>
        <input type="text" name="username" onChange={handleForm} style={{backgroundColor:'white',fontSize:'20px',borderRadius:'20px',borderColor:'transparent'}}></input>
        <br></br>
        <br></br>
        <span style={{fontFamily:'times new roman',fontSize:'25px',fontWeight:'bold'}}>Lastname</span>
        <input type="text" name="lastname" onChange={handleForm} style={{backgroundColor:'white',fontSize:'20px',borderRadius:'20px',borderColor:'transparent'}}></input>
        <br></br>
        <br></br>
        <span style={{fontFamily:'times new roman',fontSize:'25px',fontWeight:'bold'}}>Number</span>
        <input type="Number" name="Number" onChange={handleForm} style={{backgroundColor:'white',fontSize:'20px',borderRadius:'20px',borderColor:'transparent'}}></input>
        <br></br>
        <br></br>
        <span style={{fontFamily:'times new roman',fontSize:'25px',fontWeight:'bold'}}>Email</span>
        <input type="text" name="email" onChange={handleForm} style={{backgroundColor:'white',fontSize:'20px',borderRadius:'20px',borderColor:'transparent'}}></input>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
 <button type='submit' onClick={handleButtonClick} style={{borderRadius:'20px',backgroundColor:"black",border:'transparent'}}><input type="submit" style={{backgroundColor:'black',fontSize:'20px',borderRadius:'30px',borderColor:'transparent',fontWeight:'bold',fontFamily:'times new roman',color:'white' }}></input>
      </button>
       </form>
       <br></br>
       </fieldset> </div></div>
      <br></br>
      <br></br>
    
                  {/* footer */}
<div className="row">
      <div className="col-lg-12 text-center p-4" >
        <img src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png" style={{width:'50px',height:'50px'}}/>&emsp;
        <img   src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="" style={{width:'50px',height:'50px'}} />&emsp;
      <img  src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" style={{width:'50px',height:'50px'}}/>&emsp;
      <img   src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" style={{width:'50px',height:'50px'}}/>
      
       </div>
    </div>
    <div className="row" >
      <div className="col-lg-3 text-center p-5" style={{backgroundColor:'#3E3A3A'}}> <ul data-aos="fade-up"
     data-aos-duration="3000" style={{listStyle:"none",fontSize:'25px',fontFamily:'times new roman'}}><li style={{fontFamily:"Lucida Handwriting",fontWeight:"bolder",color:"white",fontSize:'40px'}}>Himachal Pradesh</li>
      <li style={{fontSize:'20px',color:'white'}}>Himachal Pradesh came into being as a Union Territory in April 1948 as a result of integration of 30 princely States spread over 27,000 sq.km. In 1954, when another
       C"class state of Bilaspur merged in Himachal Pradesh, its area increased to 28,241 sq.km.</li></ul>

    </div>
      <div className="col-lg-3 text-center p-5" style={{backgroundColor:'#3E3A3A'}}><ul data-aos="fade-up"
     data-aos-duration="3000" style={{listStyle:"none",fontSize:'20px',fontFamily:'times new roman'}}><li style={{fontSize:'40px',fontFamily:"Lucida Handwriting",fontWeight:"bolder",color:"white"}}>Useful Links</li>
      <li style={{color:"white"}}><u>Your Account</u></li>
      <li style={{color:"white"}}><u>Find the place</u></li>
      <li style={{color:"white"}}><u>Information</u></li>
      <li style={{color:"white"}}><u>Help</u></li>
      <li style={{color:"white"}}><u>Services</u></li>
      <li style={{color:"white"}}><u>SocialMedias</u></li>
      <li style={{color:"white"}}><u>Center</u></li>
      <li style={{color:"white"}}><u>Policy</u></li>
      <li style={{color:"white"}}><u>Account</u></li>
      </ul></div>
      <div className="col-lg-3 text-center p-5"  style={{backgroundColor:'#3E3A3A'}}><ul data-aos="fade-up"
     data-aos-duration="3000" style={{listStyle:"none",fontSize:'20px',fontFamily:'times new roman'}}><li style={{fontSize:'40px',fontFamily:"Lucida Handwriting",fontWeight:"bolder",color:"white"}}>Locations</li>
      <li><img src="https://cdn-icons-png.flaticon.com/128/5973/5973651.png"  style={{height:"80px"}}></img></li>
      <li style={{color:"white"}}><u>Shimla</u></li>
      <li style={{color:"white"}}><u>Manali</u></li>
      <li style={{color:"white"}}><u>Hamirpur</u></li>
      <li style={{color:"white"}}><u>kasol</u></li>
      <li style={{color:"white"}}><u>kullu</u></li>
      <li style={{color:"white"}}><u>Palampur</u></li>
      <li style={{color:"white"}}><u>Solanr</u></li>
      <li style={{color:"white"}}><u>Kurfi</u></li></ul></div>
      <div className="col-lg-3 text-center p-5"  style={{backgroundColor:'#3E3A3A'}}><ul data-aos="fade-up"
     data-aos-duration="3000"
     style={{listStyle:"none",fontSize:'20px',fontFamily:'times new roman'}}><li style={{fontSize:'40px',fontFamily:"Lucida Handwriting",fontWeight:"bolder",color:"white"}}>Address</li>
      <li><img src="https://cdn-icons-png.flaticon.com/128/9695/9695171.png" style={{height:"80px"}}></img></li>
      <li style={{color:"white"}}>Vill.Jaisinghpur,Teh.Alamphur (HP),kangra,Pin-190097,IND</li><br></br>
      <li style={{color:"white",fontSize:'30px'}}>Help Line No.</li>
      <li style={{color:"white"}}><u>0099445533</u></li>
      <li style={{color:"white"}}><u>6644234502</u></li>
</ul></div>
      </div>
      <div class="footer-copyright text-center py-3 bg-dark" style={{fontFamily:'times new roman',fontSize:'20px'}}> <span style={{color:'white'}}>© 2023 Copyright:</span>
  <a href="">sakshithakur2003.@gmail.com</a>
</div> 
    </div>
  )
}

export default Contact;