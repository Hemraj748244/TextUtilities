import * as React from 'react';
import { useState } from 'react';
import './style.css';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { TextArea } from './components/TextArea';
import { Alerts } from './components/Alerts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [nmColor, setnmColor] = useState({
    bgcolor: '#204060',
    color: 'white',
  });

  let setTheme = (bgcolor, color) => {
    setnmColor({
      bgcolor: bgcolor,
      color: color,
    });
  };

  let endAlert = () => {
    setInterval(function () {
      setAlert(null);
    }, 2000);
  };

  let showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    endAlert();
  };

  let toggleviewMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert('Dark Mode Enabled', 'success');
    } else {
      setMode('light');
      showAlert('Dark Mode Disabled', 'success');
    }
  };

  return (
    <BrowserRouter>
      <Navbar
        title="Text Utils"
        aboutText="About"
        viewMode={mode}
        toggleMode={toggleviewMode}
        theme={setTheme}
        currentColors={setnmColor}
      />
      <Alerts alertData={alert} />

      <Routes>
        <Route
          path="/Home"
          element={
            <TextArea
              theme={nmColor}
              textHeading="Enter the text below to analyze"
              viewMode={mode}
              toggleMode={toggleviewMode}
              alertData={showAlert}
            />
          }
        />
        <Route
          path="/About"
          element={
            <About
              viewMode={mode}
              theme={setnmColor}
              toggleMode={toggleviewMode}
            />
          }
        />
      </Routes>

      {/* <About viewMode={mode} toggleMode={toggleviewMode}/> */}
    </BrowserRouter>
  );
}
