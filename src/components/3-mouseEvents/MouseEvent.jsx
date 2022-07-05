
import { useState } from 'react';
import { FaReact } from 'react-icons/fa';
import { FaEvernote } from 'react-icons/fa';

const MouseEvent = () => {
  

  const [visible, setVisible] = useState(false);
  const [toggleBg, setToggleBg] = useState(false);

  
  const [coordX, setCoordX] = useState();
  const [coordY, setCoordY] = useState();




  const handleDoubleClick = (e)=>{
    setToggleBg(true);
    toggleBg ? (e.target.className = 'bg-danger text-light w-50 p-4 mt-4') : (e.target.className = 'bg-success text-light w-50 p-4 mt-4')
  }


   //? mouseMove event
   const handleMouseMove = (e) => {
    //! Goreceli koordinatlar
    // setCoordX(e.nativeEvent.offsetX);
    // setCoordY(e.nativeEvent.offsetY);

    //! Sayfaya göre koordinatlar
    setCoordX(e.pageX);
    setCoordY(e.pageY);
  };

 
    

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>

      <div
        id="todo-1"
        className="bg-success text-light w-50 p-4"
        onMouseEnter={()=>setVisible(true)}
        onMouseLeave = {()=>setVisible(false)}
       
      >
        todo item 1 <FaReact />
      </div>
      {visible && <span>This is a example</span>}

      <div
        id="todo-2"
        className="bg-success text-light w-50 p-4 mt-4"
        onDoubleClick = {handleDoubleClick}
  
      
      >
        todo item 2 <FaEvernote />
      </div>

      <div
        id="todo-3"
        className="bg-success text-light w-50 p-4 my-4"
        onMouseMove={handleMouseMove}
        
      >
        todo item 3 <FaReact />
      </div>

      <p>X and Y</p>
      <p className="text-danger fw-bold">

      {coordX} {coordY}
     
      </p>
    </div>
  );
};

export default MouseEvent;
