import React, {useState} from "react";
import "./App.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Location from "./Routes/Location";
import Home from "./Routes/Home";
import Characters from "./Routes/Characters";
import CardInfo from "./Routes/CardInfo";
import LocationInfo from "./Routes/LocationInfo";



function App(){
    const [id,setID]=useState('')
  return(
      <Router>
        <div className="App">
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/characters/:id" element={<CardInfo/>}/>
            <Route path="/characters" element={<Characters/>}/>
            <Route path="/locations/:id" element={<LocationInfo />}/>
          <Route path="/locations" element={<Location />}/>
        </Routes>
      </Router>
  )
}


export default App;
