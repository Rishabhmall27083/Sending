// import React from 'react'
// import Navbarcontanct from '../../Navbarcontanct'
// import FooterContanct from '../../FooterContanct'

// function Approvals() {
//   return (
//     <>
//     <style>
//         {`
//         /* Some code is probably from the Codepen CPC template. */

//         /* inspired  https://webflow.com/made-in-webflow/website/jb10x#*/
//         .dashboard {
//             width: 100%;
//             max-width: 800px;
//             margin: 0 auto;
//         }
        
       
//         h2 {
//             display: block;
//             background: #b2dbb3;
//         clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
//         }
        
//         table, td, tr {
//             background-color: #edd3f2;
//         }
        
//         table {
//             width: 100%;
//         }
        
//         h2, table {
//             padding: 10px;
//             text-align: left;
//         }
//         h2 {
//             padding-left: 8%;
//             padding-right: 5%;
//         }
//         th, td {
//         border: none;
//         border-bottom: 1px solid #d7bfdb;
//             padding-bottom: 3px;
//             padding-top: 5px;
//         }



//         .table {
//             border-collapse: collapse;
//             width: 100%;
//           }
          
//           .table,
//           .table th,
//           .table td {
//             border: 1px solid #ccc;
//           }
          
//           .table th,
//           .table td {
//             padding: 0.7rem;
//           }
          
//           .table th {
//             position: relative;
//              cursor: grab;
//                 user-select: none;
//                 background-color: #5F9EA0;
//           }   
//              .table th:active {
//                 cursor: grabbing;
                

//              }
          
//           .resizer {
//             position: absolute;
//             top: 0;
//             right: 0;
//             width: 5px;
//             cursor: col-resize;
//             user-select: none;
//           }
          
//           .resizer:hover,
//           .resizing {
//             border-right: 2px solid blue;
//           }
          
//           .dragging {
//             background-color: #f0f0f0;
//           }
        
        
        
//         `}
//     </style>
//     <Navbarcontanct/>

//     <h2 style={{marginTop:"30px"
// ,fontWeight:'bolder'}}> | Approvels</h2>
//    <br></br>

  
//   {/* /* Some code is probably from the Codepen CPC template. * / */}
//   <div className="dashboard">
   
    
//     <div className="schedule-table"
//     style={{marginTop:"50px"}}
//     >
//          <h5 style={{textAlign:"center",color:"#D2691E"}}> <b>Dean / Principal of University</b></h5>
//       {/* <h2>Weekly Schedule</h2> */}
//       <div className="container mt-3">
//     <table id="resizeMe" className="resizable-table table table-hover">
//       <thead>
//         <tr id="header-row">
//           <th className="draggable-table" data-column={0}>
//           S. No.
//           </th>
//           <th className="draggable-table" data-column={1}>
//           Institute
//           </th>
//           <th className="draggable-table" data-column={2}>
//           Dean/Principal
//           </th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>School of Engineering</td>
//           <td>Dr. Nilesh Diwakar</td>
//         </tr>
//         <tr>
//           <td>2</td>
//           <td>Faculty of Pharmacy</td>
//           <td>Dr. Neelesh Chaubey</td>
//         </tr>
//         <tr>
//           <td>3</td>
//           <td>School of Management Studies</td>
//           <td>Dr. Rajesh Sharma</td>
//         </tr>
//         <tr>
//           <td>4</td>
//           <td>School of Computer Application</td>
//           <td>Dr. Jitendra Sheetlani</td>
//         </tr>
//         <tr>
//           <td>5</td>
//           <td>School of Hotel Management</td>
//           <td>Dr. S. Shahab Ahmed</td>
//         </tr>
//         <tr>
//           <td>6</td>
//           <td>Faculty of Education</td>
//           <td>Dr. Meenakshi Pathak</td>
//         </tr>
//         <tr>
//           <td>7</td>
//           <td>School of LAW</td>
//           <td>Dr. Bharat Pal</td>
//         </tr>
//         <tr>
//           <td>8</td>
//           <td>School of Homeopathy</td>
//           <td>Dr. Umesh Pandey</td>
//         </tr>
//         <tr>
//           <td>9</td>
//           <td>Polytechnic (Engineering)</td>
//           <td>Mrs. Priyanka Jhawar</td>
//         </tr>
//         <tr>
//           <td>10</td>
//           <td>School of Paramedical</td>
//           <td>Dr. Sunil Man</td>
//         </tr>
//         <tr>
//           <td>11</td>
//           <td>School of Design</td>
//           <td>Ar. G.Venkatesh</td>
//         </tr>
      
//       </tbody>
//     </table>
//   </div>
//     </div>
  
//   </div>
//   <FooterContanct />
// </>

//   )
// }

// export default Approvals

import React from 'react'
import Navbarcontanct from '../../Navbarcontanct'
import FooterContanct from '../../FooterContanct'

