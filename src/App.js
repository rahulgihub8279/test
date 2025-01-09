import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import AlertComp from "./components/AlertComp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1d2a35";
      showalert("Dark mode enabled", "success");
      document.title = "textutils-dark";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode enabled", "warning");
      document.title = "textutils-light";
    }
  };
  return (
    <>
      <Router basename="test">
        <Navbar
          title="Text Analyzer"
          aboutText="about textutils"
          mode={Mode}
          toggleMode={toggleMode}
        />
        <AlertComp alert={alert} />
        <br></br>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  show={showalert}
                  heading="enter the text to analyze ↓"
                  mode={Mode}
                />
              }
            ></Route>
            <Route
              path="/about"
              element={<About item="about text analyzer" mode={Mode} />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
