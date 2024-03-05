

import React from 'react';
import Navbarcontanct from '../../Navbarcontanct';
import FooterContanct from '../../FooterContanct';

function InternalComplaintCommittee() {
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
      <h2 style={{ marginTop: "30px", fontWeight: 'bolder' }}>| Internal Complaint Committee</h2> <br /><br />
      {/* <h3 style={{textAlign:"center", textDecoration:"underline"}}><b>/ Faculty of Management /</b></h3> <br/> */}
      <h5 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>INTARNAL COMPLAINT COMMITTEE RELATING TO SEXUAL HARASSMENT OF WORKING WOMEN</b></h5><br />
      <div className="tabulka-container" lang="sk">
        <table itemScope="" itemType="http://schema.org/Product">
          {/* Popis tabuľky */}
          {/* Nadradené a podradené záhlavie */}
          <thead>
            <tr>
              <th id="produkt" scope="col" style={{backgroundColor:"#5F9EA0"}}>
                <b>S.No. </b>
              </th>
              <th id="branch" scope="col" style={{backgroundColor:"#5F9EA0"}}>
                <b>Name of Member</b>
              </th>
              <th id="duration" scope="col"  style={{backgroundColor:"#5F9EA0"}}>
                <b>Designation</b>
              </th>
            </tr>
          </thead>
          {/* Riadky s dátami */}
          <tbody>
            <tr itemProp="offers" itemScope="" itemType="http://schema.org/Offer">
              <th scope="row" id="smartfony" itemProp="name">
              	1
              </th>
              <th scope="row" id="smartfony" itemProp="name">
              Dr. Minakshi Pathak
              </th>
            <th scope="row" id="smartfony" itemProp="name">
            Dean, Chairperson
              </th>
            </tr>

            <tr itemProp="offers" itemScope="" itemType="http://schema.org/Offer">
              <th scope="row" id="smartfony" itemProp="name">
              	2
              </th>
              <th scope="row" id="smartfony" itemProp="name">
              Ms. Shobha Vyas
              </th>
             
            <th scope="row" id="smartfony" itemProp="name">
            Professor & Member
              </th>
            </tr>

            <tr itemProp="offers" itemScope="" itemType="http://schema.org/Offer">
              <th scope="row" id="smartfony" itemProp="name">
              	3
              </th>
              <th scope="row" id="smartfony" itemProp="name">
              Mrs. Priyanka Jhawar
              </th>
             
            <th scope="row" id="smartfony" itemProp="name">
            Professor & Member
              </th>
            </tr>
            <tr itemProp="offers" itemScope="" itemType="http://schema.org/Offer">
              <th scope="row" id="smartfony" itemProp="name">
              	4
              </th>
              <th scope="row" id="smartfony" itemProp="name">
              Dr. Vijay Prakash Singh
              </th>
            <th scope="row" id="smartfony" itemProp="name">
            Professor & Member
              </th>
            </tr>
            <tr itemProp="offers" itemScope="" itemType="http://schema.org/Offer">
              <th scope="row" id="smartfony" itemProp="name">
              	5
              </th>
              <th scope="row" id="smartfony" itemProp="name">
              Dr. Anil Singh Rajput<br/>
              Principal CSA Post Graduate Govt. College Sehore
              </th>
            <th scope="row" id="smartfony" itemProp="name">
            External Member
              </th>
            </tr>
            </tbody>
        </table>
      </div>
     <FooterContanct />
    </>
  )
}

export default InternalComplaintCommittee;

