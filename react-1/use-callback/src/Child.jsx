import React,{ useState } from "react";

const ChildComponent = React.memo((props) => {
  console.log("Re-render");

  return (
    <>
      <button >{props.buttontext}</button>
    </>
  );
});

export default ChildComponent;
