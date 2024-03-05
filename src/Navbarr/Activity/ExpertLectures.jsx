


import React from 'react';
import FooterContanct from '../../FooterContanct';
import Navbarcontanct from '../../Navbarcontanct';

function ExpertLectures() {
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
      <h2 style={{ marginTop: "30px", fontWeight: 'bolder' }}> | Expert Lectures</h2><br />
      <h4 style={{textAlign:"center", textDecoration:"underline"}}><b>/ Faculty of Management /</b></h4> <br/>
      <h6 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>UPCOMING EVENT</b></h6>
      <div className="content">
        <div className="dashboard">
          <div className="schedule-table" style={{ marginTop: "20px" }}>
            <div className="container mt-3 table-responsive"> {/* Added table-responsive class here */}
              <table className="resizable-table table table-hover">
              <thead >
                  <tr>
                    <th style={{backgroundColor:"#5F9EA0"}}> Date</th>
                    <th style={{backgroundColor:"#5F9EA0"}} >DEPARTMENT</th>
                    <th style={{backgroundColor:"#5F9EA0"}}>Topic</th>
                    <th style={{backgroundColor:"#5F9EA0"}}>TITLE</th>
                  </tr>
                </thead>
                <tbody>
                      <tr>
                        <td>1</td>
                        <td>PHYSICAL EDUCATION</td>
                        <td>EXPERT LECTURE</td>
                        <td>STRESS MANAGEMENT</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>PHYSICAL EDUCATION</td>
                        <td>EXPERT LECTURE</td>
                        <td>SESSION ON THE OCCASION OF “INTERNATIONAL YOGA”</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>DIPLOMA ENGINEERING</td>
                        <td>EXPERT LECTURE</td>
                        <td>ENTREPRENEURSHIP SKILL DEVELOPMENT AMONG STUDENTS</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>SCHOOL OF PHARMACY</td>
                        <td>GUEST LECTURE</td>
                        <td>CAREER OPPORTUNITY AFTER B. Pharm</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>SCHOOL OF PHARMACY</td>
                        <td>GUEST LECTURE</td>
                        <td>PERSONALITY DEVELOPMENT AND COMMUNICATION SKILLS</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>SCHOOL OF PHARMACY</td>
                        <td>GUEST LECTURE</td>
                        <td>QUALITY CONTROL AND QUALITY ASSURANCE</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>SCHOOL OF PHARMACY</td>
                        <td>GUEST LECTURE</td>
                        <td>GUIDANCE ON PREPARATION OF GPAT EXAM</td>
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
                    <th style={{backgroundColor:"#5F9EA0"}}> Date</th>
                    <th style={{backgroundColor:"#5F9EA0"}} >DEPARTMENT</th>
                    <th style={{backgroundColor:"#5F9EA0"}}>Topic</th>
                  </tr>
                </thead>
                <tbody>
                      <tr>
                        <td>19/02/2022</td>
                        <td>Department of Physical Education , SSSUTMS</td>
                        <td>EXPERT LECTURE ON YOGA IN DAILY ROUTINE  More info</td>
                      </tr>
                    
                    </tbody>
              </table>
            </div>
          </div>
        </div> <br/><br/>


        <h6 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>2020-21</b></h6>
        <div className="dashboard">
          <div className="schedule-table" style={{ marginTop: "20px" }}>
            <div className="container mt-3 table-responsive"> {/* Added table-responsive class here */}
            <table className="resizable-table table table-hover">
                <thead >
                  <tr>
                    <th style={{backgroundColor:"#5F9EA0"}}> Date</th>
                    <th style={{backgroundColor:"#5F9EA0"}} >DEPARTMENT</th>
                    <th style={{backgroundColor:"#5F9EA0"}}>Topic</th>
                  </tr>
                </thead>
                <tbody>
                      <tr>
                        <td>22/11/2021</td>
                        <td>SSSUTMS</td>
                        <td>Financial Literacy Session, With Mr. Shamsher Singh    More info</td>
                      </tr>

                      <tr>
                        <td>05/07/2021</td>
                        <td>School of Design , SSSUTMS</td>
                        <td>“Understanding the profession of Architecture” with Ar. Vijay Garg More info</td>
                      </tr>
                    
                    </tbody>
              </table>
            </div>
          </div>
        </div> <br/><br/>


        <h6 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>2019-20</b></h6>
        <div className="dashboard">
          <div className="schedule-table" style={{ marginTop: "20px" }}>
            <div className="container mt-3 table-responsive"> {/* Added table-responsive class here */}
            <table className="resizable-table table table-hover">
                <thead >
                  <tr>
                    <th style={{backgroundColor:"#5F9EA0"}}> Date</th>
                    <th style={{backgroundColor:"#5F9EA0"}} >DEPARTMENT</th>
                    <th style={{backgroundColor:"#5F9EA0"}}>Topic</th>
                  </tr>
                </thead>
                <tbody>
                      <tr>
                        <td>23/12/2019</td>
                        <td>Faculty of Education , SSSUTMS</td>
                        <td>Fitness Trend More info</td>
                      </tr>

                      <tr>
                        <td>23/12/2019</td>
                        <td>Faculty of Education , SSSUTMS</td>
                        <td>Stress Management More info</td>
                      </tr>

                      <tr>
                        <td>14/12/2019</td>
                        <td>Dept. of Applied Chemistry SOE, SSSUTMS</td>
                        <td>Polymer Composites More info</td>
                      </tr>

                      <tr>
                        <td>09/12/2019</td>
                        <td>Faculty of Education , SSSUTMS</td>
                        <td>Technology in Education  More info</td>
                      </tr>

                      <tr>
                        <td>09/12/2019</td>
                        <td>MBA Deparment, SOMS, SSSUTMS</td>
                        <td>Paradigm Shift in Supply Chain Management More info</td>
                      </tr>

                      <tr>
                        <td>07/12/2019</td>
                        <td>SSSUTME</td>
                        <td>Expert Lecture on E-governance</td>
                      </tr>

                      <tr>
                        <td>02/12/2019</td>
                        <td>Dept. of Electrical Engineering, SOE</td>
                        <td>Circuit and its Analytical function parameters for lighting and switching impulse generation.  More info</td>
                      </tr>

                      <tr>
                        <td>02/12/2019</td>
                        <td>Dept. of Aeronautical Engineering, SOE</td>
                        <td>Industrial Application Of Refrigeration System More info</td>
                      </tr>

                      <tr>
                        <td>02/12/2019</td>
                        <td>Dept. of Mechinical Engineering, SOE</td>
                        <td>Solar and Wind Hybrid System More info Report</td>
                      </tr>

                      <tr>
                        <td>02/12/2019</td>
                        <td>School of Hotel Management , SSSUTMS </td>
                        <td>Commonly Neglected Cleaning Areas in Hotel Guest Rooms More info </td>
                      </tr>

                      <tr>
                        <td>30/11/2019</td>
                        <td>Dept. of Computer Science  SOE , SSSUTMS</td>
                        <td>Entrepreneurship talks about Software Field More info</td>
                      </tr>

                      <tr>
                        <td>30/11/2019</td>
                        <td>MCA Department SOCA, SSSUTMS</td>
                        <td>Entrepreneurship talks about Software Field More info  Report</td>
                      </tr>

                      <tr>
                        <td>30/11/2019</td>
                        <td>Dept. of Mechinical Engineering, SOE</td>
                        <td>Workshop on Hydraulics& Paneumatics More info   Report</td>
                      </tr>

                      <tr>
                        <td>30/11/2019</td>
                        <td>School of Pharmacy , SSSUTMS </td>
                        <td>The Scope of Pharmacovigilence in Stream of Pharmacy More info</td>
                      </tr>

                      <tr>
                        <td>30/11/2019</td>
                        <td>Dept. of Chemical Engineering, SOE</td>
                        <td>Chemical Engineering & Technology Industrial ApplicationsMore info</td>
                      </tr>

                      <tr>
                        <td>30/11/2019</td>
                        <td>Dept. of Electrical Engineering, SOE</td>
                        <td>Electronic Sensors in daily life Application More info</td>
                      </tr>

                      <tr>
                        <td>29/11/2019</td>
                        <td>Botany Department</td>
                        <td>Medicinal Plants and Their Importance in Our life</td>
                      </tr>

                      <tr>
                        <td>29/11/2019</td>
                        <td>Faculty of Education , SSSUTMS</td>
                        <td>Expert Lecture on Moral Value More info</td>
                      </tr>

                      <tr>
                        <td>28/11/2019</td>
                        <td>Dept. of Computer Science Engineering, SOE</td>
                        <td>Psychometric Skills Uses in Interview of Software Company   More info </td>
                      </tr>

                      <tr>
                        <td>30/11/2019</td>
                        <td>Dept. of Chemical Engineering, SOE</td>
                        <td>Chemical Engineering & Technology Industrial ApplicationsMore info</td>
                      </tr>

                      <tr>
                        <td>28/11/2019</td>
                        <td>Dept. of Civil Engineering, SOE</td>
                        <td>Water Resource Development  More info Report</td>
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

export default ExpertLectures;







