import React from 'react';

const api = {
  key: '7b26e7b383af27d1169ebff362c62d15',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {

  const dateBuilder = date => {
    const months = ['January', 'February', 
      'March', 'April', 
      'June', 'July', 
      'August', 'September', 
      'October', 'November', 
      'December'
    ]
    const days = ['Sunday', 'Monday', 
      'Tuesday', 'Wednesday', 
      'Thursday', 'Friday', 'Saturday'
    ]

    const day = days[date.getDay()]
    const convertedDate = date.getDate()
    const month = months[date.getMonth() - 1]
    const year = date.getFullYear()

    return `${day} ${convertedDate} ${month} ${year}`
  }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" 
            className="search-bar" 
            placeholder="Search..."
          />
        </div>
        <div className="location-box">
          <div className="location">Ponta Porã, BR</div>
          <div className="date">{dateBuilder (new Date ())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">45°C</div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
