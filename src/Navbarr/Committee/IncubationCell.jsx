// import React from 'react';
// import FooterContanct from '../../FooterContanct';
// import Navbarcontanct from '../../Navbarcontanct';

// function AntiRagging() {
//   return (
//     <>
//       <style>{`
//         aside {
//           width: 25%;
//           float: left;
//           height: 300px;
//           margin: 10px 0px 10px 0px;
//         }

//         nav ul {
//           list-style-type: none;
//           font-size: 2vw;
//         }

//         .content p {
//           padding: 5px 10px;
//         }

//         @media screen and (max-width: 768px) {
//           aside {
//             width: 100%;
//             height: auto;
//             margin: 10px 0px 0px 0px;
//             text-align: center;
//           }

//           nav li {
//             display: block;
//             font-size: 4vw;
//             margin-bottom: 5px;
//           }

//           .content {
//             margin: 10px 0px 10px 0px;
//             width: 100%;
//           }
//         }

//         h2 {
//           display: block;
//           background: #b2dbb3;
//           clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
//         }
        
//         h2, table {
//           padding: 10px;
//           text-align: left;
//         }
        
//         h2 {
//           padding-left: 8%;
//           padding-right: 5%;
//         }

//         .dashboard {
//           width: 100%;
//           max-width: 800px;
//           margin: 0 auto;
//         }

//         table, th, td {
//           border: 4px solid #ccc;
//         }
        
//         th, td {
//           padding: 0.7rem;
//         }

//         .resizer {
//           position: absolute;
//           top: 0;
//           right: 0;
//           width: 5px;
//           cursor: col-resize;
//           user-select: none;
//         }
        
//         .resizer:hover,
//         .resizing {
//           border-right: 2px solid blue;
//         }
        
//         .dragging {
//           background-color: #f0f0f0;
//         }
//       `}</style>

//       <Navbarcontanct />
//       <h2 style={{marginTop: "30px", fontWeight: 'bolder'}}> | Anti Ragging</h2><br/>

//       <div className="content">
//         <p style={{ color: "black" }}>
//           <h6 style={{color:"black" ,marginTop:"35px",marginLeft:"40px"}}>
//             The Administration believes that Ragging is a social evil and has adopted “Zero Tolerance” regarding the same. The campus has one central anti-ragging committee and each constituent college has independent committees. These committees are headed by Head of Institutions, male and female faculty members and student representatives from each class. Regular meetings are called for monitoring. Complaint boxes are available in all Colleges, which are maintained regularly. Similar anti- ragging committees are functioning in Hostels. Senior and Junior Students are also counselled time to time regarding evils of ragging. 
//             Surprise checks are conducted by Anti- ragging committees. Multi-colour flexes in Hindi are displayed in Campus, at prominent places for creating awareness regarding evils of Ragging. <br/><br/>

//             During admissions all admitted regular students and their parents/ guardians have to submit affidavit subscribed by Honourable Supreme Court of India. 
//             <br/><br/>

