/* eslint-disable react/prop-types */
import React from "react";
const InputText = ({ nameid, name, className, type }) => {
  return (
    <>
      <input
        className={`text-white placeholder-color-text px-3 py-1.5  border bg-color-primary border-zinc-600 rounded-lg ${className} `}
        type={type}
        name={nameid}
        id=""
        placeholder={name}
      />
    </>
  );
};

export default React.memo(InputText);
