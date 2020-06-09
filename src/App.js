import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="board" id="board">
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
      </div>
      <div className="winning-message">
        <div className="data-winning-message-text"></div>
        <button className="restartButton">Restart</button>
      </div>
    </div>
  );
}

export default App;
