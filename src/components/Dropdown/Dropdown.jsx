import React, { useEffect, useMemo, useState } from 'react';
import DropdownDisplay from './DropdownDisplay';
import DropdownMenu from './DropdownMenu';
import DropdownOptions from './DropdownOptions';

import getData from '../../utils/getData.js';

/*
 * Parent component that handles data fetching and state management.
 */
function Dropdown({ header, isBigData }) {
  // array of strings
  const [data, setData] = useState([]);
  const [isMultiSelect, setIsMultiSelect] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // array of same length as data
  // selected[i] = if data[i] is currently selected
  const [selected, setSelected] = useState([]);

  // prettified string of current selections
  const displayData = useMemo(() => {
    const displayData = data
      .filter((_, index) => selected[index])
      .join(', ');
    
    return displayData.length > 0 ? displayData : `Select an option (${data.length})`;
  }, [selected]);

  // handles click on item from dropdown
  const onSelect = (index) => {
    const newSelected = isMultiSelect
      ? [...selected]
      : new Array(selected.length).fill(false);
    newSelected[index] = !selected[index];
    setSelected(newSelected);
  };

  // handles click on multiselect checkbox
  const onSetIsMultiSelect = () => {
    if (isMultiSelect) {
      // when going from multiselect allow to disallow, remove all selected but first
      setIsMultiSelect(false);
      const newSelected = new Array(selected.length).fill(false);
      const firstSelected = selected.findIndex(bool => bool); // returns -1 if none found
      newSelected[firstSelected] = firstSelected !== -1;
      setSelected(newSelected);
    } else {
      setIsMultiSelect(true);
    }
  }

  // handles click on select all and clear all buttons
  const onSelectAll = (bool) => {
    const newSelected = new Array(selected.length).fill(bool)
    setSelected(newSelected);
  }

  // get mock data
  useEffect(() => {
    getData(isBigData)
      .then(value => {
        setData(value.data);
        const selected = new Array(value.data.length).fill(false);
        setSelected(selected);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="dropdown-container">
      <div className="dropdown-header">
        {header}
      </div>
      <DropdownOptions
        header={isBigData ? "Big data" : "Not big data"}
        isMultiSelect={isMultiSelect}
        onSelectAll={onSelectAll}
        onSetIsMultiSelect={onSetIsMultiSelect}
      />
      <DropdownDisplay
        displayData={displayData}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && 
        <DropdownMenu
          data={data}
          onSelect={onSelect}
          selected={selected}
        />
      }
    </div>
  );
}

export default Dropdown;
