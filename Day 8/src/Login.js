import React,{ useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setEmail } from '../src/features/donorSlice';


export default function Login(props) {
    const[emailInput, setEmailInput]=useState('');
    const[pass, setPass]=useState('');
    const dispatch = useDispatch();
    const handleSubmit=(e) =>
    {
        e.preventDefault();
        console.log(emailInput);
        dispatch(setEmail(emailInput));
    }
  return (
     <div className='main_container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="labell">Email</label>
        <input value={emailInput} onChange={(e)=>setEmailInput(e.target.value)} type="email" placeholde="youremail@gmail.com" id="email" name="email" /><br/>
        <label htmlFor="password" className="labell">Password</label>
        <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholde="********" id="password" name="password" />
         
        <button type="submit"><Link to="/home">Log In</Link></button>
      </form><br/>
      <p>Don't have an account? <Link to="/register">Register Here</Link></p>
      </div>

  )
}
