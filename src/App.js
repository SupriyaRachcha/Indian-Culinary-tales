
import React from "react";
import Homepage from "./Comonents/Homepage"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./Comonents/Navbar";


function App() {
  return (
   <>
   <Router>
      <Navbar/>

   </Router>
   </>
  );
}

export default App;