//             <div className="dashboard">
//               <div className="schedule-table" style={{marginTop:"50px"}}>
//                 {/* <h5 style={{textAlign:"center",color:"#D2691E"}}><b>Dean / Principal of University</b></h5> */}
//                 <div className="container mt-3">
//                   <table id="resizeMe" className="resizable-table table table-hover">
//                     <thead >
//                       <tr id="header-row" >
//                         <th style={{backgroundColor:"#5F9EA0"}} className="draggable-table" data-column={0}>S. No.</th>
//                         <th style={{backgroundColor:"#5F9EA0"}} className="draggable-table" data-column={1}>ANTI-RAGGING COMMITTEE</th>
//                         <th style={{backgroundColor:"#5F9EA0"}} className="draggable-table" data-column={2}>DESIGNATION</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr>
//                         <td>1</td>
//                         <td>Dr. Anil Kumar Dubey</td>
//                         <td>Dean & Chairman</td>
//                       </tr>
//                       <tr>
//                         <td>2</td>
//                         <td>Dr. Meenakshi Pathak</td>
//                         <td>Dean & Member</td>
//                       </tr>
//                       <tr>
//                         <td>3</td>
//                         <td>Dr. Shahab Ahmad</td>
//                         <td>Professor & Member</td>
//                       </tr>
//                       <tr>
//                         <td>4</td>
//                         <td>Mr. Bhanvar Singh Sisodiya</td>
//                         <td>Member representing Parents</td>
//                       </tr>
//                       <tr>
//                         <td>5</td>
//                         <td>Mr Divyansh Vyas</td>
//                         <td>Memmber representing Junior Student</td>
//                       </tr>
//                       <tr>
//                         <td>6</td>
//                         <td>Mr Subhrajyoti Mitr</td>
//                         <td>Memmber representing PG Student</td>
//                       </tr>
//                       <tr>
//                         <td>7</td>
//                         <td>Mr. Ashish Mishra</td>
//                         <td>Member (Local Media Person)</td>
//                       </tr>
//                       <tr>
//                         <td>8</td>
//                         <td>Town Inspector,Sehore (or his nominee)</td>
//                         <td>Member</td>
//                       </tr>
//                       <tr>
//                         <td>9</td>
//                         <td>Mr. Ankit Joshi</td>
//                         <td>Asst. Prof Student Counselor & Member</td>
//                       </tr>
//                       <tr>
//                         <td>10</td>
//                         <td>Ms. Nuzhat Parveen</td>
//                         <td>Non-Teaching Staff & Member</td>
//                       </tr>
//                       <tr>
//                         <td>11</td>
//                         <td>Mr. C.S. Verma</td>
//                         <td>Non-Teaching Staff & Memberh</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div> 

//             <div className="dashboard">
//               <div className="schedule-table" style={{marginTop:"50px"}}>
//                 <h5 style={{textAlign:"center",color:"#800080",textDecoration:"underline"}}><b>COUNSELOR</b></h5>
//                 <div className="container mt-3">
//                   <table id="resizeMe" className="resizable-table table table-hover">
                   
//                     {/* <thead >
//                       <tr id="header-row" >
//                         <th style={{backgroundColor:"#5F9EA0"}} className="draggable-table" data-column={0}>S. No.</th>
//                         <th style={{backgroundColor:"#5F9EA0"}} className="draggable-table" data-column={1}>ANTI-RAGGING COMMITTEE</th>
//                         <th style={{backgroundColor:"#5F9EA0"}} className="draggable-table" data-column={2}>DESIGNATION</th>
//                       </tr>
//                     </thead> */}
                    
//                     <tbody>
                      
//                       <tr>
//                         <td>1</td>
//                         <td>Dr. Sanjay Rathore (CE)</td>
//                       </tr>
                    
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//             <div className="dashboard">
//               <div className="schedule-table" style={{marginTop:"50px"}}>
//                 <h5 style={{textAlign:"center",color:"#800080",textDecoration:"underline"}}><b>ANTI-RAGGING SQUAD </b></h5>
//                 <div className="container mt-3">
//                   <table id="resizeMe" className="resizable-table table table-hover">
                   
//                     {/* <thead >
//                       <tr id="header-row" >
//                         <th style={{backgroundColor:"#5F9EA0"}} className="draggable-table" data-column={0}>S. No.</th>
//                         <th style={{backgroundColor:"#5F9EA0"}} className="draggable-table" data-column={1}>ANTI-RAGGING COMMITTEE</th>
//                         <th style={{backgroundColor:"#5F9EA0"}} className="draggable-table" data-column={2}>DESIGNATION</th>
//                       </tr>
//                     </thead> */}
                    
//                     <tbody>
                      
