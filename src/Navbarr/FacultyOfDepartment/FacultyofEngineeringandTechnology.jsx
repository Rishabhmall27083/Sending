// import React from 'react'
// import Navbarcontanct from '../../Navbarcontanct'
// import FooterContanct from '../../FooterContanct'

// function FacultyofEngineeringandTechnology() {
//   return (
//     <>
//     <style>
//         {`
//         body {
//             font-family: Arial, sans-serif;
//             box-sizing: border-box;
//           }
          
//           .tabulka-container {
//             width: 100%;
//             max-width: 800px;
//             margin: 0 auto;
//             overflow-x: auto;
//           }
          
//           table {
//             width: 100%;
//             border-collapse: collapse;
//           }
          
//           caption {
//             font-size: 1.5em;
//             margin-bottom: 10px;
//             font-weight: bold;
//             text-align: center;
//           }
          
//           th,
//           td {
//             border: 1px solid black;
//             padding: 8px;
//             text-align: center;
//           }
          
//           th {
//             background-color: #f2f2f2;
//           }
          
//           @media (max-width: 320px) {
//             body {
//               font-size: 14px;
//             }
//           }
//           h2 {
//             display: block;
//             background: #b2dbb3;
//           clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
          
//           }
//           h2, table {
//             padding: 10px;
//             text-align: left;
//           }
//           h2 {
//             padding-left: 8%;
//             padding-right: 5%;
//           }
//         `}
//     </style>
//     <Navbarcontanct />  <br/> <br/>
//     <h2 style={{marginTop:"30px",fontWeight:'bolder'}}> | Faculty of Engineering and Technology</h2> <br/><br/>
//     <h5 style={{textAlign:"center",textDecoration:"underline",color:"#800080"}}><b>INSTITUTE NAME: SCHOOL OF ENGINEERING</b></h5><br/>
//     <div className="tabulka-container" lang="sk">
//     <table itemScope="" itemType="http://schema.org/Product">
//     {/* Popis tabuľky */}
   
//     {/* Nadradené a podradené záhlavie */}
//     <thead>
//       <tr>
//         <th id="produkt" rowSpan={2} scope="colgroup">
//        <b>Course Name</b> 
//         </th>
//         <th id="region" colSpan={2} scope="colgroup">
//         <b> Branch</b>
//         </th>
//         <th id="predaj" rowSpan={2} scope="col">
//         <b>Duration </b>
//         </th>
//       </tr>
//       {/* <tr>
//         <th headers="region" id="europa" scope="col">
//           Európa
//         </th>
//         <th headers="region" id="azia" scope="col">
//           Ázia
//         </th>
//       </tr> */}
//     </thead>
//     {/* Riadky s dátami */}
//     <tbody>
//       <tr itemProp="offers" itemScope="" itemType="http://schema.org/Offer">
//         <th scope="row" id="smartfony" headers="produkt" itemProp="name">
//           Smartfóny
//         </th>
//         <td headers="region europa">
//           <span itemProp="price" content={5000}>
//             5000€
//           </span>
//           <meta itemProp="priceCurrency" content="EUR" />
//         </td>
//         <td headers="region azia">
//           <span itemProp="price" content={7000}>
//             7000€
//           </span>
//           <meta itemProp="priceCurrency" content="EUR" />
//         </td>
//         <td headers="predaj">
//           <span itemProp="price" content={12000}>
//             12000€
//           </span>
//           <meta itemProp="priceCurrency" content="EUR" />
//         </td>
//       </tr>
//       <tr itemProp="offers" itemScope="" itemType="http://schema.org/Offer">
//         <th scope="row" id="notebooky" headers="produkt" itemProp="name">
//           Notebooky
//         </th>
//         <td headers="region europa">
//           <span itemProp="price" content={3000}>
//             3000€
//           </span>
//           <meta itemProp="priceCurrency" content="EUR" />
//         </td>
//         <td headers="region azia">
//           <span itemProp="price" content={9000}>
//             9000€
//           </span>
//           <meta itemProp="priceCurrency" content="EUR" />
//         </td>
//         <td headers="predaj">
//           <span itemProp="price" content={12000}>
//             12000€
//           </span>
//           <meta itemProp="priceCurrency" content="EUR" />
//         </td>
//       </tr>
//     </tbody>
//   </table>
// </div>
// <FooterContanct />
// </>
//   )
// }

// export default FacultyofEngineeringandTechnology


import React from 'react';
import Navbarcontanct from '../../Navbarcontanct';
import FooterContanct from '../../FooterContanct';

