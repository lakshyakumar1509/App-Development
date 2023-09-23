import React from 'react'
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

export default function Home() {
  const userEmail = useSelector((state) => state.donor.email);

  return (
    <div>
      <header>
        <Navbar/>
        <div className="contenttt">
          <h2 >Welcome to the Home Page</h2>
          {userEmail && <p className='hello'>Email: {userEmail}</p>}
          {/* Display the email if it exists */}
        </div>
      </header>
    </div>
  )
}
