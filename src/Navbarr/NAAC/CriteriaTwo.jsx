



import React from 'react';
import FooterContanct from '../../FooterContanct';
import Navbarcontanct from '../../Navbarcontanct';

function CriteriaTwo() {
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
      <h2 style={{marginTop:"30px",fontWeight:'bolder'}}> | Criteria Two</h2><br/><br/>
      <h5 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>Criteria 2</b></h5>
      <div className="content">
        <p>
          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b> 2.2.1 : </b>  The institution assesses the learning levels of the students and organises special  Programmes<br/>
                         for advanced learners  and  slow learners
                        <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>
          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>2.3.1 :</b>    Student centric methods, such as experiential learning, participative learning and problem solving<br/>
                           methodologies are used for enhancing learning experiences
                    <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>
          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>2.3.2  :</b>  Teachers use ICT enabled tools including online resources for effective teaching and learning<br/> process.
                  <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>


          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>2.3.3 :</b>  Ratio of students to mentor for academic and other related issues <br/>
                    (Data for the latest completed academic year )
                  <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>   

          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>2.4 :</b> Number of revaluation applications year wise
                  <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>   

        </p>

       
      
        
      </div>
     
      <FooterContanct/>
    </>
  );
}

export default CriteriaTwo;
