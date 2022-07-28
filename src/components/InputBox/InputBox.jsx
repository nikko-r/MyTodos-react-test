import "./InputBox.scss";

const InputBox = ({ InputString }) => {
  const handleAddTaskClick = () => {
    console.log("click");
    console.log({ InputString });
  };

  // const handleInput = (event) => {
  //   setSearchBoxInput(event.target.value);
  // };

  return (
    <div className="input-box">
      <input
        className="input-box__input"
        type="text"
        placeholder="Add your task here..."
        value={InputString}
      ></input>
      <button onClick={handleAddTaskClick} className="input-box__add-button">
        <div className="add-button__circle">+</div>
      </button>
    </div>
  );
};

export default InputBox;
