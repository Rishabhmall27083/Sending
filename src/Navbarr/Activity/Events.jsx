import React from 'react';
import FooterContanct from '../../FooterContanct';
import Navbarcontanct from '../../Navbarcontanct';
import Evant1sss from "../../images/Evantsss1.jpg"
import Evant2sss from "../../images/Evant2sss.jpg"
import Evant3sss from "../../images/Evant3sss.jpg"


function Events() {
  return (
    <>
      <style>{`
        aside {
          width: 100%;
          float: left;
          height: auto;
          margin: 10px 0px;
          text-align: center;
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
            text-align: center;
          }

          nav li {
            display: block;
            font-size: 4vw;
            margin-bottom: 5px;
          }

          .content {
            margin: 10px 0px;
          }
        }

        .dashboard {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
        }

        table {
          width: 100%;
          border: 4px solid #ccc;
          border-collapse: collapse;
        }

        th, td {
          padding: 0.7rem;
          text-align: left;
          border: 3px solid #C0C0C0;
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
      <h2 style={{ marginTop: "30px", fontWeight: 'bolder' }}> | Events</h2><br />
      {/* <h3 style={{ textAlign: "center", textDecoration: "underline" }}><b> Webinar Detail </b></h3> <br /> */}
      <h6 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>INDUSTRIAL TRAINING/VISIT</b></h6>
      <div className="content">
        <div className="dashboard">
          <div className="schedule-table" style={{ marginTop: "20px" }}>
            <div className="container mt-3 table-responsive"> {/* Added table-responsive class here */}
              <table className="resizable-table table table-hover">
                {/* <thead>
                  <tr>
                    <th style={{ backgroundColor: "#5F9EA0" }}>Date</th>
                    <th style={{ backgroundColor: "#5F9EA0" }}>DEPARTMENT</th>
                    <th style={{ backgroundColor: "#5F9EA0" }}>	Topic</th>
                  </tr>
                </thead> */}
                <tbody>
                  <tr>
                    <td><img  src={Evant1sss}/></td>
                    <td > <h6 style={{marginTop:"50px"}}>Dr. Vivek Bindra PRESENTS<br/><br/>
              <h6>CAMPUS-PRENEUR Masterclass</h6>
              <h6>For Students of SRI SATYA SAI UNIVERSITY OF TECHNOLOGY AND MEDICAL SCIENCE</h6>
               For Students 
                7th May 1PM-3PM </h6></td>
            
                  </tr>
                  <tr>
                  <td ><img  src={Evant2sss}/></td>
                    <td><h6 style={{marginTop:"50px"}}>	National Environment Youth parliament  2022 Nurturing Environment (12 Jan 2022) <br/>
                  More Info |Report</h6></td>
                  </tr>
                  <tr>
                  <td><img  src={Evant3sss }/></td>
                  <td > <h6 style={{marginTop:"-35px"}}><br/><br/>
              <h6>AMRUIT MAHOTSAV ON THE OCCASION OF 75 TH INDEPENDENCE DAY</h6> <br/>
              <b style={{color:"blue"}}>13 August 2021(12:00 to 12:30 PM)</b> </h6>
               <b>COMPETITION ON POSTER PRESENTATION ESSAY WRITING</b></td>
                
             </tr>
                 
                </tbody>
              </table>
            </div>
          </div>
        </div> <br /><br />
      </div>

      <FooterContanct />
    </>
  );
}

export default Events;
