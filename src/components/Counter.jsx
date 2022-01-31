import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCountState] = useState(0);
  const [visible, setVisibleState] = useState(false);

  const operationHandler = (operation) => {
    /*     operation === "increase" ? setCountState((prev) => prev + 1) : null;
    operation === "decrease" ? setCountState((prev) => prev - 1) : null; */

    operation === "increase" && setCountState((prev) => {
        const counter = prev +1;
        (counter > 0) && setVisibleState (true)
        return counter
      });
     
    operation === "decrease" && setCountState((prev) => {
        const counter = prev -1;
        (counter === 0) && setVisibleState (false)
        return counter
      });
      // por que no comprobar si es 0 aqui? (Y)
      // fun fact, la funcion para cambiar el estado si es asincrona
      // if (count === 0) {
      //   setVisibleState(false)
      // } else {
      //   setVisibleState(true)
      //   setCountState(count - 1);
      // }

    
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => operationHandler("increase")}>Increase</button>
      {visible &&  <button onClick={() => operationHandler("decrease")}>Decrease</button>} 
     {/*  <button disabled={!visible} onClick={() => operationHandler("decrease")}>
        Decrease
      </button> */}
    </>
  );
};

export default Counter;
