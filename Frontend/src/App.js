import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import FirstForm from "./Forms/FirstForm/FirstForm";

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personal_details" element={<FirstForm />} />
          </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
