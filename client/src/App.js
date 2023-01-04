import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes , useNavigate } from 'react-router-dom';
import './App.css';

import Dash from "./Dash"
import axios from 'axios';



function App() {

  axios.post("http://localhost:5051/loginuser",{email:"cpaxyz@gmail.com",password:"cpaxyz"}).then((res)=>{
    console.log(res)
})
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [reShort,setReShort] = useState(false)
const [login,setLogin] = useState(true)

function handleSubmit(event) {

event.preventDefault();
console.log(email,password)
axios.post("http://localhost:5051/loginuser",{email,password}).then((res)=>{
    console.log(res)
    if(res.data.message){
      sessionStorage.setItem("auth","ok")
      setReShort(true)
      setLogin(false)
    }
})
// Add code here to send the form data to the server, or to process it in some way
}
  return (
<div>
{ login && <div  className="mx-10">
      
      <form onSubmit={handleSubmit} className="mx-auto max-w-sm mt-10">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign In
        </button>
        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a>
      </div>
    </form>
    </div>}
{reShort && <Dash/>}
</div>

  );
}

export default App;
