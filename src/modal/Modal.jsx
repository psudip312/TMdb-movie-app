import React, { useState } from "react";
import "./Modal.css";

const ModelDesign = ({children,isOpen,closemodel}) => {


  return (
    <div>
      <div className="container">

        {isOpen && (
          <div className="popup" id="popup">
            <div className="popup-inner">
          {children}
              <a className="popup__close" href="#" onClick={closemodel}>X</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModelDesign;
