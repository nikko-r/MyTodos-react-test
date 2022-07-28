import "./InputBox.scss";

const InputBox = ({ addtaskBoxInput, handleInput }) => {
  // const handleAddTaskClick = () => {
  //   console.log("click");
  //   console.log({ InputString });
  // };

  return (
    <div className="input-box">
      <input
        className="input-box__input"
        type="text"
        placeholder="Add your task here..."
        value={addtaskBoxInput}
      ></input>
      <button onClick={handleInput} className="input-box__add-button">
        <div className="add-button__circle">+</div>
      </button>
    </div>
  );
};

export default InputBox;
