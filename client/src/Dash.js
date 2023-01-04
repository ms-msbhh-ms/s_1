import axios from 'axios';
import React, { useState } from 'react';
import { useAsyncError, useNavigate } from 'react-router-dom';

function Dash() {
  const [output, setOutput] = useState('');
  const [ link , setLink]  = useState("");

  function handleChange(event) {
    setOutput(event.target.value);
  }
  function HandleSubmit(event) {
    event.preventDefault();
    console.log(link)
    setOutput(link)
    axios.post("/noyon",{link}).then((res)=>{
      console.log(res.data.message)
      setOutput(res.data.messge)
    })
  }


  return (
    <div>
      <Dash/>
    </div>
  );
}

export default Dash;
