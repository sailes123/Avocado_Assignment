import React, { useEffect,useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Read = () => {
  const [apiData ,setApiData] = useState([]);
  useEffect(()=>{
     axios.get('https://6299bec37b866a90ec4178ed.mockapi.io/Crud')
     .then((getData)=>{
       setApiData(getData.data);
     },[])
  })

  const setData = (id,layout,name,capacity,status,image)=>{
    localStorage.setItem("ID",id);
    localStorage.setItem("layout",layout);
    localStorage.setItem("ID",name);
    localStorage.setItem("ID",capacity);
    localStorage.setItem("ID",status);
    localStorage.setItem("ID",image);
  }

const getData = () =>{
  axios.get('https://6299bec37b866a90ec4178ed.mockapi.io/Crud')
     .then((getData)=>{
       setApiData(getData.data);
     })
}

const onDelete = (id)=>{
     axios.delete(`https://6299bec37b866a90ec4178ed.mockapi.io/Crud/${id}`)
     .then(()=> {
       getData()}
       )
}

  return (
    <div>
<Table striped bordered hover>
  <thead className='table-dark'>
    <tr>
      <th>Layout</th>
    <th>Name</th>
    <th>Capacity</th>
    <th>Status</th>
    <th>Image</th>  
    <th></th>  
    <th></th>  
    </tr>
  </thead>
  <tbody className='table-light'> 
  { apiData.map((data)=>{
       return(
         <tr>
    <td>{data.layout}</td>
    <td>{data.name}</td> 
    <td>{data.capacity}</td> 
    <td>{data.status}</td> 
    <td>{data.image}</td> 
    <td>
      <Link to="/update">
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-success me-md-2" onClick={()=>setData(data.id,data.layout,data.name,data.capcity,data.status,data.image)} type="button">Update</button>
    </div>
      </Link>
</td> 
       <td>
       <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-danger me-md-2" type="button" onClick={()=>onDelete(data.id)}>Delete</button>
    </div>
      </td> 
     </tr>
       )
     
      })
    }
  </tbody>
</Table>
    </div>
  )
}

export default Read