


import React from 'react';
import FooterContanct from '../../FooterContanct';
import Navbarcontanct from '../../Navbarcontanct';

function WorkshopAndSeminars() {
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
      <h2 style={{ marginTop: "30px", fontWeight: 'bolder' }}> | Workshop And Seminars</h2><br />
      {/* <h4 style={{textAlign:"center", textDecoration:"underline"}}><b>/ Faculty of Management /</b></h4> <br/> */}
      <h6 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>UPCOMING EVENT</b></h6>
      <div className="content">
        <div className="dashboard">
          <div className="schedule-table" style={{ marginTop: "20px" }}>
            <div className="container mt-3 table-responsive"> {/* Added table-responsive class here */}
              <table className="resizable-table table table-hover">
              <thead >
                  <tr>
                    <th style={{backgroundColor:"#5F9EA0"}}> S.NO</th>
                    <th style={{backgroundColor:"#5F9EA0"}} >DEPARTMENT</th>
                    <th style={{backgroundColor:"#5F9EA0"}}>EVENT</th>
                    <th style={{backgroundColor:"#5F9EA0"}}>TITLE</th>
                  </tr>
                </thead>
                <tbody>
                      <tr>
                        <td>1</td>
                        <td>PHYSICAL EDUCATION</td>
                        <td>EXPERT LECTURE</td>
                        <td>STATISTICAL ANALYSIS  OF RESEARCH METHODOLOGY</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>MANAGEMENT</td>
                        <td>SEMINAR</td>
                        <td>PRACTICAL APPLICATIONS OF GEETA IN PRESENT SCENARIO</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>MANAGEMENT</td>
                        <td>WORKSHOP</td>
                        <td>NEW TRENDS IN THESIS WRITING</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>SCHOOL OF PHARMACY</td>
                        <td>WORKSHOPE</td>
                        <td>NATIONAL E-WORKSHOP ON “ADVANCED INSTRUMENTATION”</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>DIPLOMA ENGINEERING</td>
                        <td>EXPERT LECTURE</td>
                        <td>ENTREPRENEURSHIP SKILL DEVELOPMENT AMONG STUDENTS</td>
                      </tr>
                    </tbody>
              </table>
            </div>
          </div>
        </div> <br /><br />


        <h6 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>2021-22</b></h6>
        <div className="dashboard">
          <div className="schedule-table" style={{ marginTop: "20px" }}>
            <div className="container mt-3 table-responsive"> {/* Added table-responsive class here */}
            <table className="resizable-table table table-hover">
                <thead >
                  <tr>
                    <th style={{backgroundColor:"#5F9EA0"}}> S.NO.</th>
                    <th style={{backgroundColor:"#5F9EA0"}} >Date</th>
                    <th style={{backgroundColor:"#5F9EA0"}}>DEPARTMENT</th>
                    <th style={{backgroundColor:"#5F9EA0"}}>EVENT</th>
                    <th style={{backgroundColor:"#5F9EA0"}}>TITLE</th>
                  </tr>
                </thead>
                <tbody>
                      <tr>
                        <td>1.</td>
                        <td>2 May 2022-7 May 2022</td>
                        <td>COMPUTER SCIENCE ENGINEERING / MCA</td>
                        <td>5 Days  WORKSHOP</td>
                        <td>SQL Using Oracle  more info</td>
                      </tr>
                    
                    </tbody>
              </table>
            </div>
          </div>
        </div> <br/><br/>


        <h6 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>WORKSHOP</b></h6>
        <div className="dashboard">
          <div className="schedule-table" style={{ marginTop: "20px" }}>
            <div className="container mt-3 table-responsive"> {/* Added table-responsive class here */}
            <table className="resizable-table table table-hover">
                <thead >
                  <tr>
                    <th style={{backgroundColor:"#5F9EA0"}}>S.NO</th>
                    <th style={{backgroundColor:"#5F9EA0"}} >ACADEMIC YEAR</th>
                    <th style={{backgroundColor:"#5F9EA0"}}>NUMBER</th>
                    <th style={{backgroundColor:"#5F9EA0"}}>TITLE</th>
                  </tr>
                </thead>
                <tbody>
                      <tr>
                        <td>1.</td>
                        <td>2014-15</td>
                        <td>01</td>
                        <td>ROBOTRYST</td>
                      </tr>

                      <tr>
                        <td>2.</td>
                        <td>2015-16</td>
                        <td>02</td>
                        <td>WORKSHOP ON IMPACT OF MENTAL HEALTH ON ACADEMICS, WORKSHOP ON MATLAB PROGRAMMING FOR IMAGE PROCESSING</td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td>2016-17</td>
                        <td>01</td>
                        <td>WORKSHOP ON HYDRAULIC AND PNEUMATIC SYSTEM</td>
                      </tr>
                      <tr>
                        <td>4.</td>
                        <td>2017-18</td>
                        <td>02</td>
                        <td>WORKSHOP ON INTEGRITY & CIVILITY IN LEADERSHIP,  HANDS ON WORKSHOP ON EMBEDDED SYSTEM DESIGN WITH IOT</td>
                      </tr>
                      <tr>
                        <td>5.</td>
                        <td>2018-19</td>
                        <td>03</td>
                        <td>AWS CLOUD COMPUTING, WORKSHOP ON ATHLETIC PERFORMANCE ENHANCEMENT, ANSYS FLUENT WORKSHOP.</td>
                      </tr>
                      <tr>
                        <td>6.</td>
                        <td>2019-20</td>
                        <td>03</td>
                        <td>INNOVATING STUDENT LEADERSHIP, BUILDING PLANNING DESIGN AND ANALYSIS, HAZARD IDENTIFICATION OF PROCESS PLANTS</td>
                      </tr>
                         </tbody>
              </table>
            </div>
          </div>
        </div> <br/><br/>


        <h6 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>CONFERENCE</b></h6>
        <div className="dashboard">
          <div className="schedule-table" style={{ marginTop: "20px" }}>
            <div className="container mt-3 table-responsive"> {/* Added table-responsive class here */}
            <table className="resizable-table table table-hover">
                <thead >
                  <tr>
                    <th style={{backgroundColor:"#5F9EA0"}}> S.NO.</th>
                    <th style={{backgroundColor:"#5F9EA0"}} >ACADEMIC YEAR</th>
                    <th style={{backgroundColor:"#5F9EA0"}}>NUMBER</th>
                    <th style={{backgroundColor:"#5F9EA0"}}>TITLE</th>
                  </tr>
                </thead>
                <tbody>
                      <tr>
                        <td>1.</td>
                        <td>2014-15</td>
                        <td>01</td>
                        <td>International Conference on Advances in Mathematics, Engineering & Technology (ICAMET-15)</td>
                      </tr>

                      <tr>
                        <td>2.</td>
                        <td>2015-16</td>
                        <td>02</td>
                        <td>International Conference on Information and Education Innovations (ICIEI-16), International Conference on Engineering & Technology (ICET-16)</td>
                      </tr>

                      <tr>
                        <td>3.</td>
                        <td>2016-17</td>
                        <td>01</td>
                        <td>International Conference on Advance Studies in Engineering and Sciences” (ICASES-16),</td>
                      </tr>

                      <tr>
                        <td>4.</td>
                        <td>2017-18</td>
                        <td>02</td>
                        <td>International Conference on Advance Studies in Engineering and Sciences” (ICASES-17), International Conference on Current Trends in STEAM (ICCTS-2018)</td>
                      </tr>

                      <tr>
                        <td>5.</td>
                        <td>2018-19</td>
                        <td>01</td>
                        <td>International Conference on Current Trends in STEAM (ICCTS-2019)</td>
                      </tr>

                      <tr>
                        <td>6.</td>
                        <td>2019-20</td>
                        <td>01</td>
                        <td>International Conference on Current Trends in STEAM (ICCTS-2020)</td>
                      </tr>
                      </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <FooterContanct />
    </>
  );
}

export default WorkshopAndSeminars;






