import React from 'react';
import caretDown from '../../assets/Dropdown/caretDown.png'
import caretUp from '../../assets/Dropdown/caretUp.png'

/*
 * Renders box that displays currently selected options.
 * Clicking this box opens the DropdownMenu.
 */
function DropdownDisplay({ displayData, isOpen, onClick }) {
  return (
    <div className="dropdown-box" onClick={onClick}>
      {/* Horizontally scrollable */}
      <div className="dropdown-text">
        {displayData}
      </div>
      {/* Hides the text as it overflows under the caret */}
      <div className="dropdown-caret-container">
        <img className="dropdown-caret" draggable={false} src={isOpen ? caretUp : caretDown} />
      </div>
    </div>
  );
}

export default DropdownDisplay;
