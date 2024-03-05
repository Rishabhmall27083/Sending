 



import React from 'react';
import FooterContanct from '../FooterContanct';
import Navbarcontanct from '../Navbarcontanct';

function Institutepage() {
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
          padding: 5px 10px;
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
      
     
      <h2 style={{marginTop:"30px",fontWeight:'bolder'}}> | Institutes</h2>
  
      <div className="content">
        <p style={{ color: "black" }}>
          {/* Your content goes here */}
          <p  style={{color:"black" ,marginTop:"50px"}}>
         {" "}
         As Per ordinance of  Sri Satya Sai University of Technology & Medical Sciences Sehore  following institute as constituent  unit of University. <br/> <br/>

        The following are University Institutes -  <br/> 
        School of Engineering <br/>
        School of Computer Application<br/>
        School of Management Studies <br/>
        Faculty of Pharmacy <br/>
        School of Hotel Management<br/>
       School of Paramedical Studies<br/>
       Polytechnic (Engineering) <br/>
       School of Law <br/>
      <b style={{textDecorationLine:"underline"}}>School of Homoeopathy</b>  <br/>
       Faculty of Education <br/>                        
       School of Design <br/>
      <b style={{textDecorationLine:"underline"}}>School of Ayurveda & Siddha Studies </b> <br/>
        As per approval accorded by Regulatory authorities,  some new Course/ Institution are scheduled from coming Academic years, namely  MBBS.
      
     </p>

        </p>
      </div>
      <FooterContanct/>
    </>
  );
}

export default Institutepage;
