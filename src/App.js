import React from 'react';

const api = {
  key: '7b26e7b383af27d1169ebff362c62d15',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="seach-box">
          <input type="text" 
            className="seach-bar" 
            placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
