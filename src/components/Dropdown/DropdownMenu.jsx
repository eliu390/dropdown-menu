import React from 'react';

/*
 * Renders the list of selectable options.
 */
function DropdownMenu({ data, onSelect, selected }) {
  return (
    <div className="dropdown-menu">
      <ul>
        {data && data.map((item, index) => 
          <div
            className={`dropdown-item ${selected[index] ? 'selected' : ''}`}
            key={index}
            onClick={() => onSelect(index)}
          >
            {item}
          </div>
        )}
      </ul>
    </div>
  );
}

export default DropdownMenu;
