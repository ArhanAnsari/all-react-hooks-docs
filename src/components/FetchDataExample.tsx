import { useState, useEffect } from 'react';

function FetchDataExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://example.org/products.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>Data: {data ? JSON.stringify(data) : 'Loading...'}</h1>
    </div>
  );
}

export default FetchDataExample;
