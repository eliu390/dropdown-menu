import React from 'react';

/*
 * Renders a checkbox for controlling whether multiselect is allowed,
 * and buttons for selecting and deselecting all options.
 */
function DropdownOptions({ isMultiSelect, onSelectAll, onSetIsMultiSelect }) {
  return (
    <div className="dropdown-options">
      <label>
        <input
          checked={isMultiSelect}
          onChange={onSetIsMultiSelect}
          className="checkbox"
          type="checkbox"
        />
        Allow multiple selections
      </label>
      <div>
        <button
          className="dropdown-button"
          disabled={!isMultiSelect}
          onClick={() => onSelectAll(true)}
        >
          Select All
        </button>
        <button 
          className="dropdown-button" 
          onClick={() => onSelectAll(false)}
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

export default DropdownOptions;
