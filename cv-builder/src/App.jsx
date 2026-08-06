import "./styles/App.css";
import Editor from "./components/Editor/Editor.jsx";
import Preview from "./components/Preview.jsx";
import { useState } from "react";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Jon Doe",
    email: "jondoe@gmail.com",
    phone: "0948858826",
  });
  return (
    <>
      <div className="main">
        <div className="sidebar">
          <Editor />
        </div>
        <div className="resume">
          <Preview personalInfo={personalInfo} />
        </div>
      </div>
    </>
  );
}

export default App;
