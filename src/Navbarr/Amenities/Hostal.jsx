import React from 'react'
import Navbarcontanct from '../../Navbarcontanct'
import FooterContanct from '../../FooterContanct'
import boyHostal from "../../images/boyes Hostal.jpg"

function Hostal() {
  return (
    <>
    <Navbarcontanct />
    <style>
        {`
        /* General styles */
        .article-title h1 {
          color: crimson;
          font-weight: bolder;
          text-align: center;
        }
        
        .article-description h3 {
          color: blueviolet;
          text-align: center;
        }
        
        .article-img-container {
          width: 50%;
          margin: 0 auto;
          
        }
        
        .article-img-container img {
          width: 100%;
          height: auto;
          border: 2px solid;
        }
        
        .article-content {
          width: 80%;
          margin: 0 auto;
        //   border: 1px solid;
          padding: 0.5rem;
        //   background-color: lightsalmon;
        }
        
        /* Responsive styles for screens below 768px */
        @media (max-width: 768px) {
          .article-title h1 {
            color: darkmagenta;
          }
        
          .article-description h3 {
            color: darkgoldenrod;
          }
        
        //   .article-content {
        //     background-color: lightcoral;
        //   }
        }
        h2 {
            display: block;
            background: #b2dbb3;
          clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
          
          }
          h2, table {
            padding: 10px;
            text-align: left;
          }
          h2 {
            padding-left: 8%;
            padding-right: 5%;
          }
        
        `}
    </style>
    <div className="container-article">

    <h2 style={{marginTop:"30px",fontWeight:'bolder'}}> | Hostel</h2><br/>
     <h4 style={{color:"#800080",textAlign:"center", marginTop:"50px",textDecoration:"underline"}}> <b>Hostel</b></h4> <br/>
     <div className="article-content">
        <p style={{color:"black"}}>
        For resident students a boy’s hostel and a girl’s hostel is available in the campus. Each Hostel is self-contained with amenities such as a reading room, an indoor games room, a lounge and a dining hall with mess, a computer room and TV in common room. The Board for Hostel Management coordinates the various hostel activities. At present, Boys Hostel has capacity of accommodating 252 students and Girls Hostel has capacity of 100 girls. The mess of both Hostels is run on cooperative basis. Provision of separate rooms with air-conditioners is available. <br/> <br/>

       For the working of hostels, representatives from the hostels take decisions on all policies of common interest. The administrative head of each hostel is Warden, who is a faculty member.
        </p>
      </div><br/>
      <div className="article-img-container">
        <img 
        style={{borderRadius:"30px"}}
        src={boyHostal}
          alt="Article Image"
        />
      </div><br/>
    
    </div>
    <FooterContanct />
  </>
  
  )
}

export default Hostal



