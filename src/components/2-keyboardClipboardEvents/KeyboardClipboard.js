import { useState } from "react"


const KeyboardClipboard = () => {



  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleKeyDown = (e) => {
    console.log(e.keyCode);
    e.target.value = e.target.value.toUpperCase();
    e.keyCode === 13 && alert('Entere basıldı...')
  }


  const handleAreaPaste = (e) => {
    e.target.value += e.clipboardData.getData('text').toLowerCase();
    e.preventDefault();
    e.target.style.border = '5px solid red';
    e.target.style.backgroundColor = "lightgreen";
  }



  const handleAreaChange = (e) => {
    if (e.target.value === "") {
      e.target.style.border = '1px solid black';
      e.target.style.backgroundColor = 'white';
    }
  };



  return (
    <div className="container text-center">
      <h2>CLIPBOARD EVENTS</h2>
      <input type="text" name="" value={inputValue} onKeyDown={handleKeyDown} onChange={handleInputChange} />
      <p className="text-start m-5" onCopy={ ()=> alert('Dikkat kopyalandı') } >{inputValue}</p>
      <textarea name="area" id="area" rows="10" cols="50" onPaste={handleAreaPaste} onChange = {handleAreaChange}  ></textarea>
    </div>
  )
}

export default KeyboardClipboard