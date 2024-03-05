// import React from 'react'
// import Navbarcontanct from '../../Navbarcontanct'
// import FooterContanct from '../../FooterContanct'
// import Ncc2 from "../../images/Ncc2.jpg"


// function Activity() {
//   return (
//     <>
//     <Navbarcontanct />
//     <style>
//         {`
//         /* General styles */
//         .article-title h1 {
//           color: crimson;
//           font-weight: bolder;
//           text-align: center;
//         }
        
//         .article-description h3 {
//           color: blueviolet;
//           text-align: center;
//         }
        
//         .article-img-container {
//           width: 50%;
//           margin: 0 auto;
          
//         }
        
//         .article-img-container img {
//           width: 80%;
//           height: auto;
       
//         }
        
//         .article-content {
//           width: 100%;
//           margin: 0 auto;
//         //   border: 1px solid;
//           padding: 0.5rem;
//         //   background-color: lightsalmon;
//         }
        
//         /* Responsive styles for screens below 768px */
//         @media (max-width: 768px) {
//           .article-title h1 {
//             color: darkmagenta;
//           }
        
//           .article-description h3 {
//             color: darkgoldenrod;
//           }
        
//         //   .article-content {
//         //     background-color: lightcoral;
//         //   }
//         }
//         h2 {
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

//           html {
//             font-family: sans-serif;
//         }
        
//         table {
//             border-collapse: collapse;
//             border: 2px solid rgb(200, 200, 200);
//             letter-spacing: 1px;
//             font-size: 0.8rem;
//         }
        
//         td,
//         th {
//             border: 1px solid rgb(190, 190, 190);
//             padding: 10px 20px;
//         }
        
//         th {
//             background-color: rgb(235, 235, 235);
//         }
        
//         td {
//             text-align: center;
//         }
        
//         tr:nth-child(even) td {
//             background-color: rgb(250, 250, 250);
//         }
        
//         tr:nth-child(odd) td {
//             background-color: rgb(245, 245, 245);
//         }
        
//         caption {
//             padding: 10px;
//         }
        
        
//         `}
//     </style>
//     <div className="container-article">

//     <h2 style={{marginTop:"30px",fontWeight:'bolder'}}> | Activity</h2><br/>
//      <h4 style={{color:"#800080",textAlign:"center", marginTop:"50px",textDecoration:"underline"}}> <b>National Cadet Corps (NCC)</b></h4> <br/>

//      <div style={{marginLeft:"2px"}}>
//   <h6 style={{textDecoration:"underline",color:"#800080"}}><b>NCC CAMP</b></h6> 
//   <table
//   style={{marginTop:"5px"}}>
//     <tbody>
//       <tr>
//         <td>S.No.</td>
//         <td>Date</td>
//         <td>Place</td>
//         <td>Type of Camp</td>
//       </tr>
//       <tr>
//         <td>
//         1.
//         </td>
//         <td>14/01/2020-23/01/2020</td>
//         <td>BIRTS, Bhopal</td>
//         <td>PRE-TRDC Camp</td>
//       </tr>
//       <tr>
//         <td>
//         2.
//         </td>
//         <td>14/06/2018-23/06/2018</td>
//         <td>Bhopal</td>
//         <td>Combined annual training Camp (CATC)</td>
//       </tr>
//       <tr>
//         <td>
//         3.
//         </td>
//         <td>14/06/2019-2306/2019</td>
//         <td>Bansal, Bhopal</td>
//         <td>Combined annual training Camp (Yoga)</td>
//       </tr>
//     </tbody>
//   </table>
// </div>

// <br/><br/>
// <div style={{marginLeft:"3%"}}>
//   <h6 style={{textDecoration:"underline",color:"#800080"}}><b>NCC Activity:</b></h6> 
//   <table>
//     <tbody>
//       <tr>
//         <td>S.No.</td>
//         <td>Date</td>
//         <td>Activity</td>
//       </tr>
//       <tr>
//         <td>
//         1.
//         </td>
//         <td>25/08/2018</td>
//         <td>Plantation</td>
//       </tr>
//       <tr>
//         <td>
//         2.
//         </td>
//         <td>01/12/2019</td>
//         <td>World AIDS Day Celebration</td>
//       </tr>
    
