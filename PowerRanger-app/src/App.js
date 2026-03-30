import "./App.css"; // Importing the CSS file for styling the App component
import React from "react"; // import logo from './logo.svg';
import Image from "./Image"; // import './App.css';
import PinkRanger from "./images/pink.jpg"; // import BlackRanger from "./images/black.jpg";
import BlackRanger from "./images/black.jpg";
import WhiteRanger from "./images/white.jpg";
import YellowRanger from "./images/yellow.jpg";

function App() {
  return (
    <div>
      <h1>Power Ranger Characters</h1>

      <div className="image-container">
        <Image src={PinkRanger} width="200" />
        <Image src={BlackRanger} width="200" />
        <Image src={WhiteRanger} width="200" />
        <Image src={YellowRanger} width="200" />
      </div>
      
    </div>
  );
}

export default App;