import React  , { useEffect }from "react";
import './Home.css'
import AOS from "aos";
import "aos/dist/aos.css"
import Aos from "aos";
const Home=()=>{
    useEffect(()=>{
        Aos.init();
        AOS.refresh();
      },[]);
    return(
        <><div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img  src="https://images.unsplash.com/photo-1581791534721-e599df4417f7?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{height:'800px'}}/>
            <div className="carousel-caption d-none d-md-block">
                <h1  data-aos="zoom-in" style={{fontFamily:'times new roman', fontSize:"70px", marginTop:"-35%",fontWeight:'bolder'}}>Wlcome to Himachal Pradesh</h1>
              <h5  data-aos="zoom-in"  style={{fontFamily:'times new roman', fontSize:"60px",fontWeight:'bold' }}>One of the Best Place</h5>
              <p data-aos="zoom-in"  style={{fontFamily:'times new roman',fontSize:'30px'}}>Himachal Pradesh came into being as a Union Territory in April 1948 as a result of integration of 30 princely States spread over 27,000 sq.km.</p>
              <button  style={{borderColor:"transparent",borderRadius:'30px',backgroundColor:'white',color:'black',fontFamily:'times new roman',fontSize:'20px',boxShadow:'3px 3px 10px  5px white'}}>More Detail</button>
        </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1629646621053-458c7ab125a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{height:'800px'}}/>
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1628699543232-dc241b48a4b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100"style={{height:'800px'}} alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                 </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br></br>
      <br></br>
      <hr></hr>&emsp;<hr></hr>
      <br></br>
      <br></br><div className="d">
      <h1   data-aos="fade-up"
     data-aos-duration="3000"  style={{fontFamily:" Brush Script MT",textAlign:'center',fontSize:'70px'}} >Some Detail of Best Tourism Plcaes</h1><br></br><br></br></div>
     <div className="row">
     <div class="col-lg-6 text-center p-3">
      <img   data-aos="fade-up"
     data-aos-duration="3000" src="https://plus.unsplash.com/premium_photo-1661963028566-6e15b98b5ab1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      style={{borderRadius:'5px', width:"500px",height:"500px", boxShadow:"5px 5px 10px 5x orange"}}></img></div>
     <div class="col-lg-6 text-center p-3" ><p   data-aos="fade-up"
     data-aos-duration="3000" style={{fontFamily:"times new roman",marginTop:'25%' }}>
Himachal Pradesh came into being as a Union Territory in
 April 1948 as a result of integration of 30 princely States
  spread over 27,000 sq.km. In 1954, when another C"class state 
  of Bilaspur merged in Himachal Pradesh, its area increased to 28,241
   sq.km. The position remained unchanged till 1966
Hub of beautiful lakes. Himachal boasts several beautiful
 lakes, such as the Dal Lake in Dharamshala, Suraj Tal near Keylong,
  and Prashar Lake in Mandi district. These lakes are not only scenic but
   also hold cultural and religious significance..</p><br>
   </br>
   <button  data-aos="fade-up"
     data-aos-duration="3000" type="button" class="btn btn-primary" style={{fontFamily:'times new roman',fontSize:'20px'}}>More Detail</button>
     
   </div></div>

    <br></br>
      <br></br>
      <br></br>
     
     <hr></hr>
      <br></br>
    
      <br></br>
      <div className="row">
        <div class="col-lg-6 text-center p-3">
      <p  data-aos="fade-up"
     data-aos-duration="3000" style={{fontFamily:"times new roman",marginTop:'25%'}}>Tourism in Himachal Pradesh is a major contributor to the
      state's economy and growth. The Himalayas attracts tourists from all over the world.
       Hill stations like Shimla, Manali, Dharamshala, Dalhousie, Chamba, Khajjiar, Kullu and Kasauli 
       are popular destinations for both domestic and foreign tourists.
       This is popularly renowned for its Himalayan landscapes and popular hill-stations. Many outdoor
        activities such as rock climbing, mountain biking, paragliding, ice-skating, trekking, rafting, 
        and heli-skiing are popular tourist attractions in Himachal Pradesh.</p><br></br>
   <button  data-aos="fade-up"
     data-aos-duration="3000" type="button" class="btn btn-primary" style={{fontFamily:'times new roman',fontSize:'20px'}}>More Detail</button>
    </div>
   <div class="col-lg-6 text-center p-3">
<img  data-aos="fade-up"
     data-aos-duration="3000" src="https://images.unsplash.com/photo-1621494926238-2ff657276ca3?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
style={{width:'500px',height:'500px',boxShadow:'5px 5px 10px  5px SteelBlue',borderRadius:'5px'}}></img></div>
</div>
     <br></br><br></br>&emsp;<hr></hr>&emsp;<hr></hr><br></br>
     {/* button */}
     <center>
  <button data-aos="zoom-out" class="btn btn-primary"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" style={{fontFamily:'times new roman',fontSize:'20px'}}>
    Some Tourism Place
  </button>
  
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel" style={{fontFamily:" Brush Script MT",fontSize:"50px"}}>Some Tourism Places</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div>
       <p style={{fontFamily:'times new roman'}}>  The most remarkable attractions of the state are its fabulous hill stations such as Shimla, Manali, Kullu, Dalhousie and Dharamsala.</p>
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
          <li><a class="dropdown-item" href="#" style={{fontFamily:'times new roman'}}>Hamirpur</a></li>
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
<h1 data-aos="zoom-out" style={{fontFamily:'Brush Script MT', fontSize:'70px',textAlign:'center'}}>Here are some Places</h1><br></br>
       <br></br>
       <div>
       <div class="row">
            <div class="col-lg-3 text-center p-3"><img data-aos="fade-up" data-aos-duration="3000" src="https://plus.unsplash.com/premium_photo-1697729693552-40448c8042fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGhpbWFjaGFsJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D" 
            style={{width:'350px',height:'700px',borderRadius:'2%',boxShadow:'5px 5px 10px'}} />
             <br></br></div> 
            <div class="col-lg-3 text-center p-3"> <img data-aos="fade-down" data-aos-duration="3000"  src="https://images.unsplash.com/photo-1622705828024-0e8faf9ff75c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGhpbWFjaGFsJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D" 
             style={{width:'350px',height:'600px',borderRadius:'2%',boxShadow:'5px 5px 10px'}}/>
           </div>
            <div class="col-lg-3 text-center p-3"> <img data-aos="fade-up" data-aos-duration="3000" src="https://images.unsplash.com/photo-1606220975728-f94e0d9ed642?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGhpbWFjaGFsJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D" 
             style={{width:'350px',height:'500px',borderRadius:'2%',boxShadow:'5px 5px 10px'}}/>
            </div>
            <div class="col-lg-3 text-center p-3"><img  data-aos="fade-down" data-aos-duration="3000" src="https://plus.unsplash.com/premium_photo-1697730487072-c7c29e113007?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxoaW1hY2hhbCUyMHByYWRlc2h8ZW58MHx8MHx8fDA%3D" 
             style={{width:'340px',height:'400px',borderRadius:'2%',boxShadow:'5px 5px 10px'}}/>
     </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <hr></hr>
      <div class="row">
<div class="col-4">
  <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
    <nav class="nav nav-pills flex-column">
      <a class="nav-link" href="#item-1" style={{fontFamily:'Brush Script MT',fontSize:'30px'}}>Manali</a>
      <nav class="nav nav-pills flex-column">
        <a class="nav-link ms-3 my-1" href="#item-1-1" style={{fontFamily:'Brush Script MT',fontSize:'30px'}}>Kasol</a>
        <a class="nav-link ms-3 my-1" href="#item-1-2" style={{fontFamily:'Brush Script MT',fontSize:'30px'}}>Shimla </a>
      </nav>
      <a class="nav-link" href="#item-2" style={{fontFamily:'Brush Script MT',fontSize:'30px'}}>Mcleodganj</a>
      <a class="nav-link" href="#item-3" style={{fontFamily:'Brush Script MT',fontSize:'30px'}}>Spiti Valley</a>
      <nav class="nav nav-pills flex-column">
        <a class="nav-link ms-3 my-1" href="#item-3-1" style={{fontFamily:'Brush Script MT',fontSize:'30px'}}>Bir Billing</a>
        <a class="nav-link ms-3 my-1" href="#item-3-2"  style={{fontFamily:'Brush Script MT',fontSize:'30px'}}>Dharamsala</a>
      </nav>
    </nav>
  </nav>
</div>

<div class="col-8">
  <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
    <div id="item-1">
      <h4 style={{fontFamily:'times new roman'}}>Manali</h4>
      <p style={{fontFamily:'times new roman'}}>With spectacular valleys, breathtaking views, snowcapped mountains, 
      and lush forests of oak, deodar, and pine, Manali is a magical hill station at the northern end of Kullu valley
       in Himachal Pradesh. Gifted to the world by the mighty Himalayas, it is known to be one of the most popular destinations.
Manali is a year-long tourist destination, but the period from October to February is considered as the best time to visit and
 witness the winter snowfall and snow-covered mountains. Around March to June is the summertime which invites you to cherish the day and nightlife of Manali
 With spectacular valleys, breathtaking views, snowcapped mountains, 
      and lush forests of oak, deodar, and pine, Manali is a magical hill station at the northern end of Kullu valley
       in Himachal Pradesh. Gifted to the world by the mighty Himalayas, it is known to be one of the most popular destinations..</p>
 
    <div id="item-1-1">
      <h5 style={{fontFamily:'times new roman'}}>Kasol</h5>
      <p style={{fontFamily:'times new roman'}}>Kasol is a quaint little village in Himachal situated 
      along the banks of the river Parvati. Commonly known as the 'Amsterdam of India', Kasol is a tourist attraction 
      that is rapidly gaining fame as a popular hub for trekkers, backpackers, and nature lovers. The valley is situated 23 kms from Bh
      Kasol is a quaint little village in Himachal situated along the banks of the river Parvati. Commonly known as the 'Amsterdam of India', 
      Kasol is a tourist attraction that is rapidly gaining fame as a popular hub for trekkers, backpackers, and nature lovers. The valley is situated 23 kms from Bh...</p>
    </div>
    <div id="item-1-2">
      <h5 style={{fontFamily:'times new roman'}}>Shimla</h5>
      <p style={{fontFamily:'times new roman'}}>“Shimla is the capital of Himachal Pradesh and a popular hill-station among Indian families and honeymooners.
       Situated at the height of 2200m, it was the summer capital of British India. The hill station still retains its old-world charm with beautiful colonial architecture, pedestrian
       “Shimla is the capital of Himachal Pradesh and a popular hill-station among Indian families and honeymooners.
       Situated at the height of 2200m, it was the summer capital of British India. The hill station still retains its old-world charm with beautiful colonial architecture, pedestrian...</p>
    </div>
    <div id="item-2">
      <h4 style={{fontFamily:'times new roman'}}>Mcleodganj</h4>
      <p style={{fontFamily:'times new roman'}}>Mcleodganj, Himachal Pradesh is one of the most popular 
      tourist destinations for it's tibetan culture, nature treks, greenery, ancient temples & monasteries,
       and british influence. Located in the Kangra district, it's on the outskirts of Dharamshala.Famous for being home to the Tibetan spir
       Mcleodganj, Himachal Pradesh is one of the most popular 
      tourist destinations for it's tibetan culture, nature treks, greenery, ancient temples & monasteries,
       and british influence. Located in the Kangra district, it's on the outskirts of Dharamshala.Famous for being home to the Tibetan spir
       </p>
    </div>
    <div id="item-3">
      <h4 style={{fontFamily:'times new roman'}}>Spiti Valley</h4>
      <p style={{fontFamily:'times new roman'}}>Long winding roads and valleys that present unforgettable glimpses 
      of cold desert and snow-crowned mountains welcome you when you set foot into Spiti Valley. Bordered 
      on all sides by the Himalayas, Spiti Valley, located in Himachal Pradesh, has an altitude of 12,500 feet above sea level, and gets ju
      Long winding roads and valleys that present unforgettable glimpses of cold desert and snow-crowned mountains welcome you when you set foot into 
      Spiti Valley. Bordered on all sides by the Himalayas, Spiti Valley, located in Himachal Pradesh, has an altitude of 12,500 feet above sea level,
       and gets ju.Long winding roads and valleys that present unforgettable glimpses of cold desert and snow-crowned mountains welcome you when you set 
       foot into Spiti Valley. Bordered on all sides by the Himalayas, Spiti Valley, located in Himachal Pradesh, has an altitude of 12,500 feet above sea level, and gets ju.</p>
    </div>
    <div id="item-3-1">
      <h5 style={{fontFamily:'times new roman'}}>Bir Billing</h5>
      <p style={{fontFamily:'times new roman'}}>Bir is a small town located in the Kangra district of Himachal Pradesh.
       Bir Billing is a popular destination located in Joginder Nagar valley known for paragliding and also as the town for meditation. 
       There is an influence of Tibetan culture due to Tibetan community settleme.
       Bir is a small town located in the Kangra district of Himachal Pradesh. Bir Billing is a popular destination located in Joginder
        Nagar valley known for paragliding and also as the town for meditation. There is an influence of Tibetan culture due to Tibetan community settleme.
        Bir is a small town located in the Kangra district of Himachal Pradesh. Bir Billing is a popular destination located in Joginder Nagar valley known for
         paragliding and also as the town for meditation. There is an influence of Tibetan culture due to Tibetan community settleme.</p>
    </div>
    <div id="item-3-2">
      <h5 style={{fontFamily:'times new roman'}}>Dharamsala</h5>
      <p style={{fontFamily:'times new roman'}}>Dharamshala is a beautiful hill town in the Dhauladhar range of Himalayas.
       It is the winter capital of Himachal Pradesh and is located in the upper slopes of the Kangra valley. Once known as a 
       british hill station during the colonial era, Dharamsala soon became occupied by Tibetan communities and is.Dharamshala is a
        beautiful hill town in the Dhauladhar range of Himalayas. It is the winter capital of Himachal Pradesh and is located in the upper
         slopes of the Kangra valley. Once known as a british hill station during the colonial era, Dharamsala soon became occupied by Tibetan communities and is.
         Dharamshala is a beautiful hill town in the Dhauladhar range of Himalayas. It is the winter capital of Himachal Pradesh and is located in the upper slopes of the
          Kangra valley. Once known as a british hill station during the colonial era, Dharamsala soon became occupied by Tibetan communities and is..</p>
     
    </div>
  </div>
</div>
</div>
<br></br>
<br></br>
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
      <hr></hr>&emsp;
      <hr></hr>
      <br></br>
      <h1  className="c"  data-aos="fade-up"
     data-aos-duration="3000"  style={{fontFamily:" Brush Script MT",textAlign:'center',fontSize:'70px'}} >Below Show The Beautiful Places</h1>
      <div class="row">
          <div class="col-lg-4 text-center p-5 "><img  data-aos="fade-up"
     data-aos-duration="3000" src="https://images.unsplash.com/photo-1609948543911-7f01ff385be5?auto=format&fit=crop&q=80&w=
            1885&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="rounded-circle" alt="..."  style={{ width:'200px',height:'200px',boxShadow:'5px 5px 5px rgb(219, 112, 192)'}}/>
            <h1  data-aos="fade-up"
     data-aos-duration="3000" style={{fontFamily:'Brush Script MT'}}>Shimla</h1>
        <p  data-aos="fade-up"
     data-aos-duration="3000" style={{fontFamily:'times new roman'}}>Summer Hills. There is a lot do and see in the picturesque town of Shimla.Indian Institute of Advanced Studies. The Indian Institute of Advanced Studies should be on your list of Places to See in Shimla.
,Annandale,
Jakhoo hill,
The Scandal Point, Ridge,
Naldhera and Shaily Peak,
Chadwick falls,
Mall Road.</p><br></br>
<button  data-aos="fade-up"
     data-aos-duration="1000" type="button" class="btn btn-primary" style={{fontFamily:'times new roman',fontSize:'20px'}}>More Detail</button>
     </div>

<div class="col-lg-4 text-center p-5 ">
    <img data-aos="fade-up"
     data-aos-duration="3000"src="https://images.unsplash.com/photo-1583487960824-9f0e6bb411e7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbmFsaSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" class="rounded-circle" alt="..."  style={{ width:'200px',height:'200px',boxShadow:'5px 5px 5px rgb(219, 112, 192)'}}/>
            <h1  data-aos="fade-up"
     data-aos-duration="3000" style={{fontFamily:'Brush Script MT'}}>Manali</h1>
        <p  data-aos="fade-up"
     data-aos-duration="3000" style={{fontFamily:'times new roman'}}> Manali is considered a paradise for trekking enthusiasts as it is the starting point of many amazing trekking trails. The most famous trek is the
             Hampta Pass, which starts from Jobri Nala. Some of the other treks are Beas Kund, Bhrigu Lake, Dashaur Lake, Patalsu Peak, Lamadugh, Hampta Circuit, Deo Tibba base camp, etc.
         </p>
         <br></br>
<button  data-aos="fade-up"
     data-aos-duration="1000" type="button" class="btn btn-primary" style={{fontFamily:'times new roman',fontSize:'20px'}}>More Detail</button>
   
         </div>
<div class="col-lg-4 text-center p-5 ">
    <img  data-aos="fade-up"
     data-aos-duration="3000" src="https://images.unsplash.com/photo-1632488131948-2f65f97437b5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFyYXNoYXIlMjBsYWtlfGVufDB8fDB8fHww" class="rounded-circle" alt="..."  style={{ width:'200px',height:'200px',boxShadow:'5px 5px 5px rgb(219, 112, 192)'}}/>
            <h1  data-aos="fade-up"
     data-aos-duration="3000" style={{fontFamily:'Brush Script MT'}}>Prashar Lake</h1>
        <p  data-aos="fade-up"
     data-aos-duration="3000" style={{fontFamily:'times new roman'}}>The lake was considered sacred by the sage Parashara, who meditated here. The temple was built in the 14th century by Raja Ban Sen of Mandi in honor of
               the sage and thus, considering the Himachali architecture, the lake was named after him.The lake is located at an elevation of 2,730 m (8,960 ft) above sea level.</p>
               <br></br>
<button  data-aos="fade-up"
     data-aos-duration="1000" type="button" class="btn btn-primary" style={{fontFamily:'times new roman',fontSize:'20px'}}>More Detail</button>
   
               </div>
</div>
      <hr></hr>
      <br></br>
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

      <hr></hr>
       <br></br>
      <br></br>
      <h1  className="c"  data-aos="fade-up"
     data-aos-duration="3000"  style={{fontFamily:" Brush Script MT",textAlign:'center',fontSize:'70px'}} >Below Show The Beautiful Places</h1>
      
      <div class="row">
          <div class="col-lg-4 text-center p-5 "><img  data-aos="fade-up"
     data-aos-duration="3000" src="https://images.unsplash.com/photo-1588306181005-dff8e374c055?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGhpbWFjaGFsJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D" class="rounded-circle" alt="..."  style={{ width:'200px',height:'200px',boxShadow:'5px 5px 5px rgb(219, 112, 192)'}}/>
            <h1  data-aos="fade-up"
     data-aos-duration="3000" style={{fontFamily:'Brush Script MT'}}>Palampur</h1>
        <p  data-aos="fade-up"
     data-aos-duration="3000" style={{fontFamily:'times new roman'}}>Summer Hills. There is a lot do and see in the picturesque town of Shimla.Indian Institute of Advanced Studies. The Indian Institute of Advanced Studies should be on your list of Places to See in Shimla.
,Annandale,
Jakhoo hill,
The Scandal Point, Ridge,
Naldhera and Shaily Peak,
Chadwick falls,
Mall Road.</p><br></br>
<button  data-aos="fade-up"
     data-aos-duration="1000" type="button" class="btn btn-primary" style={{fontFamily:'times new roman',fontSize:'20px'}}>More Detail</button>
     </div>

<div class="col-lg-4 text-center p-5 ">
    <img data-aos="fade-up"
     data-aos-duration="3000"src="https://images.unsplash.com/photo-1608029372252-d02e8d1d45f1?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="rounded-circle" alt="..."  style={{ width:'200px',height:'200px',boxShadow:'5px 5px 5px rgb(219, 112, 192)'}}/>
            <h1  data-aos="fade-up"
     data-aos-duration="3000" style={{fontFamily:'Brush Script MT'}}>Spiti Valley</h1>
        <p  data-aos="fade-up"
     data-aos-duration="3000" style={{fontFamily:'times new roman'}}> Spiti is considered a paradise for trekking enthusiasts as it is the starting point of many amazing trekking trails. The most famous trek is the
             Hampta Pass, which starts from Jobri Nala. Some of the other treks are Beas Kund, Bhrigu Lake, Dashaur Lake, Patalsu Peak, Lamadugh, Hampta Circuit, Deo Tibba base camp, etc.
         </p>
         <br></br>
<button  data-aos="fade-up"
     data-aos-duration="1000" type="button" class="btn btn-primary" style={{fontFamily:'times new roman',fontSize:'20px'}}>More Detail</button>
   
         </div>
<div class="col-lg-4 text-center p-5 ">
    <img  data-aos="fade-up"
     data-aos-duration="3000" src="https://images.unsplash.com/photo-1611523658822-385aa008324c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="rounded-circle" alt="..."  style={{ width:'200px',height:'200px',boxShadow:'5px 5px 5px rgb(219, 112, 192)'}}/>
            <h1  data-aos="fade-up"
     data-aos-duration="3000" style={{fontFamily:'Brush Script MT'}}>Solan</h1>
        <p  data-aos="fade-up"
     data-aos-duration="3000" style={{fontFamily:'times new roman'}}>The Solan was considered sacred by the sage Parashara, who meditated here. The temple was built in the 14th century by Raja Ban Sen of Mandi in honor of
               the sage and thus, considering the Himachali architecture, the lake was named after him.The lake is located at an elevation of 2,730 m (8,960 ft) above sea level.</p>
               <br></br>
<button  data-aos="fade-up"
     data-aos-duration="1000" type="button" class="btn btn-primary" style={{fontFamily:'times new roman',fontSize:'20px'}}>More Detail</button>
   
               </div>
</div>
  <br></br>
  <hr></hr>
  
  <div className="row">
     <div class="col-lg-12 text-center p-3">
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1735960.4131484758!2d75.98234471987088!3d31.810075060366852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390453c367f901f7%3A0x7cfe04c5564b7725!2sHimachal%20Pradesh!5e0!3m2!1sen!2sin!4v1709046451522!5m2!1sen!2sin" style={{height:'600px', borderRadius:'20px',width:'100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div></div>
    <hr></hr>
    <br></br>
    <hr></hr>
    
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
      <li style={{color:"white"}}><u>Himachal</u></li>
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
        )
}
export default Home;