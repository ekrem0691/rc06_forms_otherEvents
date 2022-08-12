import { useState } from "react";

const KeyboardClipboard = () => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    console.log(e.keyCode);
    e.target.value = e.target.value.toUpperCase();
    e.keyCode === 13 && alert("Enter'e basıldı...");
  };

  const handleAreaPast = (e) => {
    e.target.value += e.clipboardData.getData("text").toLowerCase(); //* '+' yaparsak üzerine ekleyerek kopyalar..
    e.target.style.border = "3px solid red"
    e.target.style.backgroundColor = "lightblue"
    e.preventDefault();
  };


  const handleAreaChange = (e)=>{
    if(!e.target.value){
      e.target.style.border = "1px solid black"
      e.target.style.backgroundColor = "transparent"
    }
  }

   
  return (
    <div className="container text-center">
      <h2>CLIPBOARD EVENTS</h2>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <p onCopy={()=>{alert("dikkat kopyalandı")}} className="text-start m-5">{inputValue} </p>
      <textarea
        onPaste={handleAreaPast}
        onChange= {handleAreaChange}
        name="area"
        id="area"
        cols="50"
        rows="10"
      ></textarea>
    </div>
  );
};

export default KeyboardClipboard;
