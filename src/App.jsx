import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  let [isDisabled, setDisabled] = useState(true);

  function handleIncrement() {
    let newCount = count + 1;
    // 1, 2, 3, 4, ...
    setCount(newCount);
    setDisabled(false);
  }

  function handleReset() {
    setCount(0);
    setDisabled(true);
  }
  
  function handleDecrememnt() {
    if (count > 1) {
      let newCount = count - 1;
      setCount(newCount);
    } else if (count === 1) {
      let newCount = count - 1;
      setCount(newCount);
      setDisabled(true);
    } else {
      setCount(0);
      setDisabled(true);
    }
  }

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello JavaScript Class!</h1>
      <section>
        <button className={'reset'} onClick={handleReset}>
          Reset
        </button>
        <button className={'increment'} onClick={handleIncrement}>
          Increment
        </button>
        <button className={'decrement'} onClick={handleDecrememnt} disabled={isDisabled}>
          Decrement
        </button>
        <p>The button click count is: {count}</p>
      </section>
    </div>
  );
}

export default App;
