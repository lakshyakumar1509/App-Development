import React,{ useState} from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function Register(props) {
  const[name, setName]=useState('');
  const[email, setEmail]=useState('');
  const[pass, setPass]=useState('');
  const[phone, setPhone]=useState('');

    const handleSubmit=(e) =>
    {
        e.preventDefault();
        console.log(email);
    }
  return (
    <div className='main_container'>
      <form onSubmit={handleSubmit} className="form1">
        <label htmlFor='name' className="labell">Full name  </label>
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your Name" id="name" name="name" />
        <br/>

        <label htmlFor="email" className="labell">Email  </label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="youremail@gmail.com" id="email" name="email" type="email" />
        <br/>

        <label htmlFor="password" className="labell">Password </label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        <br/>

        <label htmlFor="phone">Phone </label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="phone" placeholder="98xxxxxxxx" id="phone" name="phone" />
        <br/>
        
        <button type="submit" className='submit'><Link to="/">Register</Link></button>
      </form>
      
      <p>Already have an account? <Link to="/">Login Here.</Link></p>      
      
    </div>
  )
}

