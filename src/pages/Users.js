import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import $ from "jquery";
import DataTable from 'datatables.net-dt';

 function Users() {
  const [value, setValue] = useState();


  
 useEffect(()=>{
  let getData = async () =>{
    fetch("http://localhost:5000/getUserData",{
    method:"GET",
  })
  .then((res)=> res.json())
  .then((data)=>{
    
console.log(data)

    let tab = " ";

 data.data.forEach((elem,ind)=>{
   tab+=`<tr>
  <td>${elem.firtsName}</td>
  <td>${elem.age}</td>
  <td>${elem.sex}</td> 
  <td>${elem.Mobile}</td>
   <td>${elem.Address}</td>
 <td>${elem.ID}</td>
  <td>${elem.Id_Number}</td>
  <td>${elem.GuardianLabel}</td>
  <td>${elem.GuardianName}</td>
   <td>${elem.Nationality}</td>
  </tr>`
 })
 document.getElementById("tbody").innerHTML = tab;

 $("#userTable").DataTable({
  retrieve: true,
  "data": value,
  "columns":[
    {"data":"Name"},
    {"data":"age"},
    {"data":"Sex"},
   {"data":"Mobile"},
   {"data":"Address"}, 
   {"data":"ID"},
    {"data":"Id_Number"},
    {"data":"GuardianLabel"},
    {"data":"GuardianName"},
    {"data":"Nationality"},
   

  ]
 })
  })
  }
  getData();

 },[]) 

 
  
 




  return (
    <div>

        <div style={{display:"flex",justifyContent:"center"}}>
      <Button variant='contained' ><Link style={{ textDecoration: "none", color: "white" }} to="/">back to Form</Link> </Button></div>
      <table id="example" className="display" width="100%"></table>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
    <link rel='stylesheet'  href='https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css'></link>
      <script src='https://code.jquery.com/jquery-3.5.1.js'></script>
    <script src='https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js'></script>
    <script src='https://cdn.datatables.net/1.13.4/js/dataTables.bootstrap5.min.js'></script>



<table id='userTable' style={{width:"100%",margin:"0px"}}>
  <thead>
    <tr> Name, Age/Sex, Mobile, Address, Govt ID, Guardian Details, Nationality
    <th>firtsName</th>
    <th>age</th>
    <th>sex</th> 
    <th>Mobile</th>
    <th>Address</th>
     <th>ID</th>
    <th>Id_Number</th>
    <th>GuardianLabel</th>
    <th>GuardianName</th>
     <th>Nationality</th>
    
   
   
    </tr>
  </thead>
<tbody id="tbody">
</tbody>
</table>

    </div>
  )
}

export default Users;