import React from 'react'
import Navbarcontanct from '../../Navbarcontanct'
import FooterContanct from '../../FooterContanct'

function Ordinances() {
  return (
    <>
    <style>
      {`
      
      /* Some code is probably from the Codepen CPC template. */

/* inspired  https://webflow.com/made-in-webflow/website/jb10x#*/
.dashboard {
	width: 100%;
	max-width: 600px;
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
	padding: 9px;
	text-align: left;
}
h2 {
	padding-left: 5%;
	padding-right: 5%;
}
th, td {
border: none;
border-bottom: 1px solid #d7bfdb;
	padding-bottom: 3px;
	padding-top: 5px;
}
  `}
    </style>
    <Navbarcontanct />

    <h2 style={{marginTop:"30px",fontWeight:'bolder'}}> | Ordinances</h2> <br/><br/>
    <br></br>

  <div className="dashboard">
   
    <div className="challenges">
    <h5> <b style={{textAlign:"center",textDecoration:"underline",color:"#191970" }}>Ordinances :-</b></h5><br/>
      <ul>
        <li>AMENDED AND NEW ORDINANCE  </li>
        <li>ORDINANCE</li>
        <li>SUBSEQUENT ORDINANCE</li>
        <li>AMENDED AND REPEALED ORDINANCE</li>
      </ul>
    </div>
  </div>
  <FooterContanct />
</>

  )
}

export default Ordinances
