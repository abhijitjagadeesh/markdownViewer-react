import React from "react";

const DropdownList = ({ elements, onchange }) => {
  return (
    <>
      <select onChange={onchange}>
        {elements.map((element) => (
          <option className="options" key={element.id} value={element.value}>
            {element.value}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropdownList;
