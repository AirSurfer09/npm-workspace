import { Button, useLocalStorage } from 'my-lib/react';
import { generateId, formatNumber, capitalize } from 'my-lib';

function App() {
  const [count, setCount] = useLocalStorage('count', 0);

  return (
    <div className="container">
      <h1>My Library - React Example</h1>
      
      <div>
        <Button onClick={() => setCount(count + 1)}>
          Count: {count}
        </Button>
      </div>

      <div>
        <p>ID: {generateId()}</p>
        <p>Number: {formatNumber(1234567)}</p>
        <p>Capitalized: {capitalize('hello world')}</p>
      </div>
    </div>
  );
}

export default App; 