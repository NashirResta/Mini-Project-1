import React, { useState } from "react";

import { AiOutlineCloseCircle } from "react-icons/ai";

const DateModal = () => {
  const [date, setDate] = useState(false);

  const toggleDate = () => {
    setDate(!date);
  };

  return (
    // <div>
    //   <button onClick={toggleDate}>open</button>

    //   {date && (
    //     <div className="modal">
    //       <div className="modal-content">
    //         <button onClick={toggleDate}>
    //           <AiOutlineCloseCircle />
    //         </button>
    //         <h2>Input Date</h2>
    //         <input type="datetime-local" name="" id="" />
    //       </div>
    //     </div>
    //   )}
    // </div>

    <div>
      {date === true ? (
        <button onClick={toggleDate}>open</button>
      ) : (
        <div>
          <button onClick={toggleDate}>hapus</button>
          <button onClick={toggleDate}>edit</button>
        </div>
      )}
    </div>
  );
};

export default DateModal;