function FacultyofEngineeringandTechnology() {
  return (
    <>
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            box-sizing: border-box;
          }

          .tabulka-container {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            overflow-x: auto;
          }

          table {
            width: 100%;
            border-collapse: collapse;
          }

          caption {
            font-size: 1.5em;
            margin-bottom: 10px;
            font-weight: bold;
            text-align: center;
          }

          th,
          td {
            border: 1px solid black;
            padding: 8px;
            text-align: center;
          }

          th {
            background-color: #f2f2f2;
          }

          @media (max-width: 320px) {
            body {
              font-size: 14px;
            }
          }
          h2 {
            display: block;
            background: #b2dbb3;
            clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
          }
          h2,
          table {
            padding: 10px;
            text-align: left;
          }
          h2 {
            padding-left: 8%;
            padding-right: 5%;
          }
        `}
      </style>
      <Navbarcontanct /> <br />
      <h2 style={{ marginTop: "30px", fontWeight: 'bolder' }}> | Faculty of Engineering and Technology</h2> <br /><br />
      <h5 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>INSTITUTE NAME: SCHOOL OF ENGINEERING</b></h5><br />
      <div className="tabulka-container" lang="sk">
        <table itemScope="" itemType="http://schema.org/Product">
          {/* Popis tabuľky */}
          {/* Nadradené a podradené záhlavie */}
          <thead>
            <tr>
              <th id="produkt" scope="col" style={{backgroundColor:"#5F9EA0"}}>
                <b>Course Name</b>
              </th>
              <th id="branch" scope="col" style={{backgroundColor:"#5F9EA0"}}>
                <b>Branch</b>
              </th>
              <th id="duration" scope="col" style={{backgroundColor:"#5F9EA0"}}>
                <b>Duration</b>
              </th>
            </tr>
          </thead>
          {/* Riadky s dátami */}
          <tbody>
            <tr itemProp="offers" itemScope="" itemType="http://schema.org/Offer">
              <th scope="row" id="smartfony" itemProp="name">
              Bachelor of Engineering
              </th>
              <td headers="branch">
                <span itemProp="price" content={5000}>
                Aeronautical Engineering
                </span><br/>
                <span itemProp="price" content={5000}>
                Chemical Engineering
                </span><br/>
                <span itemProp="price" content={5000}>
                Civil Engineering
                </span><br/>
                <span itemProp="price" content={5000}>
                Computer Science and Engineering
                </span><br/>
                <span itemProp="price" content={5000}>
                Electrical and Electronics Engineering
                </span><br/>
                <span itemProp="price" content={5000}>
                Electrical Engineering
                </span><br/>
                <span itemProp="price" content={5000}>
                Electronic & Communication Engineering
                </span><br/>
                <span itemProp="price" content={5000}>
                Electronics & Instrumentation Engineering
                </span><br/>
                <span itemProp="price" content={5000}>
                Information Technology
                </span><br/>
                <span itemProp="price" content={5000}>
                Mechanical Engineering
                </span><br/>
                <span itemProp="price" content={5000}>
                Mining Engineering 
                </span><br/>
                <span itemProp="price" content={5000}>
                Computer Science and Engineering
                </span>
                
                <meta itemProp="priceCurrency" content="EUR" />
              
              </td>
            
              <th scope="row" id="smartfony" itemProp="name">
              4 Yrs.
              </th>
            </tr>
            

            <tr itemProp="offers" itemScope="" itemType="http://schema.org/Offer">
              <th scope="row" id="smartfony" itemProp="name">
              Master of Technology
              </th>
              <td headers="branch">
                <span itemProp="price" content={5000}>
                Computer Science and Engineering
                </span><br/>
                <span itemProp="price" content={5000}>
                Computer Technology & Applications
                </span><br/>
                <span itemProp="price" content={5000}>
                Digital Communication
                </span><br/>
                <span itemProp="price" content={5000}>
                Electrical Power System
                </span><br/>
                <span itemProp="price" content={5000}>
                Industrial Design
                </span><br/>
                <span itemProp="price" content={5000}>
                Information Technology
                </span><br/>
                <span itemProp="price" content={5000}>
                Power Electronics
                </span><br/>
                <span itemProp="price" content={5000}>
                Software Engineering
                </span><br/>
                <span itemProp="price" content={5000}>
                Structural Design
                </span><br/>
                <span itemProp="price" content={5000}>
                Mechanical Engineering
                </span><br/>
                <span itemProp="price" content={5000}>
                Thermal Engineering
                </span><br/>
                <span itemProp="price" content={5000}>
                VLSI
                </span>
                
                <meta itemProp="priceCurrency" content="EUR" />
              
              </td>
              <th scope="row" id="smartfony" itemProp="name">
              2 Yrs.
              </th>
            </tr>
           
          </tbody>
        </table>
      </div>
    
<br/><br/>

    {/* ============================================================= */}


    <h5 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b> INSTITUTE NAME:  POLYTECHNIC ENGINEERING</b></h5><br />
      <div className="tabulka-container" lang="sk">
        <table itemScope="" itemType="http://schema.org/Product">
          {/* Popis tabuľky */}
          {/* Nadradené a podradené záhlavie */}
          <thead>
            <tr>
              <th id="produkt" scope="col" style={{backgroundColor:"#5F9EA0"}}>
                <b>Institute Name</b>
              </th>
              <th id="branch" scope="col" style={{backgroundColor:"#5F9EA0"}}>
                <b>Branch</b>
              </th>
              <th id="duration" scope="col" style={{backgroundColor:"#5F9EA0"}}>
                <b>Duration</b>
              </th>
            </tr>
          </thead>
          {/* Riadky s dátami */}
          <tbody>
            <tr itemProp="offers" itemScope="" itemType="http://schema.org/Offer">
              <th scope="row" id="smartfony" itemProp="name">
              Diploma Engineering
              </th>
              <td headers="branch">
                <span itemProp="price" content={5000}>
                Computer Science & Engineering
                </span><br/>
                <span itemProp="price" content={5000}>
                Electrical Engineering
                </span><br/>
                <span itemProp="price" content={5000}>
                Civil Engineering
                </span><br/>
                <span itemProp="price" content={5000}>
                Mechanical Engineering
                </span><br/>
                <span itemProp="price" content={5000}>
                Chemical Engineering
                </span><br/>
                <meta itemProp="priceCurrency" content="EUR" />
              
              </td>
            
              <th scope="row" id="smartfony" itemProp="name">
              3 Yrs.
              </th>
            </tr>  

           
          </tbody>
        </table>
      </div>
    
      <FooterContanct />
    </>
  )
}

export default FacultyofEngineeringandTechnology;
