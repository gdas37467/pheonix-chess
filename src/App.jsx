import React from "react";

import { Route,Routes, } from "react-router-dom";
import Homepage from "./components/Homepage";
import Thanks from "./components/Thanks";

function App() {
  

  return (
    <>
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/thanks" element={<Thanks/>}/>
    </Routes>
  </>

  )
}

export default App
