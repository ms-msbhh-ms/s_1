import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




function Login() {
    axios.post("http://localhost:5051/loginuser",{email:"cpaxyz@gmail.com",password:"cpaxyz"}).then((res)=>{
        console.log(res)
    })
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reShort,setReShort] = useState(false)
  
  function handleSubmit(event) {
    
    event.preventDefault();
    console.log(email,password)
    axios.post("http://localhost:5051/loginuser",{email,password}).then((res)=>{
        console.log(res)
        if(res.data.message){
          sessionStorage.setItem("auth","ok")
          setReShort(true)
         navigate("/shortner")
        }
    })
    // Add code here to send the form data to the server, or to process it in some way
  }
  return (
    <div className="mx-10" >
      
      <form onSubmit={handleSubmit} className="flex items-center justify-center  h-screen bg-gray-200">
      <div className="mb-4 ml-4 mr-4">
        <label htmlFor="email" className="block text-gray-700 text-sm px-8 font-bold mb-2">
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
    </div>
  );
}

export default Login;
