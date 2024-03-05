
import React from 'react';
import Navbarcontanct from '../../Navbarcontanct';
import FooterContanct from '../../FooterContanct';
import Traningplacement from "../../images/Traningplacement.jpg"
import traning3 from "../../images/traning3.png"
import traning4 from "../../images/traning4.png"

function TrainingPartner() {
  return (
    <>
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            box-sizing: border-box;
          }

          .tabulka-container {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            overflow-x: auto;
          }

          table {
            width: 100%;
            border-collapse: collapse;
          }

          caption {
            font-size: 1.5em;
            margin-bottom: 10px;
            font-weight: bold;
            text-align: center;
          }

          th,
          td {
            border: 1px solid black;
            padding: 8px;
            text-align: center;
          }

          th {
            background-color: #f2f2f2;
          }

          @media (max-width: 320px) {
            body {
              font-size: 14px;
            }
          }
          h2 {
            display: block;
            background: #b2dbb3;
            clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
          }
          h2,
          table {
            padding: 10px;
            text-align: left;
          }
          h2 {
            padding-left: 8%;
            padding-right: 5%;
          }
        `}
      </style>
      <Navbarcontanct /> <br /> 
      <h2 style={{ marginTop: "30px", fontWeight: 'bolder' }}> | Training Partner </h2> <br />
      {/* <h3 style={{textAlign:"center", textDecoration:"underline"}}><b>/ Faculty of Ayurveda/</b></h3> <br/> */}
      <h5 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>Training & Placement Cell</b></h5><br />


      <img style={{width:"30%",marginLeft:"35%",border: '4px solid black',borderRadius:"20px"}} src= {Traningplacement}/>  <br/> <br/>
      {/* <box-icon name='right-arrow-circle' type='solid' color='#055c6b' ></box-icon> */}
     <h6 style={{marginLeft:"33%", color:"#008B8B"}}><b> LIFE SCIENCES SECTOR SKILL DEVELOPMENT COUNCIL</b> </h6><br/>
     <h6 style={{marginLeft:"33%", color:"#008B8B"}}><b> Logistics Sector Skill Council</b> </h6>
    <br/>

    <h6 style={{marginLeft:"20%",color:"#2F4F4F"}}><b>[ Established by the Ministry of Skill Development and Entrepreneurship (MSDE) through  National Skill <br/> Development Corporation of India (NSDC)]
</b></h6> <br/>

<h6 style={{marginLeft:"33%", color:"#008B8B"}}><b> Redwings Aerotechnique Pvt Ltd</b> </h6> <br/>
<img  src={traning3}  style={{width:"20%",marginLeft:"40%",border: '4px solid black',borderRadius:"20px"}}  /> <br/>
<h6 style={{marginLeft:"33%", color:"#008B8B"}}><b>Approved by : DGCA (Govt. of India) </b> </h6> <br/>
<h6 style={{marginLeft:"33%", color:"#008B8B"}}><b>Pearson</b> </h6><br/>
<img style={{width:"20%",marginLeft:"40%",border: '4px solid black',borderRadius:"20px"}} src= { traning4 }/>  <br/> <br/>
      <FooterContanct /> 
    </>
  )
}

export default TrainingPartner;

