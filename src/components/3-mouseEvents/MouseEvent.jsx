
import { useState } from 'react';
import { FaReact } from 'react-icons/fa';
import { FaEvernote } from 'react-icons/fa';

const MouseEvent = () => {
  

  const [visible, setVisible] = useState(false)
 
    

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
      
      >
        todo item 2 <FaEvernote />
      </div>

      <div
        id="todo-3"
        className="bg-success text-light w-50 p-4 my-4"
        
      >
        todo item 3 <FaReact />
      </div>

      <p>X and Y</p>
      <p className="text-danger fw-bold">
     
      </p>
    </div>
  );
};

export default MouseEvent;
