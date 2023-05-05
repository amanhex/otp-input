import { useState } from 'react';
import React from 'react';
import OtpInput from './Components/OtpInput';
import './App.css';

export default function App() {
  const [otp, setOtp] = useState('');
  const onChange = (value) => setOtp(value);
  return (
    <div>
      <div className="container">
        <h1>Phone Verification</h1>
        <hr />
        <h3 className='container-2'>Enter the OTP you received on 99903-3XXXX</h3>
        <OtpInput value={otp} valueLength={6} onChange={onChange} />
        <h4 className='container-3'>Change Number</h4>
        <h4 className='container-3'>Re-Send OTP</h4> <br />
      </div>
      <button className='container-4'>Verify Phone Number</button>
    </div>
  );       
}
