import React from 'react'
import Navbarcontanct from '../../Navbarcontanct'
import FooterContanct from '../../FooterContanct'

function FinanceCommittee() {
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
,fontWeight:'bolder'}}> | Finance Committee</h2>
   <br></br>

  
  {/* /* Some code is probably from the Codepen CPC template. * / */}
  <div className="dashboard">
   
    
    <div className="schedule-table"
    style={{marginTop:"50px"}}
    >
         <h5 style={{textAlign:"center",color:"#D2691E"}}> <b>FINANCE COMMITTEE</b></h5>
      {/* <h2>Weekly Schedule</h2> */}
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
          <td>Mr. Sidharth Kapoor</td>
          <td>Chancellor</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Dr. Mukesh Tiwari</td>
          <td>Vice-Chancellor</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Dr. G.R. Selokar</td>
          <td>Registrar</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Mr. Vimal Nath</td>
          <td>Chief Finance & Account Officer</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Mr. Vijay Sharda</td>
          <td>Member of Governing Body</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Ms. Deepika Pathak</td>
          <td>Nominated By Sponsoring Body</td>
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

export default FinanceCommittee



