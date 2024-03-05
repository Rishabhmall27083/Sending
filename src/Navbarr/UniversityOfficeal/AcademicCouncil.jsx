import React from 'react'
import Navbarcontanct from '../../Navbarcontanct'
import FooterContanct from '../../FooterContanct'

function AcademicCouncil() {
  return (
    <>
    <style>
        {`
        /* Some code is probably from the Codepen CPC template. */

        /* inspired  https://webflow.com/made-in-webflow/website/jb10x#*/
        .dashboard {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
        }
         h2 {
            display: block;
            background: #b2dbb3;
        clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
        }
        
        table, td, tr {
            background-color: #edd3f2;
        }
        
        table {
            width: 100%;
        }
        
        h2, table {
            padding: 10px;
            text-align: left;
        }
        h2 {
            padding-left: 8%;
            padding-right: 5%;
        }
        th, td {
        border: none;
        border-bottom: 1px solid #d7bfdb;
            padding-bottom: 3px;
            padding-top: 5px;
        }
       .table {
            border-collapse: collapse;
            width: 100%;
          }
         .table,
          .table th,
          .table td {
            border: 1px solid #ccc;
          }
          .table th,
          .table td {
            padding: 0.7rem;
          }
          
          .table th {
            position: relative;
             cursor: grab;
                user-select: none;
                background-color: #5F9EA0;
          }   
             .table th:active {
                cursor: grabbing;
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
       `}
    </style>
    <Navbarcontanct/>

    <h2 style={{marginTop:"30px"
,fontWeight:'bolder'}}> | Academic Council</h2>
   <br></br>

  
  {/* /* Some code is probably from the Codepen CPC template. * / */}
  <div className="dashboard">
   
    
    <div className="schedule-table"
    style={{marginTop:"50px"}}
    >
         <h5 style={{textAlign:"center",color:"#D2691E"}}> <b>Academic Council</b></h5>
      <div className="container mt-3">
    <table id="resizeMe" className="resizable-table table table-hover">
      <thead>
        <tr id="header-row">
          <th className="draggable-table" data-column={0}>
          S.No.
          </th>
          <th className="draggable-table" data-column={1}>
          Name
          </th>
          <th className="draggable-table" data-column={2}>
          Profession
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>DR. MUKESH TIWARI</td>
          <td>The Vice Chancellor &  Chairman</td>
        </tr>
        <tr>
          <td>2</td>
          <td>DR. G.R. SELOKAR</td>
          <td>Registrar & Member Secretary</td>
        </tr>
        <tr>
          <td>3</td>
          <td>School of Management Studies</td>
          <td>Dr. Rajesh Sharma</td>
        </tr>
        <tr>
          <td>4</td>
          <td>DR. MINAKSHI PATHAK</td>
          <td>Dean Physical Education & Member</td>
        </tr>
        <tr>
          <td>5</td>
          <td>DR. NILESH DIWAKAR</td>
          <td>Dean Engineering & Member</td>
        </tr>
        <tr>
          <td>6</td>
          <td>DR. KANCHAN SHRIVASTAV</td>
          <td>Dean Social Science & Member</td>
        </tr>
        <tr>
          <td>7</td>
          <td>DR. SANJAY RATHORE</td>
          <td>Dean Science & Member</td>
        </tr>
        <tr>
          <td>8</td>
          <td>DR. SHAHAB AHMAD</td>
          <td>Senior Professor & Member</td>
        </tr>
        <tr>
          <td>9</td>
          <td>DR. C.K. TYAGI</td>
          <td>Senior Professor & Member</td>
        </tr>
        <tr>
          <td>10</td>
          <td>DR. JITENDRA SHEETLANI</td>
          <td>Senior Professor & Member</td>
        </tr>
        <tr>
          <td>11</td>
          <td>PROF. VINOD KUMAR,
              Zoology Deptt.,
              Delhi University, New Delhi 110007
              Mail: drvkumar11@gmail.com</td>
          <td>(i)  Professors Nominated by The Chairman MPNVVVA Bhopal</td>
        </tr>
        <tr>
          <td>12</td>
          <td>PROF. MANOJ SHUKLA,
           Deptt. Of Maths, Excellence Institute of Higher Education,  Kaliyasot Dam, Kolar Road,Bhopal (MP)462016
           M-9300550455</td>
          <td>(ii) Professors Nominated by The   Chairman MPNVVVA Bhopa</td>
        </tr>
        <tr>
          <td>13</td>
          <td>MR. VIKAS CHOUHAN,
           Web Point Solution,S- 74, Mata Mandir Market, BDA Complex, Bhopal 462051
           Mail:infor@webpointsolutions.in</td>
          <td>Educationist (Nominated by Chancellor)</td>
        </tr>
        <tr>
          <td>14</td>
          <td>DR. R.C. DHAWAN,
           74 DK Devsthali, E-8 Extension,Arera Colony Bhopal. (MP)</td>
          <td>Industrialist (Nominated by Chancellor)</td>
        </tr>
      
      </tbody>
    </table>
  </div>
    </div>
  
  </div>
  <FooterContanct />
</>

  )
}

export default AcademicCouncil
