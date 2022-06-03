import React from 'react';
import './Create.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
let navigate = useNavigate();

const [layout,setLayout] = useState("first");
const [name,setName] = useState("");
const [capacity,setCapacity] = useState("");
const [status,setStatus] = useState("off");
const [image,setImage] = useState("");


const sendData = ()=>{
  axios.post('https://6299bec37b866a90ec4178ed.mockapi.io/Crud',{
    layout,
    name,
    capacity,
    status,
    image
  }).then(()=>{
    navigate('/read')
  })
}





  return (
    <div className='create'>
        <div className='create_head'>
            <h3>Create Table</h3>
            <hr/>
        </div>
        <div className='create_body'>
            <div className="gap">
             <label>Layout: </label>
             <select onChange={(e)=>setLayout(e.target.value)} name="layout">
               <option value="first">First</option>
               <option value="second">Second</option>
               <option value="third">Third</option>
           </select>
            </div>
            <div className="gap">
               <label>Name:</label>
              <input onChange={(e)=>setName(e.target.value)} type="text"/>
            </div>
            <div className="gap">
              <label>Capacity:</label>
              <input onChange={(e)=>setCapacity(e.target.value)} type="text" name="" id=""/>
            </div>
            <div className="gap" id="check">
              <label>Status:</label>
              <input onChange={(e)=>setStatus(e.target.value)} type="checkbox" />
            </div>
            <div className="gap">
              <label>Image:</label>
              <input onChange={(e)=>setImage(e.target.value)} type="file" accept="image/*"/>
            </div>
            
             <div className="btn">
              <button className="blue" onClick={sendData} type="submit">Create Table</button>
              <button className="red"  type="reset">Cancel</button>
             </div>



        </div>
    </div>

  )
}

export default Create;