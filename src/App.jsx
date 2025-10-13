import React, { useState } from "react";
import Nav from "./components/sections/Nav";
import Home from "./components/sections/Home";
import Test from "./myTests/Test";

const App = () => {

  const [notDark,setNotDark] = useState(true);

  return (
    <>
      <Nav notDark={notDark} setNotDark={setNotDark} />
      <Home notDark={notDark} setNotDark={setNotDark}/> 
      {/* <Test/> */}
    </>
  );
};

export default App;
