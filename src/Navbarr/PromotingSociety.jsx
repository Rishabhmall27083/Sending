import React from 'react';
import FooterContanct from '../FooterContanct';
import Navbarcontanct from '../Navbarcontanct';

function PromotingSociety() {
  return (
    <>
      <style>{`
        

        aside {
          width: 25%;
          float: left;
          height: 300px;
          margin: 10px 0px 10px 0px;
        }

        nav ul {
          list-style-type: none;
          font-size: 2vw;
        }

        // .content {
        //   margin: 10px 0px 10px 0px;
        //   width: 75%;
        //   float: left;
        // }

        .content p {
          padding: 5px 15px;
          
        }

        // footer {
        //   height: 75px;
        //   width: 100%;
        //   clear: both;
        //   background: orange;
        //   text-align: center;
        //   padding-top: 5px;
        // }

        @media screen and (max-width: 768px) {
          aside {
            width: 100%;
            height: auto;
            margin: 10px 0px 0px 0px;
            text-align: center;
          }

          nav li {
            display: block;
            font-size: 4vw;
            margin-bottom: 5px;
          }

          .content {
            margin: 10px 0px 10px 0px;
            width: 100%;
          }
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
      `}</style>
      <Navbarcontanct />  
      
    
      <h2 style={{marginTop:"30px",fontWeight:'bolder'}}> | Promoting Society</h2><br/><br/>
  
      <div className="content">
        <p style={{ color: "black" }}>
          {/* Your content goes here */}
          <p  style={{color:"black" ,marginTop:"40px"}}>
         {" "}
       
         Ayushmati  Education and Social Society, Bhopal was established in 1999 with objective to imparts Medical, Technical & Higher Education in state of Madhya Pradesh. Society was established by visionaries of repute from versatile background including those from Medical, Finance, Professional & social service. The decision of starting Technical Campus in interior was a debatable topic in those days. After gaining experience more than a decade of operating more than hundred Technical and Medical Institutes in the state of Madhya Pradesh, the Society established Private University at Sri Satya Campus at Sehore in year 2013. <br/><br/>
 
 With blessings of Sri Satya Sai, Government of Madhya Pradesh on recommendations of Madhya Pradesh Niji Vishwavidyalaya Niyamak Aayog accorded permission to Sri Satya Sai University of Technology & Medical Sciences at Sehore from Academic Session 2013-14.
     </p>

        </p>
      </div>
      <FooterContanct/>
    </>
  );
}

export default PromotingSociety;
