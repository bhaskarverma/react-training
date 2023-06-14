import { useEffect, useState } from "react";

function SecondComponent() {
  const [value, setValue] = useState(10);
  const [twiceValue, setTwiceValue] = useState(20);

  useEffect(() => {
    setTwiceValue(value * 2);
  }, [value]);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  return (
    <>
      <p>{value}</p>
      <p>{twiceValue}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default SecondComponent;
