


import React from 'react';
import FooterContanct from '../../FooterContanct';
import Navbarcontanct from '../../Navbarcontanct';

function CriteriaOne() {
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
          border: 6px solid #ccc;
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
      <h2 style={{ marginTop: "30px", fontWeight: 'bolder' }}> | Criteria One</h2><br />
      {/* <h4 style={{textAlign:"center", textDecoration:"underline"}}><b>/ Faculty of Management /</b></h4> <br/> */}

      <h6 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>Criteria 1</b></h6>
      <div className="dashboard">
          <div className="schedule-table" style={{ marginTop: "20px" }}>
            <div className="container mt-3 table-responsive"> {/* Added table-responsive class here */}
            <table className="resizable-table table table-hover">
                <thead >
                  <tr>
                    <th style={{backgroundColor:"#5F9EA0"}}>S.No.</th>
                    <th style={{backgroundColor:"#5F9EA0"}} >Facilities</th>
                    <th style={{backgroundColor:"#5F9EA0"}}>Session</th>
                    <th style={{backgroundColor:"#5F9EA0"}}>Report</th>
                  </tr>
                </thead>
                <tbody>
                      <tr>
                        <td>1.</td>
                        <td>Academic Council Meeting</td>
                        <td>2017-18 To 2021-22</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                      <td>2.</td>
                        <td>Board of Mangement Meetings</td>
                        <td>2017-18 To 2021-22	</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>3.</td>
                        <td>Board of Governance Meetings</td>
                        <td>2017-18 To 2021-22	</td>
                        <td>  Click here	</td>
                
                      </tr>


                
                    </tbody>
              </table>
            </div>
          </div>
        </div> <br/><br/>



      
      <h6 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b> Minutes of Relevant Board of Studies</b></h6>
      <div className="content">
        <div className="dashboard">
          <div className="schedule-table" style={{ marginTop: "20px" }}>
            <div className="container mt-3 table-responsive"> 
            <table className="resizable-table table table-hover">
                <thead >
                  <tr>
                    <th style={{backgroundColor:"#5F9EA0"}}> School Name</th>
                    <th style={{backgroundColor:"#5F9EA0"}} >Department</th>
                    <th style={{backgroundColor:"#5F9EA0"}}>Program</th>
                    <th style={{backgroundColor:"#5F9EA0"}}>Session  (2017-18 To 2021-22)</th>
                  </tr>
                </thead>
                <tbody>
                      <tr>
                        <td>School of Engineering</td>
                        <td>Aeronautical Engineering</td>
                        <td>Bachelor of Engineering	</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                      <td>School of Engineering</td>
                        <td>Chemical Engineering</td>
                        <td>Bachelor of Engineering	</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Civil Engineering</td>
                        <td>Bachelor of Engineering	</td>
                        <td>  Click here	</td>
                
                      </tr>


                      <tr>
                        <td>School of Engineering</td>
                        <td>Structural Design</td>
                        <td>Master of Technology	</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Aeronautical Engineering</td>
                        <td>Bachelor of Engineering	</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Computer Science and Engineering</td>
                        <td>Bachelor of Engineering	</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Computer Science and Engineering</td>
                        <td>Master of Technology	</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Software Engineering</td>
                        <td>Master of Technology</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Electrical and Electronics Engineering</td>
                        <td>Bachelor of Engineering	</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Electrical Engineering</td>
                        <td>Bachelor of Engineering</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Electrical Power System</td>
                        <td>Master of Technology</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Power Electronics</td>
                        <td>Master of Technology</td>
                        <td>  Click here	</td>
                
                      </tr>
                      <tr>
                        <td>School of Engineering</td>
                        <td>Electronic & Communication Engineering</td>
                        <td>Bachelor of Engineering	</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Digital Communication</td>
                        <td>Master of Technology	</td>
                        <td>  Click here	</td>
                
                      </tr>


                      <tr>
                        <td>School of Engineering</td>
                        <td>VLSI</td>
                        <td>Master of Technology</td>
                        <td>  Click here	</td>
                
                      </tr>


                      <tr>
                        <td>School of Engineering</td>
                        <td>Electronics & Instrumentation Engineering</td>
                        <td>Bachelor of Engineering</td>
                        <td> Click here	</td>
                
                      </tr>



                      <tr>
                        <td>School of Engineering</td>
                        <td>Information Technology</td>
                        <td>Bachelor of Engineering	</td>
                        <td>  Click here	</td>
                
                      </tr>


                      <tr>
                        <td>School of Engineering</td>
                        <td>Information Technology</td>
                        <td>Master of Technology	</td>
                        <td>  Click here	</td>
                
                      </tr>


                      <tr>
                        <td>School of Engineering</td>
                        <td>Mechanical Engineering</td>
                        <td>Bachelor of Engineering	</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Mechanical Engineering</td>
                        <td>Bachelor of Engineering	</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Industrial Designg</td>
                        <td>Master of Technology	</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Thermal Engineering</td>
                        <td>Master of Technology</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Thermal Engineering</td>
                        <td>Master of Technology</td>
                        <td>  Click here	</td>
                
                      </tr>
                      <tr>
                        <td>School of Engineering</td>
                        <td>Thermal Engineering</td>
                        <td>Master of Technology</td>
                        <td>  Click here	</td>
                         </tr>
                          <tr>
                        <td>School of Engineering</td>
                        <td>Mining Engineering </td>
                        <td>Bachelor of Engineering</td>
                        <td>  Click here	</td>
                   </tr>  

                   <tr>
                        <td>Faculty of Pharmacy</td>
                        <td>Pharmacy</td>
                        <td>Bachelor of Pharmacy</td>
                        <td>  Click here	</td>
                   </tr>  
                   <tr>
                        <td>Faculty of Pharmacy</td>
                        <td>Pharmacology</td>
                        <td>Master of Pharmacy</td>
                        <td>  Click here	</td>
                   </tr>  
                   <tr>
                        <td>Faculty of Pharmacy</td>
                        <td>Pharmaceutics</td>
                        <td>Master of Pharmacy</td>
                        <td>  Click here	</td>
                   </tr>  
                   <tr>
                        <td>School of Management Studie</td>
                        <td>Management</td>
                        <td>BBA</td>
                        <td>  Click here	</td>
                   </tr>  
                   <tr>
                        <td>School of Management Studie</td>
                        <td>Management</td>
                        <td>MBA</td>
                        <td>  Click here	</td>
                   </tr>  
                   <tr>
                        <td>School of law</td>
                        <td>Law</td>
                        <td>Law</td>
                        <td>  Click here	</td>
                   </tr>  
                   <tr>
                        <td>Faculty of Education</td>
                        <td>Science</td>
                        <td>Bachelor of Science</td>
                        <td>  Click here	</td>
                   </tr>  
                   <tr>
                        <td>Faculty of Education</td>
                        <td>Science</td>
                        <td>Master of Science</td>
                        <td>  Click here	</td>
                   </tr>  
                 
                   <tr>
                        <td>Faculty of Education</td>
                        <td>Commerce</td>
                        <td>Bachelor of Commerce</td>
                        <td>  Click here	</td>
                   </tr>  
                   <tr>
                        <td>Faculty of Education</td>
                        <td>Commerce</td>
                        <td>Master of Commerce</td>
                        <td>  Click here	</td>
                   </tr>  

                   <tr>
                        <td>Faculty of Education</td>
                        <td>Education</td>
                        <td>B.A. Ed</td>
                        <td>  Click here	</td>
                   </tr>  
                   <tr>
                        <td>Faculty of Education</td>
                        <td>Education</td>
                        <td>B.Ed</td>
                        <td>  Click here	</td>
                   </tr>  

                   <tr>
                        <td>Faculty of Education</td>
                        <td>Physical Education</td>
                        <td>Bachelor of Physical Education</td>
                        <td>  Click here	</td>
                   </tr>  




                   <tr>
                        <td>School Computer Application</td>
                        <td>Computer Application</td>
                        <td>P.G.D.C.A</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                        <td>School Computer Application</td>
                        <td>Computer Application</td>
                        <td>B.C.A</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                        <td>School Computer Application</td>
                        <td>Computer Application</td>
                        <td>M.C.A</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                        <td>School Of Hotel Mangemen</td>
                        <td>HOTEL MANAGEMENT AND CATERING</td>
                        <td>Bachelor of HOTEL MANAGEMENT AND CATERINGn</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                        <td>School of Homeopathy</td>
                        <td>Homeopathy</td>
                        <td>B.H.M.S</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                        <td>School of Agriculture</td>
                        <td>Agriculture</td>
                        <td>Bachelor of Agriculture</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                        <td>School of Ayurveda & Siddha Studies</td>
                        <td>Ayurveda</td>
                        <td>B.A.M.S</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                        <td>School of Nursing</td>
                        <td>Nursing</td>
                        <td>Bachelor of Nursing</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                        <td>School of Nursing</td>
                        <td>Nursingg</td>
                        <td>P.B.Sc (Nursing)</td>
                        <td>  Click here	</td>
                   </tr> 


                   <tr>
                        <td>School of Paramedical</td>
                        <td>Paramedical</td>
                        <td>B.P.T</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                        <td> Faculty of Education</td>
                        <td>Ph .D.</td>
                        <td>Arts</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                        <td> Faculty of Education</td>
                        <td>Ph .D.</td>
                        <td>Science</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                        <td> Faculty of Education</td>
                        <td>Ph .D.</td>
                        <td>Commerce</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                        <td>School of Management Studies</td>
                        <td>Ph .D.</td>
                        <td>Mangement</td>
                        <td>  Click here	</td>
                   </tr> 

                     <tr>
                        <td>Faculty of Education</td>
                        <td>Ph .D.</td>
                        <td>Physical Education</td>
                        <td>  Click here	</td>
                   </tr>  
                    <tr>
                        <td> Faculty of Education</td>
                        <td>Ph .D.</td>
                        <td>Education</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                        <td>School of Engineering</td>
                        <td>Ph .D.</td>
                        <td>Engineering</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                        <td>Faculty of Education</td>
                        <td>Ph .D.</td>
                        <td>Library Science</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                        <td>Faculty of Pharmacy</td>
                        <td>Ph .D.</td>
                        <td>Pharmacy</td>
                        <td>  Click here	</td>
                   </tr> 
                 
                    </tbody>
              </table>
            </div>
          </div>
        </div> <br/><br/>


    <h6 style={{textAlign:"center"}}><b>1.1.1 :-</b>    Curriculam developed and implemented have relevance to the local, national, regional and global <br/>

developmental needs which is reflected in Programme outcomes (POs), Programme Specific Outcomes<br/>

 (PSOs) and  Course Outcomes(COs) of the Programmes offered by the Institution.</h6>



       


        

      </div>  <br/><br/>



    

      <h6 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b> Minutes of Relevant Board of Studies</b></h6>
      <div className="content">
        <div className="dashboard">
          <div className="schedule-table" style={{ marginTop: "20px" }}>
            <div className="container mt-3 table-responsive"> 
            <table className="resizable-table table table-hover">
                <thead >
                  <tr>
                    <th style={{backgroundColor:"#5F9EA0"}}> School Name</th>
                    <th style={{backgroundColor:"#5F9EA0"}} >Department</th>
                    <th style={{backgroundColor:"#5F9EA0"}}>Program</th>
                    <th style={{backgroundColor:"#5F9EA0"}}>Session  (2017-18 To 2021-22)</th>
                  </tr>
                </thead>
                <tbody>
                      <tr>
                        <td>School of Engineering</td>
                        <td>Aeronautical Engineering</td>
                        <td>Bachelor of Engineering</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                      <td>School of Engineering</td>
                        <td>Chemical Engineering</td>
                        <td>Bachelor of Engineering	</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Civil Engineering</td>
                        <td>Bachelor of Engineering	</td>
                        <td>  Click here	</td>
                
                      </tr>


                      <tr>
                        <td>School of Engineering</td>
                        <td>Structural Design</td>
                        <td>Master of Technology	</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Computer Science and Engineering</td>
                        <td>Bachelor of Engineering	</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Software Engineering</td>
                        <td>Master of Technology</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Electrical and Electronics Engineering</td>
                        <td>Bachelor of Engineering</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Electrical Engineering</td>
                        <td>Bachelor of Engineering</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Electrical Power System</td>
                        <td>Master of Technology	</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Power Electronics</td>
                        <td>Master of Technology</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Electronic & Communication Engineering</td>
                        <td>Bachelor of Engineering</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Digital Communication</td>
                        <td>Master of Technology</td>
                        <td>  Click here	</td>
                
                      </tr>
                      <tr>
                        <td>School of Engineering</td>
                        <td>VLSI</td>
                        <td>Master of Technology	</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Electronics & Instrumentation Engineering</td>
                        <td>Bachelor of Engineering</td>
                        <td>  Click here	</td>
                
                      </tr>


                      <tr>
                        <td>School of Engineering</td>
                        <td>Information Technology</td>
                        <td>Bachelor of Engineering</td>
                        <td>  Click here	</td>
                
                      </tr>


                      <tr>
                        <td>School of Engineering</td>
                        <td>Electronics & Instrumentation Engineering</td>
                        <td>Bachelor of Engineering</td>
                        <td> Click here	</td>
                
                      </tr>



                      <tr>
                        <td>School of Engineering</td>
                        <td>Information Technology</td>
                        <td>Master of Technology</td>
                        <td>  Click here	</td>
                
                      </tr>


                      <tr>
                        <td>School of Engineering</td>
                        <td>Mechanical Engineering</td>
                        <td>Bachelor of Engineering</td>
                        <td>  Click here	</td>
                
                      </tr>


                      <tr>
                        <td>School of Engineering</td>
                        <td>Industrial Design</td>
                        <td>Master of Technology	</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Thermal Engineering</td>
                        <td>Master of Technology	</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Industrial Designg</td>
                        <td>Master of Technology	</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>School of Engineering</td>
                        <td>Mining Engineering </td>
                        <td>Bachelor of Engineering</td>
                        <td>  Click here	</td>
                
                      </tr>

                      <tr>
                        <td>Faculty of Pharmacy</td>
                        <td>Pharmacology</td>
                        <td>Master of Pharmacy</td>
                        <td>  Click here	</td>
                
                      </tr>
                      <tr>
                      <td>Faculty of Pharmacy</td>
                        <td>Pharmaceutics</td>
                        <td>Master of Pharmacy</td>
                        <td>  Click here	</td>
                         </tr>


                          <tr>
                          <td>School of Management Studies</td>
                        <td>Management </td>
                        <td>BBA</td>
                        <td>  Click here	</td>
                   </tr>  

                   <tr>
                   <td>School of Management Studies</td>
                        <td>Management </td>
                        <td>MBA</td>
                        <td>  Click here	</td>
                   </tr>  
                   <tr>
                        <td>School of law</td>
                        <td>Law</td>
                        <td>Law</td>
                        <td>  Click here	</td>
                   </tr>  
                   <tr>
                   <td>Faculty of Education</td>
                        <td>Arts</td>
                        <td>Bachelor of Arts	</td>
                        <td>  Click here	</td>
                   </tr>  
                   <tr>
                   <td>Faculty of Education</td>
                        <td>Arts</td>
                        <td>Master of Arts	</td>
                        <td>  Click here	</td>
                   </tr>  
                   <tr>
                   <td>Faculty of Education</td>
                        <td>Science</td>
                        <td>Bachelor of Science</td>
                        <td>  Click here	</td>
                   </tr>  
                   <tr>
                   <td>Faculty of Education</td>
                        <td>Science</td>
                        <td>Master of Science</td>
                        <td>  Click here	</td>
                   </tr>  
                   <tr>
                   <td>Faculty of Education</td>
                        <td>Commerce</td>
                        <td>Bachelor of Commerce</td>
                        <td>  Click here	</td>
                   </tr>  
                   <tr>
                   <td>Faculty of Education</td>
                        <td>Commerce</td>
                        <td>Master of Commerce</td>
                        <td>  Click here	</td>
                   </tr>  
                 
                   <tr>
                        <td>Faculty of Education</td>
                        <td>Education</td>
                        <td>B.A.Ed</td>
                        <td>  Click here	</td>
                   </tr>  
                   <tr>
                        <td>Faculty of Education</td>
                        <td>Education</td>
                        <td>B.Ed</td>
                        <td>  Click here	</td>
                   </tr>  

                   <tr>
                        <td>Faculty of Education</td>
                        <td> Physical Education</td>
                        <td>Bachelor of Physical Education</td>
                        <td>  Click here	</td>
                   </tr>  
                   <tr>
                        <td>School Computer Application</td>
                        <td>Computer Application</td>
                        <td>P.G.D.C.A</td>
                        <td>  Click here	</td>
                   </tr>  

                   <tr>
                   <td>School Computer Application</td>
                        <td>Computer Application</td>
                        <td>B.C.A</td>
                        <td>  Click here	</td>
                   </tr>  
                  <tr>
                        <td>School Computer Application</td>
                        <td>Computer Application</td>
                        <td>M.C.A</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                        <td> School Of Hotel Mangement</td>
                        <td>HOTEL MANAGEMENT AND CATERING</td>
                        <td>Bachelor of HOTEL MANAGEMENT AND CATERING</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                        <td>School of Homeopathy</td>
                        <td>Homeopathy</td>
                        <td>B.H.M.S</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                        <td>School of Agriculture</td>
                        <td>Agriculture</td>
                        <td>Bachelor of Agriculture</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                        <td>School of Ayurveda & Siddha Studiesy</td>
                        <td>Ayurveda</td>
                        <td>B.A.M.S</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                        <td>School of Nursing</td>
                        <td>Nursing</td>
                        <td>Bachelor of Nursing</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                   <td>School of Nursing</td>
                        <td>Nursing</td>
                        <td>P.B.Sc (Nursing)</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                        <td>School of Paramedica</td>
                        <td>Paramedical</td>
                        <td>B.P.T</td>
                        <td>  Click here	</td>
                   </tr> 
                    </tbody>
              </table>
            </div>
          </div>
        </div> <br/><br/>
    </div>


    <h6 style={{textAlign:"center"}}><b>1.1.3 :-</b> Percentage of Programmes where syllabus revision was carried out during the last five years. Response.</h6>
 
      <div className="content">
        <div className="dashboard">
          <div className="schedule-table" style={{ marginTop: "20px" }}>
            <div className="container mt-3 table-responsive"> 
            <table className="resizable-table table table-hover">
                <thead >
                  <tr>
                    <th style={{backgroundColor:"#5F9EA0"}}> School Name</th>
                    <th style={{backgroundColor:"#5F9EA0"}} >Department</th>
                    <th style={{backgroundColor:"#5F9EA0"}}>Program</th>
                    <th style={{backgroundColor:"#5F9EA0"}}>Session  (2017-18 To 2021-22)</th>
                    <th style={{backgroundColor:"#5F9EA0"}}></th>
                  </tr>
                </thead>
                <tbody>
                      <tr>
                        <td>School of Engineering</td>
                        <td>School of Engineering</td>
                        <td>Aeronautical Engineering</td>
                        <td>Bachelor of Engineering</td>
                        <td>  Click here	</td>
                     </tr>

                     <tr>
                        <td>School of Engineering</td>
                        <td>School of Engineering</td>
                        <td>Chemical Engineering</td>
                        <td>Bachelor of Engineering</td>
                        <td>  Click here	</td>
                     </tr>


                     <tr>
                        <td>School of Engineering</td>
                        <td>School of Engineering</td>
                        <td>Civil Engineering</td>
                        <td>Bachelor of Engineering</td>
                        <td>  Click here	</td>
                     </tr>


                     <tr>
                        <td>School of Engineering</td>
                        <td>School of Engineering</td>
                        <td>Structural Design</td>
                        <td>Master of Technology</td>
                        <td>  Click here	</td>
                     </tr>
                     <tr>
                        <td>School of Engineering</td>
                        <td>School of Engineering</td>
                        <td>Computer Science and Engineering</td>
                        <td>Bachelor of Engineering	</td>
                        <td>  Click here	</td>
                     </tr>

                     <tr>
                        <td>School of Engineering</td>
                        <td>School of Engineering</td>
                        <td>Computer Science and Engineering</td>
                        <td>Master of Technology	</td>
                        <td>  Click here	</td>
                     </tr>

                    
                     <tr>
                        <td>School of Engineering</td>
                        <td>School of Engineering</td>
                        <td>Software Engineering</td>
                        <td>Master of Technology</td>
                        <td>  Click here	</td>
                     </tr>

                     <tr>
                        <td>School of Engineering</td>
                        <td>School of Engineering</td>
                        <td>Electrical and Electronics Engineering</td>
                        <td>Bachelor of Engineering	</td>
                        <td>  Click here	</td>
                     </tr>

                     <tr>
                        <td>School of Engineering</td>
                        <td>School of Engineering</td>
                        <td>Electrical Engineering</td>
                        <td>Bachelor of Engineering</td>
                        <td>  Click here	</td>
                     </tr>


                     <tr>
                        <td>School of Engineering</td>
                        <td>School of Engineering</td>
                        <td>Electrical Power System</td>
                        <td>Master of Technology</td>
                        <td>  Click here	</td>
                     </tr>

                     <tr>
                        <td>School of Engineering</td>
                        <td>School of Engineering</td>
                        <td>Power Electronics</td>
                        <td>Master of Technology</td>
                        <td>  Click here	</td>
                     </tr>
                     <tr>
                        <td>School of Engineering</td>
                        <td>School of Engineering</td>
                        <td>Electronic & Communication Engineering</td>
                        <td>Bachelor of Engineering	</td>
                        <td>  Click here	</td>
                     </tr>


                     <tr>
                        <td>School of Engineering</td>
                        <td>School of Engineering</td>
                        <td>Digital Communication</td>
                        <td>Master of Technology</td>
                        <td>  Click here	</td>
                     </tr>


                     <tr>
                        <td>School of Engineering</td>
                        <td>School of Engineering</td>
                        <td>VLSI</td>
                        <td>Master of Technology</td>
                        <td>  Click here	</td>
                     </tr>



                     <tr>
                        <td>School of Engineering</td>
                        <td>School of Engineering</td>
                        <td>Electronics & Instrumentation Engineering</td>
                        <td>Bachelor of Engineering</td>
                        <td>  Click here	</td>
                     </tr>


                     <tr>
                        <td>School of Engineering</td>
                        <td>School of Engineering</td>
                        <td>Information Technology</td>
                        <td>Bachelor of Engineering</td>
                        <td>  Click here	</td>
                     </tr>


                     <tr>
                        <td>School of Engineering</td>
                        <td>School of Engineering</td>
                        <td>Information Technology</td>
                        <td>Master of Technology</td>
                        <td>  Click here	</td>
                     </tr>

                     <tr>
                        <td>School of Engineering</td>
                        <td>School of Engineering</td>
                        <td>Mechanical Engineering</td>
                        <td>Bachelor of Engineering	</td>
                        <td>  Click here	</td>
                     </tr>

                     <tr>
                        <td>School of Engineering</td>
                        <td>School of Engineering</td>
                        <td>Industrial Design</td>
                        <td>Master of Technology</td>
                        <td>  Click here	</td>
                     </tr>

                     <tr>
                        <td>School of Engineering</td>
                        <td>School of Engineering</td>
                        <td>Thermal Engineering</td>
                        <td>Master of Technology</td>
                        <td>  Click here	</td>
                     </tr>
                     <tr>
                        <td>School of Engineering</td>
                        <td>School of Engineering</td>
                        <td>Mining Engineering </td>
                        <td>Bachelor of Engineering	</td>
                        <td>  Click here	</td>
                     </tr>

                        

                     <tr>
                        <td>Faculty of Pharmacy</td>
                        <td>Faculty of Pharmacy</td>
                        <td>Pharmacy</td>
                        <td>Bachelor of Pharmacy</td>
                        <td>  Click here	</td>
                     </tr>
                     <tr>
                        <td>Faculty of Pharmacy</td>
                        <td>Faculty of Pharmacy</td>
                        <td>Pharmacology</td>
                        <td>Master of Pharmacy</td>
                        <td>  Click here	</td>
                     </tr>
                     <tr>
                        <td>Faculty of Pharmacy</td>
                        <td>Faculty of Pharmacy</td>
                        <td>Pharmaceutics</td>
                        <td>Master of Pharmacy</td>
                        <td>  Click here	</td>
                     </tr>


                 <tr>
                        <td>School of Management Studies</td>
                        <td>School of Management Studies</td>
                        <td>Management</td>
                        <td>BBA</td>
                        <td>  Click here	</td>
                     </tr>
                     <tr>
                        <td>School of Management Studies</td>
                        <td>School of Management Studies</td>
                        <td>Management</td>
                        <td>MBA</td>
                        <td>  Click here	</td>
                     </tr>

                     <tr>
                        <td>School of law</td>
                        <td>School of law</td>
                        <td>Law</td>
                        <td>Law</td>
                        <td>  Click here	</td>
                     </tr>
                     <tr>
                        <td>Faculty of Educationw</td>
                        <td>Faculty of Education</td>
                        <td>Arts</td>
                        <td>Bachelor of Arts</td>
                        <td>  Click here	</td>
                     </tr>
                     <tr>
                        <td>Faculty of Educationw</td>
                        <td>Faculty of Education</td>
                        <td>Arts</td>
                        <td>Master of Arts</td>
                        <td>  Click here	</td>
                     </tr>


                 <tr>
                        <td>Faculty of Educationw</td>
                        <td>Faculty of Education</td>
                        <td>Science</td>
                        <td>Bachelor of Science</td>
                        <td>  Click here	</td>
                     </tr>
                     <tr>
                        <td>Faculty of Educationw</td>
                        <td>Faculty of Education</td>
                        <td>Science</td>
                        <td>Master of Science</td>
                        <td>  Click here	</td>
                     </tr>
                 
                     <tr>
                        <td>Faculty of Educationw</td>
                        <td>Faculty of Education</td>
                        <td>Commerce</td>
                        <td>Bachelor of Commerce</td>
                        <td>  Click here	</td>
                     </tr> 
                     <tr>
                        <td>Faculty of Educationw</td>
                        <td>Faculty of Education</td>
                        <td>Commerce</td>
                        <td>Master of Commerce</td>
                        <td>  Click here	</td>
                     </tr> 
                     <tr>
                        <td>Faculty of Educationw</td>
                        <td>Faculty of Education</td>
                        <td>Education</td>
                        <td>B.A. Ed</td>
                        <td>  Click here	</td>
                     </tr> 
                     <tr>
                        <td>Faculty of Educationw</td>
                        <td>Faculty of Education</td>
                        <td>Education</td>
                        <td>B.Ed</td>
                        <td>  Click here	</td>
                     </tr> 
                     <tr>
                        <td>Faculty of Educationw</td>
                        <td>Faculty of Education</td>
                        <td>Physical Education</td>
                        <td>Bachelor of Physical Education</td>
                        <td>  Click here	</td>
                     </tr> 



                     <tr>
                        <td>School Computer Application</td>
                        <td>School Computer Application</td>
                        <td>Computer Application</td>
                        <td>P.G.D.C.A</td>
                        <td>  Click here	</td>
                     </tr>  
                     <tr>
                        <td>School Computer Application</td>
                        <td>School Computer Application</td>
                        <td>Computer Application</td>
                        <td>B.C.A</td>
                        <td>  Click here	</td>
                     </tr>  
                     <tr>
                        <td>School Computer Application</td>
                        <td>School Computer Application</td>
                        <td>Computer Application</td>
                        <td>M.C.A</td>
                        <td>  Click here	</td>
                     </tr>  
                     <tr>
                        <td> School Of Hotel Mangement</td>
                        <td> School Of Hotel Mangement</td>
                        <td>HOTEL MANAGEMENT AND CATERING</td>
                        <td>Bachelor of HOTEL MANAGEMENT AND CATERING</td>
                        <td>  Click here	</td>
                     </tr>  
                   <tr>
                        <td>School of Homeopathy</td>
                        <td>School of Homeopathy</td>
                        <td>Homeopathy</td>
                        <td>B.H.M.Se</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                        <td>School of Agriculture</td>
                        <td>School of Agriculture</td>
                        <td>Agriculture</td>
                        <td>Bachelor of Agriculture</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                        <td>School of Ayurveda & Siddha Studies</td>
                        <td>School of Ayurveda & Siddha Studies</td>
                        <td>Ayurveda</td>
                        <td>B.A.M.S</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                   <td>School of Nursing</td>
                   <td>School of Nursing</td>
                        <td>Nursing</td>
                        <td>Bachelor of Nursing</td>
                        <td>  Click here	</td>
                   </tr> 
                   <tr>
                   <td>School of Nursing</td>
                   <td>School of Nursing</td>
                        <td>Nursing</td>
                        <td>P.B.Sc (Nursing)</td>
                        <td>  Click here	</td>
                   </tr> 

                   <tr>
                   <td>School of Nursing</td>
                   <td>School of Nursing</td>
                        <td>Nursing</td>
                        <td>P.B.Sc (Nursing)</td>
                        <td>  Click here	</td>
                   </tr> 

                   <tr>
                   <td>School of Paramedical</td>
                   <td>School of Paramedical</td>
                        <td>Paramedical</td>
                        <td>B.P.T</td>
                        <td>  Click here	</td>
                   </tr> 

                   <tr>
                   <td> Faculty of Education</td>
                   <td> Faculty of Education</td>
                        <td>Ph .D.</td>
                        <td>Arts</td>
                        <td>  Click here	</td>
                   </tr> 


                 
                   <tr>
                   <td> Faculty of Education</td>
                   <td> Faculty of Education</td>
                        <td>Ph .D.</td>
                        <td>Science</td>
                        <td>  Click here	</td>
                   </tr>

                   <tr>
                   <td> Faculty of Education</td>
                   <td> Faculty of Education</td>
                        <td>Ph .D.</td>
                        <td>Commerce</td>
                        <td>  Click here	</td>
                   </tr>
                   <tr>
                   <td>School of Management Studies</td>
                   <td>School of Management Studies</td>
                        <td>Ph .D.</td>
                        <td>Mangement</td>
                        <td>  Click here	</td>
                   </tr>

                   <tr>
                   <td> Faculty of Education</td>
                   <td> Faculty of Education</td>
                        <td>Ph .D.</td>
                        <td>Physical Education</td>
                        <td>  Click here	</td>
                   </tr>
                   <tr>
                   <td> Faculty of Education</td>
                   <td> Faculty of Education</td>
                        <td>Ph .D.</td>
                        <td>Education</td>
                        <td>  Click here	</td>
                   </tr>
                   <tr>
                   <td>School of Engineering</td>
                   <td>School of Engineering</td>
                        <td>Ph .D.</td>
                        <td>Engineering</td>
                        <td>  Click here	</td>
                   </tr>

                   <tr>
                   <td> Faculty of Education</td>
                   <td> Faculty of Education</td>
                        <td>Ph .D.</td>
                        <td>Library Science</td>
                        <td>  Click here	</td>
                   </tr>

                   <tr>
                   <td> Faculty of Pharmacy</td>
                   <td>Faculty of Pharmacy</td>
                        <td>Ph .D.</td>
                        <td>Pharmacy</td>
                        <td>  Click here	</td>
                   </tr>


                   
                    </tbody>
              </table>
            </div>
          </div>
        </div> <br/><br/>
    </div>


     
      <FooterContanct />
    </>
  );
}

export default CriteriaOne;



