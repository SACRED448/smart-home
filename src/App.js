import React from 'react'
import Header from './components/Header'
import Selector from './components/Selector';

function App() {
  return (
    <div>
      <Header />
      <div className="container mt-5">
          <h1>Настройка устройств:</h1>
          <Selector />
      </div>
        </div>
  );
}

export default App;