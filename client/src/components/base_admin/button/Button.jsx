/* eslint-disable react/prop-types */

import React from "react";
const Button = ({ name, onclick, className }) => {
  return (
    <button type="button" className={`${className}`} onClick={onclick}>
      {name}
    </button>
  );
};

export default React.memo(Button);
