import React from 'react'
import Navbar from './Navbar';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AddDonor from './components/AddDonor';
import DonorList from './components/DonorList';

export default function Donate() {
  return (
    <div>
      <header>
        <Navbar/>
        <div className='dashboard'>
                <Provider store={store}>
                    <div className="newclas">
                        <AddDonor />                    
                    </div>
                    <div className="newclass">
                        <DonorList />
                    </div>
                </Provider>
            </div>
      </header>
    </div>
  )
}
