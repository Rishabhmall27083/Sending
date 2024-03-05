import React from 'react';
import FooterContanct from '../../FooterContanct';
import Navbarcontanct from '../../Navbarcontanct';

function CriteriaThree() {
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
      <h2 style={{marginTop:"30px",fontWeight:'bolder'}}> | Criteria Three</h2><br/><br/>
      <h5 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>Criteria 3</b></h5>
      <div className="content">
        <p>
          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b> 3.1.1 : </b> Policies and Regulations for Conducting Research
                        <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>
          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>3.1.2 :</b> The institution provides seed money to its teachers for research<br/> (average per year INR in Lakhs)
                    <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>
          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>3.1.3 :</b> The number of teachers who received national/international fellowship / financial support  <br/>from various agencies for advanced studies/research year-wise during the last five years
                  <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>


          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b> 3.1.5:</b> The institution has the following facilities to support research
                  <b style={{marginLeft:"2%",color:"blue"}}>Click here</b><br/><br/>
                <h5 style={{marginLeft:"80px"}}>Central Instrumentational lab <span style={{marginLeft:"9%",color:"#D2691E"}}><b>Click here</b></span></h5> <br/>
                <h5 style={{marginLeft:"80px"}}>MOOT COURT <span style={{marginLeft:"22%",color:"#D2691E"}}><b>Click here</b></span></h5> <br/>
                <h5 style={{marginLeft:"80px"}}>CNC LAB <span style={{marginLeft:"26%",color:"#D2691E"}}><b>Click here</b></span></h5> <br/>
                <h5 style={{marginLeft:"80px"}}>Computer Lab <span style={{marginLeft:"21%",color:"#D2691E"}}><b>Click here</b></span></h5> <br/>
                <h5 style={{marginLeft:"80px"}}>Research & Statistics Lab <span style={{marginLeft:"12%",color:"#D2691E"}}><b>Click here</b></span></h5> <br/>
                <h5 style={{marginLeft:"80px"}}> Fabrication Lab <span style={{marginLeft:"20%",color:"#D2691E"}}><b>Click here</b></span></h5> <br/>
                <h5 style={{marginLeft:"80px"}}>Workshop Lab <span style={{marginLeft:"21%",color:"#D2691E"}}><b>Click here</b></span></h5> <br/>
                <h5 style={{marginLeft:"80px"}}>Art Gallery <span style={{marginLeft:"24%",color:"#D2691E"}}><b>Click here</b></span></h5> <br/>
                <h5 style={{marginLeft:"80px"}}>Medicine Museam<span style={{marginLeft:"18%",color:"#D2691E"}}><b>Click here</b></span></h5> <br/>
          </h5>   

          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>3.2.1 :</b> Extramural Funding for Research
                  <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>   
          
          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>3.2.2 :</b> Grants for research projects sponsored by the government agencies
                  <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>  

        </p>

       
      
        
      </div>
     
      <FooterContanct/>
    </>
  );
}

export default CriteriaThree;