function Approvals() {
  return (
    <>
    <style>
      {`
      
      /* Some code is probably from the Codepen CPC template. */

/* inspired  https://webflow.com/made-in-webflow/website/jb10x#*/
.dashboard {
	width: 100%;
	max-width: 600px;
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
	padding: 9px;
	text-align: left;
}
h2 {
	padding-left: 5%;
	padding-right: 5%;
}
th, td {
border: none;
border-bottom: 1px solid #d7bfdb;
	padding-bottom: 3px;
	padding-top: 5px;
}
  `}
    </style>
    <Navbarcontanct />

    <h2 style={{marginTop:"30px",fontWeight:'bolder'}}> | Approvels</h2> <br/><br/>
    <br></br>
  {/* /* Some code is probably from the Codepen CPC template. * / */}
  <div className="dashboard">
    <div className="profile">
      {/* <h4 ><b>Good Morning Champ!</b></h4><br/> */}
      <p style={{color:"black"}}>Own recommendations of Madhya Pradesh Niji Vishwavidyalaya Niyamak Aayog, the State Legislature of Madhya Pradesh has accorded approval to Sri Satya Sai University of Technology & Medical Sciences (SSSUTMS) as State Private University with main campus at Sehore from Academic session 2014-15 vide Gazette Notification of State Government of M.P.,Act no. 06 No.80 dated 12th February  2014 The Madhya Pradesh Niji Vishwavidyalaya (Sthapana & Sanchalan) Sansodhan Adhiniyam 2014.</p> <br/>
    </div>
    {/* <div className="schedule-table">
      <h2>Weekly Schedule</h2>
      <table>
        <tbody>
          <tr>
            <th>Day</th>
            <th>Scheduled Exercise</th>
            <th>Time</th>
          </tr>
          <tr>
            <td>Monday</td>
            <td>Running</td>
            <td>6:00 AM</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>Swimming</td>
            <td>7:00 AM</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>Cycling</td>
            <td>6:30 AM</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>Yoga</td>
            <td>6:00 AM</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>Weight Training</td>
            <td>8:00 AM</td>
          </tr>
        </tbody>
      </table>
    </div> */}
    {/* <div className="exercise-table">
      <h2>Last 5 Exercises</h2>
      <table>
        <tbody>
          <tr>
            <th>Exercise</th>
            <th>Duration</th>
          </tr>
          <tr>
            <td>Running</td>
            <td>30 min</td>
          </tr>
          <tr>
            <td>Swimming</td>
            <td>45 min</td>
          </tr>
          <tr>
            <td>Cycling</td>
            <td>60 min</td>
          </tr>
          <tr>
            <td>Yoga</td>
            <td>40 min</td>
          </tr>
          <tr>
            <td>Weight Training</td>
            <td>50 min</td>
          </tr>
        </tbody>
      </table>
    </div> */}
    {/* <div className="calories">
      <h2>Active Calories</h2>
      <div>
        <strong>Today:</strong> 500
      </div>
      <div>
        <strong>This Week:</strong> 3500
      </div>
      <div>
        <strong>This Month:</strong> 14000
      </div>
    </div> */}
    <div className="personal-bests">
      {/* <h4 style={{textDecoration:"under"}} ><b>Personal Bests</b></h4><br/> */}
      <ul>
        <li>MP PRIVATE UNIVERSITIES REGULATORY COMMISSION</li>
        <li>MP PRIVATE UNIVERSITIES REGULATORY COMMISSION</li>
        <li>MP PARAMEDICAL COUNCIL</li>
        <li>UGC</li>
        <li>AIUN</li>
      </ul>
    </div>
    <div className="challenges">
    <h5> <b style={{textDecoration:"underline",color:"#191970"}}>AICTE :-</b></h5>
      <ul>
        <li>School of Design  </li>
        <li>School of Engineering</li>
        <li>School of Computer Application</li>
        <li>School of Hotel Management</li>
        <li>School of Management Studies</li>
        <li>Polytechnic (Engineering) </li>
      </ul>
    </div>
    <div className="activity-feed">
      <h5> <b style={{textDecoration:"underline",color:"#191970"}}>NCTE :-</b></h5>
      <ul>
        <li>Faculty of Education -- (School of Education)</li>
        <li>Faculty of Education-- (School Teachers Education)</li>
        <li>Faculty of Education-- (School of Physical Education)</li>
        <li>Faculty of Education</li>
      </ul>
    </div>
    <div className="activity-feed">
      <h5> <b style={{textDecoration:"underline",color:"#191970"}}>PCI :-</b></h5>
      <ul>
        <li>Faculty of Pharmacy (College of Pharmacy)</li>
        <li>Faculty of Pharmacy(School of Pharmacy)</li>
        <li>Faculty of Pharmacy (Polytechnic (Pharmacy))</li>
      </ul>
    </div>
    <div className="activity-feed">
      <h5> <b style={{textDecoration:"underline",color:"#191970"}}>COA :-</b></h5>
      <ul>
        <li>School of Design</li>
      </ul>
    </div>

    <div className="activity-feed">
      <h5> <b style={{textDecoration:"underline",color:"#191970"}}>BAR COUNCIL OF INDIA :-</b></h5>
      <ul>
        <li>School of Law</li>
      </ul>
    </div>

    <div className="activity-feed">
    <h5> <b style={{textDecoration:"underline",color:"#191970"}}>AYUSH:-</b></h5>
      <ul>
        <li>School of Homoeopathy</li>
        <li>School of Ayurveda & Siddha Studies</li>
      </ul>
    </div>

    <div className="activity-feed">
      <h5> <b style={{textDecoration:"underline",color:"#191970"}}>MP NURSES REGISTRATION COUNCIL :-</b></h5>
      <ul>
        <li>School of Nursing 2019-20</li>
        <li>School of Nursing 2020-21</li>
        <li>School of Nursing  2021-22</li>
      </ul>
    </div>
  </div>
  <FooterContanct />
</>

  )
}

export default Approvals



