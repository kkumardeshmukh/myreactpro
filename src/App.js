// import logo from './logo.svg';
import Navbar from './components/Navbar'
import TextField from './components/TextField'
import './App.css';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  // states should be always define inside the function 

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    //alter will automatically dismiss from screen after 1.5 sec
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  const togglemode = () => {
    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = "grey"
      document.body.style.color = "white"
      showAlert("Dark mode activated", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showAlert("Light mode activated", "success")
    }
  }

  return (
    <>
 <BrowserRouter>
      {/* routing elements must put in browser router */}
      <Navbar title="Text Transformer" mode={mode} toggleMode={togglemode}/>
      <Alert Alert={alert} />
      {/* every routing element wrap in routes  */}
      {/* wring a route like bellow because letest versions of react supports them, switch word removed from library  */}
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}></Route>
          <Route exact path="/" element={<TextField mode={mode} showAlert={showAlert}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
