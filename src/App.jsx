import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { cuisinesData } from "./data";
import { restaurantsData } from "./data";
import { NavLink, Routes,Route } from "react-router-dom";
import { SinglePage } from "./singlePage";
import { NewComponent } from "./NewComponent";


function App() {
  

  return (
    <>
  <div>
     welcome !!!!!!!!!!!!1
    </div>
    <Routes>
                <Route path="/" element={<NewComponent/>} />
                <Route path="rest/:id" element={<SinglePage/>} />
            </Routes>
    

    </>


   
  );
}

export default App;
