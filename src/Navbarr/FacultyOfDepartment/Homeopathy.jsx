import React from 'react';
import Navbarcontanct from '../../Navbarcontanct';
import FooterContanct from '../../FooterContanct';

function Homeopathy() {
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
      <h2 style={{ marginTop: "30px", fontWeight: 'bolder' }}> | Homeopathy</h2> <br />
      <h3 style={{textAlign:"center", textDecoration:"underline"}}><b>/ Faculty of Homeopathy /</b></h3> <br/>
      <h5 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>INSTITUTE NAME : School of Homeopathy </b></h5><br />
      <div className="tabulka-container" lang="sk">
        <table itemScope="" itemType="http://schema.org/Product">
          {/* Popis tabuľky */}
          {/* Nadradené a podradené záhlavie */}
          <thead>
            <tr>
              <th id="produkt" scope="col" style={{backgroundColor:"#5F9EA0"}}>
                <b>Course</b>
              </th>
              <th id="branch" scope="col" style={{backgroundColor:"#5F9EA0"}}>
                <b>Branch</b>
              </th>
              <th id="duration" scope="col" style={{backgroundColor:"#5F9EA0"}}>
                <b>Duration in Year</b>
              </th>
            </tr>
          </thead>
          {/* Riadky s dátami */}
          <tbody>
            <tr itemProp="offers" itemScope="" itemType="http://schema.org/Offer">
              <th scope="row" id="smartfony" itemProp="name">
              BHMS
              </th>
              <td headers="branch">
                <span itemProp="price" content={5000}>
                Homeopathy
                </span>
             <meta itemProp="priceCurrency" content="EUR" />
               </td>
            
              <th scope="row" id="smartfony" itemProp="name">
              5.5 Year
              </th>
            </tr>
       </tbody>
        </table>
      </div>
    
    
      <FooterContanct />
    </>
  )
}

export default Homeopathy;


