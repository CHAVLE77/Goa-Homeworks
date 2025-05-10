import React from "react";
 const Plus = ({ plus, setCheck }) => {
  return (
    <>
    <button
      onClick={() => {
        plus();
        setCheck(true);
      }}
      className="w-30 h-9 bg-green-600 text-white  cursor-pointer m-2"
    >
      +
    </button>
    </>
  );
};

export default Plus