import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Counter
              name={'Counter A '}
              max={15}
              min={-20}
          />
          <Counter
              name={'Counter B '}
              max={3}
              min={-3}
          />
      </div>
    );
  }
}

export default App;
