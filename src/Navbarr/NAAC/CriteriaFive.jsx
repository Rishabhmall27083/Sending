import React from 'react';
import FooterContanct from '../../FooterContanct';
import Navbarcontanct from '../../Navbarcontanct';

function CriteriaFive() {
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
      <h2 style={{marginTop:"30px",fontWeight:'bolder'}}> | Criteria Five</h2><br/><br/>
      <h5 style={{ textAlign: "center", textDecoration: "underline", color: "#800080" }}><b>Criteria 5</b></h5>
      <div className="content">
        <p>
          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b> 5.1.1 : </b>
       
Average percentage of students benefited by scholarships, free ships, etc.  provided by institution, <br/> Government and non-government agencies (NGOs during the last five years (other than the students <br/> receiving scholarships under the government schemes for reserved categories)
                        <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>
          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>5.1.2 :</b> Average percentage of students benefited by career counseling and guidance for <br/> competitive examinations offered by the Institution during the last five years
                    <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>
          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>5.1.3 :</b>Following Capacity development and skills enhancement initiatives are taken by the institution (5) <br/> <br/>

1. Soft skills <br/>

2. Language and communication skills<br/>

3. Life skills (Yoga, physical fitness, health and hygiene)<br/>

4. Awareness of trends in technology                                 
                  <b style={{marginLeft:"25%",color:"blue"}}>Click here</b>
          </h5>


          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b> 5.1.4:</b> The Institution adopts the following for redressal of student grievances including <br/> sexual harassment and ragging cases : <br/> <br/>
       :- Constitutes, policy and committees
       <b style={{marginLeft:"2%",color:"blue"}}>Click here</b> <br/> <br/>


       :- Minutes of the Meeting	Click here 
        <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
         </h5>   

          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>5.2.1 :</b> The average percentage of students qualifying in State / National / International level <br/> examinations  during the last five years(Eg. IIT/JAM/CLAT/NET/SLET/GATE/GMAT/CAT/GRE/ <br/>TOEFL/CIVIL    SERVICES/STATE GOVERNMENT Examination Etc.
        <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>   
          
          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>5.2.2 :</b> Average percentage of placement of outgoing students during the last five years

        <b style={{marginLeft:"2%",color:"blue"}}>Click here</b> <br/><br/>
      :-   Offer Letter

                  <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>  

          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>5.2.3 :</b> 	Percentage of recently graduated students who have progressed to higher education (previous <br/> graduating batch) (15) (2017-21)
                  <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>  

          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>5.3.2 :</b> Presence of Student Council and its activities for institutional development and student welfare <br/> <br/>
 
        :- Counsil Regulation
        <b style={{marginLeft:"2%",color:"blue"}}>Click here</b> <br/><br/>

        :- Student Counsil formation
        <b style={{marginLeft:"2%",color:"blue"}}>Click here</b> <br/><br/>

        :- Student Council and its Activities     
       <b style={{marginLeft:"2%",color:"blue"}}>Click here</b> <br/><br/>
       Average number of sports and cultural events / competitions organized by the Institution per year
          </h5> 

           <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>5.4.1 :</b> The Alumni Association / Chapters (registered and functional) contributes significantly to the <br/>development of the institution through financial and other support services
                  <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>  

          <h5 style={{color:"black" ,marginTop:"35px",marginLeft:"20%"}}>
        <b>5.4.2 :</b> The Alumni Association is registered and holds regular meetings to plan its involvement <br/> and developmental activates with the  support of the University during the five years:
                  <b style={{marginLeft:"2%",color:"blue"}}>Click here</b>
          </h5>  
        </p>
         </div>
     
      <FooterContanct/>
    </>
  );
}

export default CriteriaFive
;