//     </tbody>
//   </table>
// </div>

//   </div>
// <br/><br/>
//   <div className="article-img-container"
//       style={{}}>
//       <img 
//         style={{borderRadius:"30px"}}
//         src={Ncc2}
//           alt="Article Image"
//         />
//       </div><br/>
//     <FooterContanct />
//   </>
  
//   )
// }

// export default Activity


import React from 'react';
import Navbarcontanct from '../../Navbarcontanct';
import FooterContanct from '../../FooterContanct';
import Ncc2 from '../../images/Ncc2.jpg';

function Activity() {
  return (
    <>
      <Navbarcontanct />
      <style>
        {`
        /* General styles */
        .container-article {
          width: 80%;
          margin: 0 auto;
        }

        .article-title h1 {
          color: crimson;
          font-weight: bolder;
          text-align: center;
        }

        .article-description h3 {
          color: blueviolet;
          text-align: center;
        }

        .article-img-container {
          width: 100%;
          margin: 0 auto;
        }

        .article-img-container img {
          width: 100%;
          height: auto;
          border-radius: 30px;
        }

        .article-content {
          width: 100%;
          margin: 0 auto;
          padding: 0.5rem;
        }

        /* Responsive styles for screens below 768px */
        @media (max-width: 768px) {
          .article-title h1 {
            color: darkmagenta;
          }

          .article-description h3 {
            color: darkgoldenrod;
          }

          .container-article {
            width: 90%;
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

        html {
          font-family: sans-serif;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          border: 2px solid rgb(200, 200, 200);
          letter-spacing: 1px;
          font-size: 0.8rem;
        }

        td,
        th {
          border: 1px solid rgb(190, 190, 190);
          padding: 10px 20px;
        }

        th {
          background-color: rgb(235, 235, 235);
        }

        td {
          text-align: center;
        }

        tr:nth-child(even) td {
          background-color: rgb(250, 250, 250);
        }

        tr:nth-child(odd) td {
          background-color: rgb(245, 245, 245);
        }

        caption {
          padding: 10px;
        }
      `}
      </style>
      <div className="container-article">
        <h2 style={{ marginTop: '30px', fontWeight: 'bolder' }}> | Activity</h2>
        <br />
        <h4 style={{ color: '#800080', textAlign: 'center', marginTop: '50px', textDecoration: 'underline' }}>
          {' '}
          <b>National Cadet Corps (NCC)</b>
        </h4>{' '}
        <br />

        <div style={{ marginLeft: '2px' }}>
          <h6 style={{ textDecoration: 'underline', color: '#800080' }}>
            <b>NCC CAMP</b>
          </h6>
          <table style={{ marginTop: '5px' }}>
            <tbody>
              <tr>
                <td>S.No.</td>
                <td>Date</td>
                <td>Place</td>
                <td>Type of Camp</td>
              </tr>
              <tr>
                <td>1.</td>
                <td>14/01/2020-23/01/2020</td>
                <td>BIRTS, Bhopal</td>
                <td>PRE-TRDC Camp</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>14/06/2018-23/06/2018</td>
                <td>Bhopal</td>
                <td>Combined annual training Camp (CATC)</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>14/06/2019-2306/2019</td>
                <td>Bansal, Bhopal</td>
                <td>Combined annual training Camp (Yoga)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <br />
        <br />
        <div style={{ marginLeft: '3%' }}>
          <h6 style={{ textDecoration: 'underline', color: '#800080' }}>
            <b>NCC Activity:</b>
          </h6>
          <table>
            <tbody>
              <tr>
                <td>S.No.</td>
                <td>Date</td>
                <td>Activity</td>
              </tr>
              <tr>
                <td>1.</td>
                <td>25/08/2018</td>
                <td>Plantation</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>01/12/2019</td>
                <td>World AIDS Day Celebration</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <br />
      <div className="article-img-container" style={{width:"40%"}}>
        <img src={Ncc2} alt="Article Image" />
      </div>
      <br />
      <FooterContanct />
    </>
  );
}

export default Activity;


