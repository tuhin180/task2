import React from "react";

const ButtonIcon = ({ primaryicon, name, classes }) => {
  return (
    <div>
      <button
        className={`bg-blue-700 flex items-center text-white px-3 py-2 rounded-lg  ${classes}`}
      >
        {primaryicon}
        {name}
      </button>
    </div>
  );
};

export default ButtonIcon;
