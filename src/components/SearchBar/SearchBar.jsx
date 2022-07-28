import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        type="text"
        placeholder="Add your task here..."
      ></input>
      <button className="search-bar__add-button">
        <div className="add-button__circle">+</div>
      </button>
    </div>
  );
};

export default SearchBar;
