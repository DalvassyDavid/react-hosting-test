import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function App() {
  
  const[name,setName]=useState("")
  useEffect(()=>{
    axios.get("http://localhost:8000/name")
    .then((res)=>{
      console.log(res.data.name)
setName(res.data.name)
    })
  },[])
  return (
    <div className="App">
      <p>{name}</p>
    </div>
  );
}

export default App;
