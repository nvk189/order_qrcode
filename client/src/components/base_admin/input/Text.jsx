/* eslint-disable react/prop-types */
import React from "react";
const Text = ({ className, name, number }) => {
  return (
    <>
      <span
        className={` text-white placeholder-color-text px-3 py-1.5  border bg-slate-800 border-zinc-600 rounded-lg ${className} `}
      >
        {name} : {number}
      </span>
    </>
  );
};

export default React.memo(Text);
