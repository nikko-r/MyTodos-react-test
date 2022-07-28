import SearchBar from "./components/SearchBar/SearchBar";
import TodoCard from "./components/TodoCard/TodoCard";

import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="top-section">
        <h1 className="top-section__title">My Todos</h1>
        <button className="top-section__reset-button">Reset</button>
      </div>
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
