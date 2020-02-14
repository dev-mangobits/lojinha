import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="http://admin.startupkit.mangotest.com/img/mango.png"
          className="App-logo"
          alt="logo"
        />
        <br />
        <p>Nome do projeto</p>
        <a
          className="App-link"
          href="http://www.mangobits.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lojinha
        </a>
      </header>
    </div>
  );
}

export default App;
