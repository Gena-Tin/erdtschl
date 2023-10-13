import React, { useState, useEffect } from "react";

function Counter(props) {
  const { number } = props;
  const [count, setCount] = useState(0);
  const step = number > 0 ? number / 100 : 1; // определяем шаг в зависимости от числа

  useEffect(() => {
    const increment = () => {
      if (count < number) {
        setCount((prevCount) => prevCount + step);
      }
    };

    const interval = setInterval(increment, 10);

    return () => clearInterval(interval);
  }, [count, number, step]);

  return <>{Math.round(count)}</>;
}

export default Counter;