//                       <tr>
//                         <td>1</td>
//                         <td>Dr. Neelesh Choubey</td>
//                         <td>Dean & Chairman</td>
//                       </tr>
//                       <tr>
//                         <td>2</td>
//                         <td>Dr. C K Tyagi</td>
//                         <td>Professor & Member</td>
//                       </tr>
//                       <tr>
//                         <td>3</td>
//                         <td>Dr. Rajesh Sharma</td>
//                         <td>Professor & Member</td>
//                       </tr>
//                       <tr>
//                         <td>4</td>
//                         <td>Dr. Dhiraj Shinde</td>
//                         <td>Professor & Member</td>
//                       </tr>
//                       <tr>
//                         <td>5</td>
//                         <td>Dr. Shahab Ahmad</td>
//                         <td>Professor & Member</td>
//                       </tr>
//                       <tr>
//                         <td>6</td>
//                         <td>Dr. Rajesh Meena</td>
//                         <td>Asstt Professor & Member</td>
//                       </tr>
//                       <tr>
//                         <td>7</td>
//                         <td>Ms Priyanka Jhwara</td>
//                         <td>Asstt Professor & Member</td>
//                       </tr>
//                       <tr>
//                         <td>8</td>
//                         <td>Mr. Pradeep Maheshwari</td>
//                         <td>Asstt Professor & Member</td>
//                       </tr>
//                       <tr>
//                         <td>9</td>
//                         <td>Mr Kamlesh vermai</td>
//                         <td>Asstt Professor & Member</td>
//                       </tr>
//                       <tr>
//                         <td>10</td>
//                         <td>Dr. Prabodh Khampariy</td>
//                         <td>Asstt Professor & Member</td>
//                       </tr>
//                       <tr>
//                         <td>11</td>
//                         <td>Dr Susen Thomas, Abhilasha Pathak</td>
//                         <td>Asstt Professor & Member</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>

            
          
//           </h6>
//         </p>

        
//       </div>
//       <FooterContanct/>
//     </>
//   );
// }

// export default AntiRagging;



import React from 'react';
import FooterContanct from '../../FooterContanct';
import Navbarcontanct from '../../Navbarcontanct';
import { textDecoration } from '@chakra-ui/react';

function IncubationCell() {
  return (
    <>
      <style>{`
        aside {
          width: 25%;
          float: left;
          height: 300px;
          margin: 10px 0px 10px 0px;
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
            width: 100%;
            height: auto;
            margin: 10px 0px 0px 0px;
            text-align: center;
          }

          nav li {
            display: block;
            font-size: 4vw;
            margin-bottom: 5px;
          }

          .content {
            margin: 10px 0px 10px 0px;
            width: 100%;
          }
        }

        
        .dashboard {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
        }

        table, th, td {
          border: 4px solid #ccc;
          border-collapse: collapse;
        }
        
        th, td {
          padding: 0.7rem;
          text-align: left;
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
      <h2 style={{marginTop:"30px",fontWeight:'bolder'}}> | Incubation Cell</h2><br/><br/>
      <h5 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>Incubation Cell</b></h5>
      <div className="content">
      <p>
          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"25%"}}>
          
          <b style={{textDecoration:"underline"}}>Objectives of the cell</b>
           <br/><br/>
          <h6>To have a center for the development of products and innovations which will be working efficiently even after Institute timings.<br/><br/>

To encourage the students to target National and International Competitions and win such events.<br/><br/>

To have seminars from renowned personalities frequently without disturbing the institute infrastructure and curricular activities. <br/><br/>

To develop solutions for industrial problems so that the Institute Industry interaction strengthens which would create more Placement Opportunities. <br/><br/>

To attract and encourage more and more student exchange programmes through MoUs with reputed Universities.</h6>
          
     </h5>
        </p> <br/><br/>
        <h5 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>Committee Members of the cell</b></h5> 
        <div className="dashboard">
          <div className="schedule-table" style={{marginTop:"10px"}}>
            {/* <h5 style={{textAlign:"center",color:"#D2691E"}}><b>Anti-Ragging Committee</b></h5> */}
            <div className="container mt-3">
              <table className="resizable-table table table-hover">
                <thead >
                  <tr>
                    <th style={{backgroundColor:"#5F9EA0"}}> S. No.</th>
                    <th style={{backgroundColor:"#5F9EA0"}} >Name</th>
                    <th style={{backgroundColor:"#5F9EA0"}}>Designation</th>
                  </tr>
                </thead>
                <tbody>
                      <tr>
                        <td>1</td>
                        <td>Dr. Mukesh Tiwari</td>
                        <td>Chairperson</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Dr. Minakshi Pathak</td>
                        <td>Member</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Dr. Neelesh Chaubey</td>
                        <td>Member</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Dr. Indrajeet Singh Yadav</td>
                        <td>Member</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Dr. Pushpendra Sharma</td>
                        <td>Member</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Dr. Kanchan Shrivastav</td>
                        <td>Member</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Dr. Syed Shahab Ahmed</td>
                        <td>Member</td>
                      </tr>
                    
                    </tbody>
              </table>
            </div>
          </div>
        </div>
</div>
      <FooterContanct/>
    </>
  );
}

export default IncubationCell;


