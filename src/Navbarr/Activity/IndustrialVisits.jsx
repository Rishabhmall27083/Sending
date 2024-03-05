import React from 'react';
import FooterContanct from '../../FooterContanct';
import Navbarcontanct from '../../Navbarcontanct';

function IndustrialVisits() {
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
      <h2 style={{ marginTop: "30px", fontWeight: 'bolder' }}> | IndustrialVisits</h2><br />
      {/* <h3 style={{ textAlign: "center", textDecoration: "underline" }}><b> Webinar Detail </b></h3> <br /> */}
      <h6 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>INDUSTRIAL TRAINING/VISIT</b></h6>
      <div className="content">
        <div className="dashboard">
          <div className="schedule-table" style={{ marginTop: "20px" }}>
            <div className="container mt-3 table-responsive"> {/* Added table-responsive class here */}
              <table className="resizable-table table table-hover">
                <thead>
                  <tr>
                    <th style={{ backgroundColor: "#5F9EA0" }}>Date</th>
                    <th style={{ backgroundColor: "#5F9EA0" }}>DEPARTMENT</th>
                    <th style={{ backgroundColor: "#5F9EA0" }}>	Topic</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>29/11/2019</td>
                    <td>Dept. of Civil Engineering, SOE</td>
                    <td>SUPER MAX RMC, NIC CONSTRUCTION (INDIA) PVT. LTD. BHOPAL   More info</td>
                  </tr>
                  <tr>
                    <td>26/11/2019</td>
                    <td>Dept. of Mechanical Engineering, SOE</td>
                    <td>CRISP BHOPAL, M.P.  More info</td>
                  </tr>
                  <tr>
                    <td>25/11/2019</td>
                    <td>Dept. of Mechanical Engineering, SOE</td>
                    <td>Cattle Feed Factory Pachama Sehore, M.P.  More info</td>
                  </tr>
                  <tr>
                    <td>25/06/2018-30/06/2018</td>
                    <td>Dept. of Mechanical Engineering, SOE Energy Sources </td>
                    <td>Solar and Other Renewable More info</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> <br /><br />

        <h6 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>INTERNSHIP/PROJECT WORK</b></h6>
        <div className="dashboard">
          <div className="schedule-table" style={{ marginTop: "20px" }}>
            <div className="container mt-3 table-responsive"> {/* Added table-responsive class here */}
              <table className="resizable-table table table-hover">
                <thead>
                  <tr>
                    <th style={{ backgroundColor: "#5F9EA0" }}> Year Department</th>
                    <th style={{ backgroundColor: "#5F9EA0" }}>List</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2019 Polytechnic Pharmacy</td>
                    <td>More info</td>
                  </tr>

                  <tr>
                    <td>2019 Pharmacy</td>
                    <td>More info</td>
                  </tr>

                  <tr>
                    <td>2019 MBA</td>
                    <td>More info</td>
                  </tr>

                  <tr>
                    <td>2019 MCA</td>
                    <td>More info</td>
                  </tr>

                  <tr>
                    <td>2019 MCA</td>
                    <td>More info</td>
                  </tr>
                  <tr>
                    <td>2019 BHMS</td>
                    <td>More info</td>
                  </tr>
                  <tr>
                    <td>2018 BHMS</td>
                    <td>More info</td>
                  </tr> <tr>
                    <td>2019 Polytechnic Engineering</td>
                    <td>More info</td>
                  </tr>
                  <tr>
                    <td>2018 Polytechnic Engineering</td>
                    <td>More info</td>
                  </tr>
                  <tr>
                    <td>2019 Electrical Engineering</td>
                    <td>More info</td>
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

export default IndustrialVisits;


