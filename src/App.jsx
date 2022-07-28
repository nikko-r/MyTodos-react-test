import InputBox from "./components/InputBox/InputBox";
import TodoCard from "./components/TodoCard/TodoCard";
import "./App.scss";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <div className="top-section">
        <h1 className="top-section__title">My Todos</h1>
        <button className="top-section__reset-button">Reset</button>
      </div>
      <InputBox></InputBox>
    </div>
  );
}

export default App;
