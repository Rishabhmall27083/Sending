import React from 'react';
import FooterContanct from '../../FooterContanct';
import Navbarcontanct from '../../Navbarcontanct';

function  CriteriaFour() {
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

        .content p {
          padding: 5px 10px;
        }

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

        
        .dashboard {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
        }

        table, th, td {
          border: 4px solid #ccc;
          border-collapse: collapse;
        }
        
        th, td {
          padding: 0.7rem;
          text-align: left;
        }

        .resizer {
          position: absolute;
          top: 0;
          right: 0;
          width: 5px;
          cursor: col-resize;
          user-select: none;
        }
        
        .resizer:hover,
        .resizing {
          border-right: 2px solid blue;
        }
        
        .dragging {
          background-color: #f0f0f0;
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
      <h2 style={{marginTop:"30px",fontWeight:'bolder'}}> | Criteria Four</h2><br/><br/>
      <h5 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>Criteria 4</b></h5>
      <div className="content">
        <p>
          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b> 4.1.1 : </b><b>Physical Facilites </b>  <br/><br/>
        :-  Facilities for Teaching - Learning
                        <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>
          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>4.1.2 :</b>  Facilities for Cultural Activities, Yoga, Games and Sports
                    <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>
          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>4.1.3 :</b> Percentage of classrooms and seminar halls with ICT - enabled <br/>

facilities  such as  LCD, smart board, Wi-Fi/LAN, audio video

recording facilities. <br/>(Data only for the latest completed academic year)                                     
                  <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>


          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b> 4.3.2:</b> IT Services Policy 
        <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
         </h5>   

          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>4.3.3 :</b>Summary of Computer Distribution , Declaration Certificate, Computer Invoices
        <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>   
          
          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>4.3.4 :</b>Available bandwidth of internet connection in the Institution
                  <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>  

          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>4.3.5 :</b> Institution has the following Facilities for e-content development
                  <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>  

          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>4.4.2 :</b> Maintenance policy       
                  <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>  
        </p>

       
      
        
      </div>
     
      <FooterContanct/>
    </>
  );
}

export default  CriteriaFour
;


