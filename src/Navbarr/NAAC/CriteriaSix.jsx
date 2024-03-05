import React from 'react';
import FooterContanct from '../../FooterContanct';
import Navbarcontanct from '../../Navbarcontanct';

function CriteriaSix() {
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
      <h2 style={{marginTop:"30px",fontWeight:'bolder'}}> | Criteria Six</h2><br/><br/>
      <h5 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>Criteria 6</b></h5>
      <div className="content">
        <p>
          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b> 6.1.1 : </b>
        The institution has a clearly stated vision and mission  which are reflected in its <br/>
            academic and administrative governance 
       <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>
          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>6.1.2 :</b> Effective Leadership is reflected in various Institutional Practices such as <br/>
             Decentralization and Participate Management
                    <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>
          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>6.2.1 :</b>The institutional Strategic plan is effectively deployed. 
        <b style={{marginLeft:"5%",color:"blue"}}>Click here</b>
          </h5>


          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>6.2.2 :</b>  The functioning of the institutional bodies is effective and <br/>efficient as visible 
         from policies, administrative setup, appointment, service rules <br/> and procedures,
       <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
     </h5>   

          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>6.2.3 :</b> Institution Implements e-governance covering following areas of operation
        <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>   
          
          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>6.3.1 :</b> The institution has a performance appraisal system, promotional avenues and <br/>
          effective welfare measures for teaching and non-teaching staff
         <b style={{marginLeft:"2%",color:"blue"}}>Click here</b> <br/><br/>
         </h5>  

          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>6.3.2 :</b> Average percentage of teachers provided with financial support to <br/>attend conferences / 
           workshops and towards membership fee of professional<br/> bodies  during the last five years.
                  <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>  

          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>6.4.1 :</b>  Institutional strategies for mobilisation of funds and the optimal utilisation <br/> of resources
      <b style={{marginLeft:"2%",color:"blue"}}>Click here</b> 
    </h5> 

           <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>6.4.2 :</b> Funds / Grants received from government bodies during the last five years for <br/>
             development and maintenance of infrastructure
                  <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>  

          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>6.5.1 :</b> Internal Quality Assurance Cell (IQAC) has contributed significantly for institutionalizing <br/>
the quality assurance strategies and processes by constantly reviewing the teaching learning <br/>
process, structures & methodologies of operations and learning outcomes at periodic <br/> intervals
                  <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>  

          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>6.5.2 :</b>  Institution  has adopted the following for  Quality assurance
                  <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>  
        </p>
         </div>
     
      <FooterContanct/>
    </>
  );
}

export default CriteriaSix

