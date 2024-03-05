import React from 'react';
import FooterContanct from '../../FooterContanct';
import Navbarcontanct from '../../Navbarcontanct';

function Webinar() {
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
      <h2 style={{ marginTop: "30px", fontWeight: 'bolder' }}> | Webinar</h2><br />
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}><b> Webinar Detail </b></h3> <br />
      <h6 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>UPCOMING EVENT</b></h6>
      <div className="content">
        <div className="dashboard">
          <div className="schedule-table" style={{ marginTop: "20px" }}>
            <div className="container mt-3 table-responsive"> {/* Added table-responsive class here */}
              <table className="resizable-table table table-hover">
                <thead>
                  <tr>
                    <th style={{ backgroundColor: "#5F9EA0" }}> S.NO</th>
                    <th style={{ backgroundColor: "#5F9EA0" }}>DEPARTMENT</th>
                    <th style={{ backgroundColor: "#5F9EA0" }}>EVENT</th>
                    <th style={{ backgroundColor: "#5F9EA0" }}>TITLE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>POLYTECHNIC (ENGINEERING)N</td>
                    <td>WEBINAR</td>
                    <td>RECENT TRENDS IN SUPPLY CHAIN MANAGEMENT</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>POLYTECHNIC (ENGINEERING)</td>
                    <td>WEBINAR</td>
                    <td>WASTE MANAGEMENT AND IT”S UTILIZATION</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> <br /><br />

        <h6 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>2020-21</b></h6>
        <div className="dashboard">
          <div className="schedule-table" style={{ marginTop: "20px" }}>
            <div className="container mt-3 table-responsive"> {/* Added table-responsive class here */}
              <table className="resizable-table table table-hover">
                <thead>
                  <tr>
                    <th style={{ backgroundColor: "#5F9EA0" }}> Date</th>
                    <th style={{ backgroundColor: "#5F9EA0" }}>DEPARTMENT</th>
                    <th style={{ backgroundColor: "#5F9EA0" }}>Topic</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>05/May/2021</td>
                    <td>School of Homoeopathy, SSSUTMS</td>
                    <td>Role of AYUSH System & Medicines during Second Wave of COVID-19 Report</td>
                  </tr>

                  <tr>
                    <td>14/June/2021</td>
                    <td>Faculty of Pharmacy, SSSUTMS</td>
                    <td>Webinar on Blood Donation Awareness Broch</td>
                  </tr>

                  <tr>
                    <td>19/June/2021</td>
                    <td>School of Homoeopathy, SSSUTMS</td>
                    <td>Impact of Yogic Practices to Achieve Life Long Health on The Occasion of International Yoga Day Report</td>
                  </tr>

                  <tr>
                    <td>05/July/2021</td>
                    <td>School of Design, SSSUTMS</td>
                    <td>Understanding the Profession of Architecture More info</td>
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

export default Webinar;


