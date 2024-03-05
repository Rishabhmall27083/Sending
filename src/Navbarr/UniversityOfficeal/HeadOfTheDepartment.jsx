import React from 'react'
import Navbarcontanct from '../../Navbarcontanct'
import FooterContanct from '../../FooterContanct'

function HeadOfTheDepartment() {
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
,fontWeight:'bolder'}}> | Head Of The Department</h2>
   <br></br>

  
  {/* /* Some code is probably from the Codepen CPC template. * / */}
  <div className="dashboard">
   
    
    <div className="schedule-table"
    style={{marginTop:"50px"}}
    >
      {/* <h2>Weekly Schedule</h2> */}
      <div className="container mt-3">
    <table id="resizeMe" className="resizable-table table table-hover">
      <thead>
        <tr id="header-row">
          <th className="draggable-table" data-column={0}>
          S.No.
          </th>
          <th className="draggable-table" data-column={1}>
          DEPARTMENT
          </th>
          <th className="draggable-table" data-column={2}>
          HEAD
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Aeronautical Engineering</td>
          <td>Dr. Prashant Singh</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Applied Sciences</td>
          <td>Dr. Geeta Khoobchandaniy</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Chemical Engineering</td>
          <td>Dr. Anuradha Devi</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Civil Engineering</td>
          <td>Dr. Ajay Swaroop</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Computer Science Engineering</td>
          <td>Dr. Anil Kumar</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Electronics & Communication Engineering</td>
          <td>Dr. Vijay Prakash Singh</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Electronics & Electrical Engineering</td>
          <td>Dr. Prabodh Khampariya</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Master of Computer Application</td>
          <td>Dr. Jitendra Sheetlani</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Mechanical Engineering</td>
          <td>Dr. Dhananjay Yadav</td>
        </tr>
        <tr>
          <td>10</td>
          <td>School of Pharmacy</td>
          <td>Dr. Hemant K. Sharma</td>
        </tr>
        <tr>
          <td>11</td>
          <td>College of Pharmacy</td>
          <td>Dr. C.K. Tyagi</td>
        </tr>
        <tr>
          <td>12</td>
          <td>Education</td>
          <td>Dr. Vandna Bhatnagar</td>
        </tr>
        <tr>
          <td>13</td>
          <td>Teachers Education</td>
          <td>Dr. Neelam Khare</td>
        </tr>
        <tr>
          <td>14</td>
          <td>Management</td>
          <td>Dr. Indrajeet Singh</td>
        </tr>
        <tr>
          <td>15</td>
          <td>Hotel & Catering management</td>
          <td>Dr. S. Shahab Ahmadi</td>
        </tr>
        <tr>
          <td>16</td>
          <td>Biotechnology</td>
          <td>Dr. Neelam Tripathi</td>
        </tr>
        <tr>
          <td>17</td>
          <td>Botany</td>
          <td>Dr. Bharat Pal</td>
        </tr>
        <tr>
          <td>18</td>
          <td>Chemistry</td>
          <td>Dr. Pushpendra Sharma</td>
        </tr>
        <tr>
          <td>19</td>
          <td>Math</td>
          <td>Dr. Geeta Khoobchadani</td>
        </tr>
        <tr>
          <td>20</td>
          <td>Commerce</td>
          <td>Dr. Gajraj Singh</td>
        </tr>
        <tr>
          <td>21</td>
          <td>Economics</td>
          <td>Dr. Kanchan Shrivastava</td>
        </tr>
        <tr>
          <td>22</td>
          <td>English</td>
          <td>Ms. Babina</td>
        </tr>

        <tr>
          <td>23</td>
          <td>Hindi</td>
          <td>Dr. Tabassum Khan</td>
        </tr>
        <tr>
          <td>24</td>
          <td>Physical Education</td>
          <td>Dr. Meenakshi Pathak</td>
        </tr>
        <tr>
          <td>25</td>
          <td>Polytechnic (Pharmacy)</td>
          <td>Mr. Harish Pandey</td>
        </tr>
        <tr>
          <td>26</td>
          <td>Humanities & Social Science</td>
          <td>Dr. Vandana shukla</td>
        </tr>
        <tr>
          <td>27</td>
          <td>LAW</td>
          <td>Dr. Bharat Pal</td>
        </tr>
        <tr>
          <td>28</td>
          <td>Paramedical</td>
          <td>Dr. Subuhee Kamal</td>
        </tr>
        <tr>
          <td>29</td>
          <td>Polytechnic (Engineering)</td>
          <td>Ms. Priyanka Jhawar</td>
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

export default HeadOfTheDepartment



