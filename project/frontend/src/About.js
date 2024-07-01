import React from 'react';
import './index.css';
const About = () =>{
     return(
        <>
        <h1 data-aos="zoom-in"s style={{fontFamily:'Brush Script MT',fontSize:'70px',textAlign:'center'}}>Beautiful Places</h1>
      
      <br></br><br></br>
      <div class="row">
            <div class="col-lg-3 text-center p-3"><img data-aos="fade-up" data-aos-duration="3000" src="https://images.unsplash.com/photo-1597754865557-96ea6b53c9db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhpbWFjaGFsJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D" style={{width:'350px',height:'400px',borderRadius:'2%',boxShadow:'10px 10px 10px black'}} />
             <br></br>
             </div> 
            <div class="col-lg-3 text-center p-3"> <img data-aos="fade-down" data-aos-duration="3000" src="https://images.unsplash.com/photo-1609920658906-8223bd289001?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGltYWNoYWwlMjBwcmFkZXNofGVufDB8fDB8fHww"  style={{width:'350px',height:'500px',borderRadius:'2%',boxShadow:'10px 10px 10px black'}}/>
            </div>
            <div class="col-lg-3 text-center p-3"> <img data-aos="fade-up" data-aos-duration="3000" src="https://images.unsplash.com/photo-1584108132271-5189ee552144?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhpbWFjaGFsJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D"  style={{width:'350px',height:'600px',borderRadius:'2%',boxShadow:'10px 10px 10px black'}}/>
           </div>
            <div class="col-lg-3 text-center p-3"><img  data-aos="fade-down" data-aos-duration="3000" src="https://images.unsplash.com/photo-1609488971595-a4c457ee4e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGhpbWFjaGFsJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D"  style={{width:'340px',height:'700px',borderRadius:'2%',boxShadow:'10px 10px 10px black'}}/>
            </div>
        </div>
          <br></br>   
     <hr></hr>
      <br></br>
      <center>
  <button data-aos="zoom-out" class="btn btn-primary"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" style={{fontFamily:'times new roman',fontSize:'20px'}}>
    Some Tourism Paragliding Places
  </button>
  <br></br>
  <br></br>
  <hr></hr>
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel" style={{fontFamily:" Brush Script MT",fontSize:"50px"}}>Some Paragliding Places</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div>
       <p style={{fontFamily:'times new roman'}}>How much does paragliding cost in Himachal Pradesh?
Usually, paragliding in Himachal costs between INR 1500 to INR 4000. It depends on the location, the terrain's difficulty, and 
the area to be covered in the air. Since Bir is one of the most popular sites, the usual cost is around INR 1800 per person. However, 
these charges are subjected to change over time.</p>
      </div>
      <div class="dropdown mt-3">
        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" style={{fontFamily:'times new roman',fonts:'20px'}}>
          Here List
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#" style={{fontFamily:'times new roman'}}>Manali</a></li>
          <li><a class="dropdown-item" href="#" style={{fontFamily:'times new roman'}}>Kullu</a></li>
          <li><a class="dropdown-item" href="#" style={{fontFamily:'times new roman'}}>Shimla</a></li>
          <li><a class="dropdown-item" href="#" style={{fontFamily:'times new roman'}}>Palampur</a></li>
          <li><a class="dropdown-item" href="#" style={{fontFamily:'times new roman'}}>Spiti Valley</a></li>
          <li><a class="dropdown-item" href="#" style={{fontFamily:'times new roman'}}>Bejnath</a></li>
          <li><a class="dropdown-item" href="#" style={{fontFamily:'times new roman'}}>Dharamsala</a></li>
          <li><a class="dropdown-item" href="#" style={{fontFamily:'times new roman'}}>Mandi</a></li>
          <li><a class="dropdown-item" href="#" style={{fontFamily:'times new roman'}}>Dalhousie</a></li>
          <li><a class="dropdown-item" href="#" style={{fontFamily:'times new roman'}}>Solan</a></li>
          <li><a class="dropdown-item" href="#" style={{fontFamily:'times new roman'}}>Kurfi</a></li>
          <li><a class="dropdown-item" href="#" style={{fontFamily:'times new roman'}}>Kangra</a></li>
          <li><a class="dropdown-item" href="#" style={{fontFamily:'times new roman'}}>kalpa</a></li>
          <li><a class="dropdown-item" href="#" style={{fontFamily:'times new roman'}}>Bir Billing</a></li>
        </ul>
      </div>
    </div>
  </div>
</center>
<br></br>
      <div className="row">
        <div class="col-lg-6 text-center p-3">
      <p   style={{fontFamily:"times new roman",marginTop:'25%'}}>How much does paragliding cost in Himachal Pradesh?
     Usually, paragliding in Himachal costs between INR 1500 to INR 4000. It depends on the location, the terrain's difficulty, and the area to be covered 
     in the air. Since Bir is one of the most popular sites, the usual cost is around INR 1800 per person. However, these charges are subjected to change over time.
     In the past five years, over 30 paragliders have crashed at different places in Kangra and Mandi districts in Himachal Pradesh after taking off from Billing, killing 10
      pilots including foreigners. A Canadian pilot, Cheval Christian Yaves Mare,was killed when his paraglider crash-landed near Bir. Chevan was flying alone when the tragedy occurred. </p><br></br>
   <button  data-aos="zoom-in" data-aos-duration="3000" type="button" class="btn btn-primary" style={{fontFamily:'times new roman',fontSize:'20px'}}>More Detail</button>
    </div>
   <div class="col-lg-6 text-center p-3">
<img   data-aos="zoom-in" data-aos-duration="3000" src="https://www.abhibus.com/blog/wp-content/uploads/2023/05/10-Highest-Paragliding-Places-in-India-1024x683.jpg" 
style={{width:'400px',height:'400px',boxShadow:'5px 5px 10px  5px SteelBlue',borderRadius:'60%'}}></img></div>
</div>
   {/* **********      */}
   <br></br>
   <hr></hr>
   <div class="row">
          <div class="col-lg-4 text-center p-5 "><img  data-aos="fade-up"
     data-aos-duration="3000" src="https://www.honeymoonbug.com/blog/wp-content/uploads/2023/04/Local-Food-of-Himachal-Pradesh.jpg" class="rounded-circle" alt="..."  style={{ width:'200px',height:'200px',boxShadow:'5px 5px 5px rgb(219, 112, 192)'}}/>
            <h1  data-aos="fade-up"
     data-aos-duration="3000" style={{fontFamily:'Brush Script MT'}}>Himachali Thali</h1>
        <p  data-aos="fade-up"
     data-aos-duration="3000" style={{fontFamily:'times new roman'}}>What is Himachali thali?
     Himachal Pradesh Thali - Ribbons to Pastas

     Himachal Pradesh Thali is a thali meal where selected and popular dishes from this region have been put together.
      The meal is homely, yet delicious. Himachal Pradesh is a North Indian state, which has a lot of natural beauty.</p><br></br>
<button  data-aos="fade-up"
     data-aos-duration="1000" type="button" class="btn btn-primary" style={{fontFamily:'times new roman',fontSize:'20px'}}>More Detail</button>
     </div>

<div class="col-lg-4 text-center p-5 ">
    <img data-aos="fade-up"
     data-aos-duration="3000"src="https://www.foodforward.in/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBWVE9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--607aa6a825d9e75cb787b61ac3c91b3c6769c7e7/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQWdBRWFRSUFBdz09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--fb5540f007d4b35ad3f766e446ce23141cd18265/IMG-20210508-WA0021.jpg" class="rounded-circle" alt="..."  style={{ width:'200px',height:'200px',boxShadow:'5px 5px 5px rgb(219, 112, 192)'}}/>
            <h1  data-aos="fade-up"
     data-aos-duration="3000" style={{fontFamily:'Brush Script MT'}}>Himachali Dham</h1>
        <p  data-aos="fade-up"
     data-aos-duration="3000" style={{fontFamily:'times new roman'}}> When in Himachal Pradesh, do as the Himachalis do 
     and feast on the dham or live to regret it. The dham is in essence a saatvik vegetarian thali, that borrows from the
      history and traditions of the region. Its offerings are varied across regions and it forms an integral part of weddings
       
         </p>
         <br></br>
<button  data-aos="fade-up"
     data-aos-duration="1000" type="button" class="btn btn-primary" style={{fontFamily:'times new roman',fontSize:'20px'}}>More Detail</button>
   
         </div>
<div class="col-lg-4 text-center p-5 ">
    <img  data-aos="fade-up"
     data-aos-duration="3000" src="https://indianlocalfoods.com/wp-content/uploads/2022/12/Famous-Food-of-Himachal-Pradesh-in-Hindi.jpg" class="rounded-circle" alt="..."  style={{ width:'200px',height:'200px',boxShadow:'5px 5px 5px rgb(219, 112, 192)'}}/>
            <h1  data-aos="fade-up"
     data-aos-duration="3000" style={{fontFamily:'Brush Script MT'}}>Chole BHature</h1>
        <p  data-aos="fade-up"
     data-aos-duration="3000" style={{fontFamily:'times new roman'}}>Chole bhature is a food dish popular in the northern areas of the Indian subcontinent. It is a combination of chana masala (spicy white chickpeas) and bhatura/puri
     , a deep-fried bread made from maida. Chole bhature is often eaten as a breakfast dish, sometimes accompanied with lassi..</p>
               <br></br>
<button  data-aos="fade-up"
     data-aos-duration="1000" type="button" class="btn btn-primary" style={{fontFamily:'times new roman',fontSize:'20px'}}>More Detail</button>
   
      </div>
</div>
<br></br>

<hr></hr>
<br></br>
<br></br>
<div class="row">
<h1  data-aos="fade-up" style={{fontFamily:" Brush Script MT",textAlign:'center',fontSize:'50px'}}>
        Some Most Famous Dish in Himachal Pradesh</h1>
          <div class="col-lg-3 text-center p-3">
            <img data-aos="fade-up" data-aos-duration="3000" src="https://foodomania.com/wp-content/uploads/2023/01/Himachali-Siddu-with-Urad-Stuffing-Recipe-by-Foodomania-2-scaled.jpg" 
          style={{width:'350px',height:'500px',borderRadius:'2%',boxShadow:'5px 5px 10px'}} />
           <br></br>{/*<p style={{fontFamily:'Brush Script MT',fontSize:'50px',color:'Crimson',fontWeight:'bold'}}>Beach Party</p>*/}</div> 
          <div class="col-lg-3 text-center p-3"> <img data-aos="fade-down" data-aos-duration="3000" src="https://i.pinimg.com/736x/da/8e/65/da8e65084bdeac3704ca6406b276c55a.jpg" 
           style={{width:'350px',height:'500px',borderRadius:'2%',boxShadow:'5px 5px 10px',marginTop:'40%'}}/>
          {/* <p style={{fontFamily:'Brush Script MT',fontSize:'50px',color:'OrangeRed',fontWeight:'bold'}}>Wedding Deco.</p>*/}</div>
          <div class="col-lg-3 text-center p-3"> <img data-aos="fade-up" data-aos-duration="3000" src="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Babru_Recipe_Himachali_Black_Gram_Stuffed_Bread.jpg" 
           style={{width:'350px',height:'500px',borderRadius:'2%',boxShadow:'5px 5px 10px'}}/>
          {/* <p style={{fontFamily:'Brush Script MT',fontSize:'50px',color:'DarkSlateGrey',fontWeight:'bold'}}>Diwali Celebration</p>*/}</div>
          <div class="col-lg-3 text-center p-3"><img  data-aos="fade-down" data-aos-duration="3000" src="https://www.fabhotels.com/blog/wp-content/uploads/2022/07/600X400-Food-Banner-min.jpg" 
           style={{width:'340px',height:'500px',borderRadius:'2%',boxShadow:'5px 5px 10px',marginTop:'40%'}}/>
          {/* <p style={{fontFamily:'Brush Script MT',fontSize:'50px',color:'DodgerBlue',fontWeight:'bold'}} >Club Party</p>*/}</div>
      </div>
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
};

export default About;