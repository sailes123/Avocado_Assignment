import React from 'react';
import './Create.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Update = () => {
let navigate = useNavigate();

const [layout,setLayout] = useState("first");
const [name,setName] = useState("");
const [capacity,setCapacity] = useState("");
const [status,setStatus] = useState("off");
const [image,setImage] = useState("");
const [ID,setID] = useState(null);

const sendData = ()=>{
  axios.put(`https://6299bec37b866a90ec4178ed.mockapi.io/Crud/${ID}`,{
    ID,
    layout,
    name,
    capacity,
    status,
    image
  }).then(()=>{
    console.log(ID)
    navigate('/read');
   
  })
}
useEffect(()=>{
  setLayout(localStorage.getItem('layout'));
  setName(localStorage.getItem('name'));
  setCapacity(localStorage.getItem('capacity'));
  setStatus(localStorage.getItem('status'));
  setImage(localStorage.getItem('image'));
  setID(localStorage.getItem('ID'));
},[])



  return (
    <div className='create'>
        <div className='create_head'>
            <h3>Create Table</h3>
            <hr/>
        </div>
        <div className='create_body'>
            <div className="gap">
             <label>Layout: </label>
             <select value={layout} onChange={(e)=>setLayout(e.target.value)} name="layout">
               <option value="first">First</option>
               <option value="second">Second</option>
               <option value="third">Third</option>
           </select>
            </div>
            <div className="gap">
               <label>Name:</label>
              <input value={name} onChange={(e)=>setName(e.target.value)} type="text"/>
            </div>
            <div className="gap">
              <label>Capacity:</label>
              <input value={capacity} onChange={(e)=>setCapacity(e.target.value)} type="text" />
            </div>
            <div className="gap" id="check">
              <label>Status:</label>
              <input value={status} onChange={(e)=>setStatus(e.target.value)} type="checkbox" />
            </div>
            <div className="gap">
              <label>Image:</label>
              <input value={image} onChange={(e)=>setImage(e.target.value)} type="file" accept="image/*"/>
            </div>
            
             <div className="btn">
              <button className="blue" onClick={sendData} type="submit">Update</button>
             </div>



        </div>
    </div>

  )
}

export default Update;