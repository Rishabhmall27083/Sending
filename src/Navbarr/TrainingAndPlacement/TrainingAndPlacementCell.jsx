
import React from 'react';
import Navbarcontanct from '../../Navbarcontanct';
import FooterContanct from '../../FooterContanct';

function TrainingAndPlacementCell() {
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
      <h2 style={{ marginTop: "30px", fontWeight: 'bolder' }}> | Training And PlacementCell</h2> <br />
      {/* <h3 style={{textAlign:"center", textDecoration:"underline"}}><b>/ Faculty of Ayurveda/</b></h3> <br/> */}
      <h5 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>Training & Placement Cell</b></h5><br />
      <div className="tabulka-container" lang="sk">
        <table itemScope="" itemType="http://schema.org/Product">
          {/* Popis tabuľky */}
          {/* Nadradené a podradené záhlavie */}
          <thead>
            <tr>
              <th id="produkt" scope="col" style={{backgroundColor:"#5F9EA0"}}>
                <b>S.No</b>
              </th>
              <th id="branch" scope="col" style={{backgroundColor:"#5F9EA0"}}>
                <b>Name</b>
              </th>
              <th id="duration" scope="col" style={{backgroundColor:"#5F9EA0"}}>
                <b> Post</b>
              </th>
            </tr>
          </thead>
          {/* Riadky s dátami */}
          <tbody>
            <tr itemProp="offers" itemScope="" itemType="http://schema.org/Offer">
              <th scope="row" id="smartfony" itemProp="name">
                1
              </th>
              <td headers="branch">
                <span itemProp="price" content={5000}>
                Dr. Vijay Prakash Singh
                </span>
             <meta itemProp="priceCurrency" content="EUR" />
               </td>
            
              <th scope="row" id="smartfony" itemProp="name">
                Head
              </th>
            </tr>

            <tr itemProp="offers" itemScope="" itemType="http://schema.org/Offer">
              <th scope="row" id="smartfony" itemProp="name">
                2
              </th>
              <td headers="branch">
                <span itemProp="price" content={5000}>
                	Dr. Hemant Sharma
                </span>
             <meta itemProp="priceCurrency" content="EUR" />
               </td>
            
              <th scope="row" id="smartfony" itemProp="name">
              Member
              </th>
            </tr>
            <tr itemProp="offers" itemScope="" itemType="http://schema.org/Offer">
              <th scope="row" id="smartfony" itemProp="name">
              3
              </th>
              <td headers="branch">
                <span itemProp="price" content={5000}>
                	Dr. Jitendra Sheetlani
                </span>
             <meta itemProp="priceCurrency" content="EUR" />
               </td>
            
              <th scope="row" id="smartfony" itemProp="name">
                	Member
              </th>
            </tr>

            <tr itemProp="offers" itemScope="" itemType="http://schema.org/Offer">
              <th scope="row" id="smartfony" itemProp="name">
                4
              </th>
              <td headers="branch">
                <span itemProp="price" content={5000}>
                	Dr. Indrajeet Singh Yadav
                </span>
             <meta itemProp="priceCurrency" content="EUR" />
               </td>
             <th scope="row" id="smartfony" itemProp="name">
              Member
              </th>
            </tr>
            <tr itemProp="offers" itemScope="" itemType="http://schema.org/Offer">
              <th scope="row" id="smartfony" itemProp="name">
              5
              </th>
              <td headers="branch">
                <span itemProp="price" content={5000}>
                Mrs. Priyanka Jhawar
                </span>
             <meta itemProp="priceCurrency" content="EUR" />
               </td>
            <th scope="row" id="smartfony" itemProp="name">
            Member
              </th>
            </tr>
            <tr itemProp="offers" itemScope="" itemType="http://schema.org/Offer">
              <th scope="row" id="smartfony" itemProp="name">
                6
              </th>
              <td headers="branch">
                <span itemProp="price" content={5000}>
                Dr. Kanchan Shrivastava
                </span>
             <meta itemProp="priceCurrency" content="EUR" />
               </td>
            <th scope="row" id="smartfony" itemProp="name">
                	Member
              </th>
            </tr>
       </tbody>
        </table>
      </div>
    
    
      <FooterContanct />
    </>
  )
}

export default TrainingAndPlacementCell;


