import "./InputBox.scss";

const InputBox = () => {
  return (
    <div className="input-box">
      <input
        className="input-box__input"
        type="text"
        placeholder="Add your task here..."
      ></input>
      <button className="input-box__add-button">
        <div className="add-button__circle">+</div>
      </button>
    </div>
  );
};

export default InputBox;
