import React from 'react'
import Navbarcontanct from '../../Navbarcontanct'
import FooterContanct from '../../FooterContanct'
import transpotation from "../../images/Transpotation.jpg"

function Transportation() {
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

    <h2 style={{marginTop:"30px",fontWeight:'bolder'}}> | Transportation</h2><br/>
     <h4 style={{color:"#800080",textAlign:"center", marginTop:"50px",textDecoration:"underline"}}> <b>TRANSPORTATION</b></h4> <br/><br/>
     <div className="article-content">
        <p style={{color:"black"}}>
        SSSUTMS has fleet of twenty five luxurious buses for students and staff. The bus facilities are optional. The college bus facilities are available from every corner of Bhopal as well as from Sehore and nearby interiors of Sehore, including Ashta, Icchawar.
        </p>
      </div><br/>
      <div className="article-img-container">
        <img 
        style={{borderRadius:"30px"}}
      src={transpotation}
          alt="Article Image"
        />
      </div><br/>
      
    </div>
    <FooterContanct />
  </>
  
  )
}

export default Transportation