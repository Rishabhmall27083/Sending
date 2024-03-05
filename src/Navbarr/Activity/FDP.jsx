import React from 'react';
import FooterContanct from '../../FooterContanct';
import Navbarcontanct from '../../Navbarcontanct';

function FDP() {
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
      <h2 style={{ marginTop: "30px", fontWeight: 'bolder' }}> | FDP</h2><br />
      {/* <h3 style={{ textAlign: "center", textDecoration: "underline" }}><b> FACULTY DEVELOPMENT PROGRAM (FDP) </b></h3> <br /> */}
      <h6 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>FACULTY DEVELOPMENT PROGRAM (FDP)</b></h6>
      <div className="content">
             {/* <h6 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>2020-21</b></h6> */}
        <div className="dashboard">
          <div className="schedule-table" style={{ marginTop: "20px" }}>
            <div className="container mt-3 table-responsive"> {/* Added table-responsive class here */}
              <table className="resizable-table table table-hover">
                <thead>
                  <tr>
                    <th style={{ backgroundColor: "#5F9EA0" }}> Date</th>
                    <th style={{ backgroundColor: "#5F9EA0" }}>DEPARTMENT</th>
                    <th style={{ backgroundColor: "#5F9EA0" }}>Sponsored</th>
                    <th style={{ backgroundColor: "#5F9EA0" }}>Topic</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>9 March- 15 March 2021</td>
                    <td>Electronics & Communication Engineering</td>
                    <td>AICTE- ISTE</td>
                    <td>The Impact of Faculty Development on Teaching Skills and Research Scholars for Technical Perspectives (Phase I)</td>
                  </tr>

                  <tr>
                    <td>23 March - 31 March 2021</td>
                    <td>Computer Sciences & Engineering</td>
                    <td>AICTE- ISTE</td>
                    <td>The Impact of Faculty Development on Teaching Skills and Research Scholars for Technical Perspectives (Phase II)</td>
                  </tr>

                  <tr>
                    <td>20 April - 26 April 2021</td>
                    <td>Mechanical Engineering</td>
                    <td>AICTE- ISTE</td>
                    <td>The Impact of Faculty Development on Teaching Skills and Research Scholars for Technical Perspectives (Phase III)</td>
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

export default FDP;

