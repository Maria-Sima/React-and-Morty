
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import "./App.css";
import Locations from "./Routes/Locations";
import Home from "./Routes/Home";
import Characters from "./Routes/Characters";
import CardInfo from "./Routes/CardInfo";
import LocationInfo from "./Routes/LocationInfo";



function App(){

  return(
      <Router>
        <div className="App">
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:id" element={<CardInfo/>}/>
          <Route path="/characters" element={<Characters/>}/>
          <Route path="/locations/:id" element={<LocationInfo />}/>
          <Route path="/locations" element={<Locations />}/>
        </Routes>
      </Router>
  )
// <Loader />)
}


export default App;
