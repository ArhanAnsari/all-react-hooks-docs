import React from 'react';

function EffectExample() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = Count: ${count};
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default EffectExample;
