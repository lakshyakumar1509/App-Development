import React from 'react'
import Navbar from '../H&F/Navbar';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import AddDonor from './AddDonor';
import DonorList from './DonorList';

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
