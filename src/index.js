import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Button() {
  const [showApp, setShowApp] = useState(false);

  const handleButtonClick = () => {
    setShowApp(true);
  }

  return (
    <div>
      {!showApp && <button className='container-4' onClick={handleButtonClick}>Verify Your Number</button>}
      {showApp && <App />}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Button />
  </React.StrictMode>,
);

reportWebVitals();