import React from "react";
import './Hotel.css';
import { useEffect, useState } from 'react';
const Hotel=()=>{
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
    alert('Hi user your form is successfully submited');
  };
    return(
        <> <h1  data-aos="fade-up" style={{fontFamily:" Brush Script MT",textAlign:'center',fontSize:'70px'}}>
        Some Beautiful Pictures of Hotel</h1><br></br><br></br>
   <div className="row">
   <div class="col-lg-6 text-center p-3">
    <img data-aos="zoom-in" data-aos-duration="3000"  src="https://images.unsplash.com/photo-1641356917682-b2eb95fbfd23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    style={{borderRadius:'5px', width:"500px",height:"500px", boxShadow:"5px 5px 10px  5px gray"}}></img></div>
   <div class="col-lg-6 text-center p-3"><p style={{fontFamily:"times new roman",marginTop:'25%'}}>“Coming to life through the new global tagline 'Stay in the Moment,' 
  the campaign marries celebrity and culture to speak directly to the transformative power of travel.”  
 Descriptions of Hotels and what is important in writing hotel ...
A hotel is a commercial establishment that provides lodging, meals, and o
ther services to guests, travelers, and tourists. Hotels can range from small family-run 
businesses to large international chains. Most hotels list a variety 
of services, such as room service, laundry, and concierge</p>
<br></br>
<button  data-aos="fade-up"
     data-aos-duration="3000" type="button" class="btn btn-primary" style={{fontFamily:'times new roman',fontSize:'20px'}}>More Detail</button>
     </div></div>

  <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
   <hr></hr>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="row">
      <div class="col-lg-6 text-center p-3">
    <p style={{fontFamily:"times new roman",marginTop:'25%'}}>“Coming to life through the new global tagline 'Stay in the Moment,' 
  the campaign marries celebrity and culture to speak directly to the transformative power of travel.”
  Descriptions of Hotels and what is important in writing hotel ...
 A hotel is a commercial establishment that provides lodging, meals, and o
 ther services to guests, travelers, and tourists. Hotels can range from small family-run 
 businesses to large international chains. Most hotels list a variety 
 of services, such as room service, laundry, and concierge</p>
 <br></br>
 <button  data-aos="fade-up"
     data-aos-duration="3000" type="button" class="btn btn-primary" style={{fontFamily:'times new roman',fontSize:'20px'}}>More Detail</button>
     </div>
 <div class="col-lg-6 text-center p-3">
<img data-aos="zoom-in" data-aos-duration="3000"  src="https://images.unsplash.com/photo-1641356919647-781d5ad97c13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
style={{width:'500px',height:'500px',boxShadow:'5px 5px 10px  5px orange',borderRadius:'5px'}}></img></div>
</div><br></br>
<hr></hr>
<br></br>
<div class="row">
<div class="col-4">
  <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
    <nav class="nav nav-pills flex-column">
      <a class="nav-link" href="#item-1" style={{fontFamily:'Brush Script MT',fontSize:'30px'}}>Luxury Rooms</a>
      <nav class="nav nav-pills flex-column">
        <a class="nav-link ms-3 my-1" href="#item-1-1" style={{fontFamily:'Brush Script MT',fontSize:'30px'}}>Services</a>
        <a class="nav-link ms-3 my-1" href="#item-1-2" style={{fontFamily:'Brush Script MT',fontSize:'30px'}}>Food Services</a>
      </nav>
      <a class="nav-link" href="#item-2" style={{fontFamily:'Brush Script MT',fontSize:'30px'}}>Party</a>
      <a class="nav-link" href="#item-3" style={{fontFamily:'Brush Script MT',fontSize:'30px'}}>About Hotel</a>
      <nav class="nav nav-pills flex-column">
        <a class="nav-link ms-3 my-1" href="#item-3-1" style={{fontFamily:'Brush Script MT',fontSize:'30px'}}>Descriptions</a>
        <a class="nav-link ms-3 my-1" href="#item-3-2"  style={{fontFamily:'Brush Script MT',fontSize:'30px'}}>Detail</a>
      </nav>
    </nav>
  </nav>
</div>

<div class="col-8">
  <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
    <div id="item-1">
      <h4 style={{fontFamily:'times new roman'}}>luxury Rooms</h4>
      <p style={{fontFamily:'times new roman'}}>How do you describe a luxury hotel room?
Luxury room features: High-quality furnishings with opulent,
expensive touches, attention to aesthetic detail, a quiet
room with fresh air, original art on the walls, windows that open, 
robes and slippers, adequate storage, hangers, desk, reading chair,
safe, good-size flat-screen TV, iPhone/iPod dock, coffee maker.Luxury
bedrooms are to be unique creations, no two should be the same. Details 
added by hand ensure this – hand drawn shapes on each and every part. Whether 
it be the bed, the bedside table, your chest of drawers or wardrobe. Spacious.
Luxury bedrooms are to be unique creations, no two should be the same. 
Details added by hand ensure this – hand drawn shapes on each and every part.
 Whether it be the bed, the bedside table, your chest of drawers or wardrobe.</p>
 
    <div id="item-1-1">
      <h5 style={{fontFamily:'times new roman'}}>Services</h5>
      <p style={{fontFamily:'times new roman'}}>This includes everything from luxurious linens and 
        bedding to spa-quality toiletries and designer bathrobes. 
        Some hotels even offer amenities like private balconies, fireplaces,
         and in-room hot tubs, providing guests with a truly unforgettable
          experience.Five-star hotels should be run by people who are polite, 
          accommodating, and discreet. The hotel has a high staff to room ratio
           and a variety of staff members available at any time. These can include 
           a butler, doorman, and 24-hour reception. Daily housekeeping is also provided upon request.</p>
    </div>
    <div id="item-1-2">
      <h5 style={{fontFamily:'times new roman'}}>Food Services</h5>
      <p style={{fontFamily:'times new roman'}}>“Food and beverage is crucial in the growth of the luxury lodging space because it gives the hotel the ability to truly provide a curated and authentic experience that can be linked to their property,” Lou Trope, president of restaurant and hospitality consultants, LJ Trope & Co., said. “Not only does it give the guest a reason to stay and locals to come into the hotel, but it provides a distinct presence in the market that can continuously provide content for marketing and social media channels.”

Trope believes operators in the luxury segment must aim their food and beverage operations to be a leader in the market—not just in the hotel restaurant market but also in the independent restaurant market.

“Once the what about conversation starts, the concept is immediately getting watered down and will not be as sharp as it should be to attract locals as well as well as hotel guests,” Trope said.</p>
    </div>
    <div id="item-2">
      <h4 style={{fontFamily:'times new roman'}}>Party</h4>
      <p style={{fontFamily:'times new roman'}}>A Luxury Hotel is considered a hotel that provides a 
      luxurious accommodation experience to the guest. There are no set standards 
      (such as stars) for luxury hotels. Often 4 or 5-star hotels describe themselves
       as luxury. This also means that any accommodation type can use the term luxury.
        including boutique hotels, resorts, and B&Bs.</p>
    </div>
    <div id="item-3">
      <h4 style={{fontFamily:'times new roman'}}>About Hotel</h4>
      <p style={{fontFamily:'times new roman'}}>As a hotel or resort owner, think about ways you can make your 
        guests feel special and important during every part of their stay. 
        This starts at the very beginning, right at the time of booking. 
        If your guest mentions a special occasion, have your booking agent
         make a note in the reservation and pass that long to your restaurant
          or housekeeping staff. Imagine arriving at your room to find a beautiful
           display of flowers, or a complimentary bottle of sparkling wine to celebrate! 
           Your guests will always remember that special gesture.</p>
    </div>
    <div id="item-3-1">
      <h5 style={{fontFamily:'times new roman'}}>Descriptions</h5>
      <p style={{fontFamily:'times new roman'}}>How do you describe a luxury hotel room?
Luxury room features: High-quality furnishings with opulent,
expensive touches, attention to aesthetic detail, a quiet
room with fresh air, original art on the walls, windows that open, 
robes and slippers, adequate storage, hangers, desk, reading chair,
safe, good-size flat-screen TV, iPhone/iPod dock, coffee maker.Luxury
bedrooms are to be unique creations, no two should be the same. Details 
added by hand ensure this – hand drawn shapes on each and every part. Whether 
it be the bed, the bedside table, your chest of drawers or wardrobe. Spacious.
Luxury bedrooms are to be unique creations, no two should be the same. 
Details added by hand ensure this – hand drawn shapes on each and every part.
 Whether it be the bed, the bedside table, your chest of drawers or wardrobe.</p>
    </div>
    <div id="item-3-2">
      <h5 style={{fontFamily:'times new roman'}}>Detail</h5>
      <p style={{fontFamily:'times new roman'}}>How do you describe a luxury hotel room?
Luxury room features: High-quality furnishings with opulent,
expensive touches, attention to aesthetic detail, a quiet
room with fresh air, original art on the walls, windows that open, 
robes and slippers, adequate storage, hangers, desk, reading chair,
safe, good-size flat-screen TV, iPhone/iPod dock, coffee maker.Luxury
bedrooms are to be unique creations, no two should be the same. Details 
added by hand ensure this – hand drawn shapes on each and every part. Whether 
it be the bed, the bedside table, your chest of drawers or wardrobe. Spacious.
Luxury bedrooms are to be unique creations, no two should be the same. 
Details added by hand ensure this – hand drawn shapes on each and every part.
 Whether it be the bed, the bedside table, your chest of drawers or wardrobe</p>
     
    </div>
  </div>
</div>
</div>
<br></br>
<hr></hr>
<br></br>
<br></br>
<div class="row">
<h1  data-aos="fade-up" style={{fontFamily:" Brush Script MT",textAlign:'center',fontSize:'50px'}}>
        Some Beautiful view of Hotel</h1>
          <div class="col-lg-3 text-center p-3"><img data-aos="fade-up" data-aos-duration="3000" src="https://images.unsplash.com/photo-1658356738904-4cb59b2d697d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          style={{width:'350px',height:'500px',borderRadius:'2%',boxShadow:'5px 5px 10px'}} />
           <br></br>{/*<p style={{fontFamily:'Brush Script MT',fontSize:'50px',color:'Crimson',fontWeight:'bold'}}>Beach Party</p>*/}</div> 
          <div class="col-lg-3 text-center p-3"> <img data-aos="fade-down" data-aos-duration="3000" src="https://images.unsplash.com/photo-1668766055230-ece0e8d25e36?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
           style={{width:'350px',height:'500px',borderRadius:'2%',boxShadow:'5px 5px 10px',marginTop:'40%'}}/>
          {/* <p style={{fontFamily:'Brush Script MT',fontSize:'50px',color:'OrangeRed',fontWeight:'bold'}}>Wedding Deco.</p>*/}</div>
          <div class="col-lg-3 text-center p-3"> <img data-aos="fade-up" data-aos-duration="3000" src="https://images.unsplash.com/photo-1695436157373-33ed23b9e9d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
           style={{width:'350px',height:'500px',borderRadius:'2%',boxShadow:'5px 5px 10px'}}/>
          {/* <p style={{fontFamily:'Brush Script MT',fontSize:'50px',color:'DarkSlateGrey',fontWeight:'bold'}}>Diwali Celebration</p>*/}</div>
          <div class="col-lg-3 text-center p-3"><img  data-aos="fade-down" data-aos-duration="3000" src="https://images.unsplash.com/photo-1648192182983-576c87d5a931?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
           style={{width:'340px',height:'500px',borderRadius:'2%',boxShadow:'5px 5px 10px',marginTop:'40%'}}/>
          {/* <p style={{fontFamily:'Brush Script MT',fontSize:'50px',color:'DodgerBlue',fontWeight:'bold'}} >Club Party</p>*/}</div>
      </div>

<br></br>
      <br></br>
      <hr></hr><br></br>
   <div className="row">
   <h1  data-aos="fade-up" style={{fontFamily:" Brush Script MT",textAlign:'center',fontSize:'50px'}}>
        Food Counter</h1>
        <br></br>
   <div class="col-lg-6 text-center p-3">
    <img data-aos="zoom-in" data-aos-duration="3000" src="https://images.unsplash.com/photo-1484980972926-edee96e0960d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGZvb2R8ZW58MHx8MHx8fDA%3D" 
    style={{borderRadius:'5px', width:"500px",height:"600px", boxShadow:"5px 5px 10px  5px gray"}}></img></div>
   <div class="col-lg-6 text-center p-3"><p style={{fontFamily:"times new roman",marginTop:'25%'}}>“Coming to life through the new global tagline 'Stay in the Moment,' 
  the campaign marries celebrity and culture to speak directly to the transformative power of travel.”  
 Descriptions of Hotels and what is important in writing hotel ...
A hotel is a commercial establishment that provides lodging, meals, and o
ther services to guests, travelers, and tourists. Hotels can range from small family-run 
businesses to large international chains. Most hotels list a variety 
of services, such as room service, laundry, and concierge</p>
<br></br>
 <button  data-aos="zoom-in"
     data-aos-duration="3000" type="button" class="btn btn-primary" style={{fontFamily:'times new roman',fontSize:'20px'}}>More Detail</button>
     </div></div></div>

  <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
   <hr></hr>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="row">
      <div class="col-lg-6 text-center p-3">
    <p style={{fontFamily:"times new roman",marginTop:'25%'}}>“Coming to life through the new global tagline 'Stay in the Moment,' 
  the campaign marries celebrity and culture to speak directly to the transformative power of travel.”
  Descriptions of Hotels and what is important in writing hotel ...
 A hotel is a commercial establishment that provides lodging, meals, and o
 ther services to guests, travelers, and tourists. Hotels can range from small family-run 
 businesses to large international chains. Most hotels list a variety 
 of services, such as room service, laundry, and concierge</p>
 <br></br>
 <button  data-aos="zoom-in"
     data-aos-duration="3000" type="button" class="btn btn-primary" style={{fontFamily:'times new roman',fontSize:'20px'}}>More Detail</button>
     
 </div>
 <div class="col-lg-6 text-center p-3">
<img data-aos="zoom-in" data-aos-duration="3000"  src="https://plus.unsplash.com/premium_photo-1676106623769-539ecc6d7f92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8fDA%3D" 
style={{width:'500px',height:'600px',boxShadow:'5px 5px 10px  5px #C6011F',borderRadius:'5px'}}></img></div>
</div>
<hr></hr>
<br></br>
<hr></hr>
<div className="row"><div className="col-lg-12 text-center p-5" style={{backgroundColor:'#F1F1F1'}}>
  <h1 style={{fontFamily:' Brush Script MT',fontSize:'50px'}}> Fill Form </h1>
  <br></br> <fieldset  data-aos="zoom-in"
     data-aos-duration="3000"><br></br>
   <form onSubmit={handleSubmit}>
        <span style={{fontFamily:'times new roman',fontSize:'25px',fontWeight:'bold'}}>Name</span>
        <input type="text" name="name" onChange={handleForm} style={{backgroundColor:'white',fontSize:'20px',borderRadius:'20px',borderColor:'transparent'}}></input>
        <br></br>
        <br></br>
        <span style={{fontFamily:'times new roman',fontSize:'25px',fontWeight:'bold'}}>Lastname</span>
        <input type="text" name="ltname" onChange={handleForm} style={{backgroundColor:'white',fontSize:'20px',borderRadius:'20px',borderColor:'transparent'}}></input>
        <br></br>
        <br></br>
        <span style={{fontFamily:'times new roman',fontSize:'25px',fontWeight:'bold'}}>Number</span>
        <input type="Number" name="Number" onChange={handleForm} style={{backgroundColor:'white',fontSize:'20px',borderRadius:'20px',borderColor:'transparent'}}></input>
        <br></br>
        <br></br>
        <span style={{fontFamily:'times new roman',fontSize:'25px',fontWeight:'bold'}}>Adharcard</span>
        <input type="text" name="adharcard" onChange={handleForm} style={{backgroundColor:'white',fontSize:'20px',borderRadius:'20px',borderColor:'transparent'}}></input>
        <br></br>
        <br></br>
        <span style={{fontFamily:'times new roman',fontSize:'25px',fontWeight:'bold'}}>Address</span>
        <input type="text" name="Address" onChange={handleForm} style={{backgroundColor:'white',fontSize:'20px',borderRadius:'20px',borderColor:'transparent'}}></input>
        <br></br>
        <br></br>
        <span style={{fontFamily:'times new roman',fontSize:'25px',fontWeight:'bold'}}>Date of Check in</span>
        <input type="Date" name="date" onChange={handleForm} style={{backgroundColor:'white',fontSize:'20px',borderRadius:'20px',borderColor:'transparent'}}></input>
        <br></br>
        <br></br>
        <span style={{fontFamily:'times new roman',fontSize:'25px',fontWeight:'bold'}}>Days in Hotel</span>
        <input type="number" name="day" onChange={handleForm} style={{backgroundColor:'white',fontSize:'20px',borderRadius:'20px',borderColor:'transparent',textAlign:'center'}}></input>
        <br></br>
        <br></br>
        <span style={{fontFamily:'times new roman',fontSize:'25px',fontWeight:'bold'}}>Person</span>
        <input type="number" name="person" onChange={handleForm} style={{backgroundColor:'white',fontSize:'20px',borderRadius:'20px',borderColor:'transparent'}}></input>
        <br></br>
        <br></br>

        <button type='submit' onClick={handleButtonClick} style={{borderRadius:'20px',backgroundColor:"black",border:'transparent'}}><input type="submit" style={{backgroundColor:'black',fontSize:'20px',borderRadius:'30px',borderColor:'transparent',fontWeight:'bold',fontFamily:'times new roman',color:'white' }}></input>
      </button>
       </form>
       <br></br>
       </fieldset> </div></div>

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
</>
    );

}
export default Hotel;