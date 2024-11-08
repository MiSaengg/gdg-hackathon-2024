import React, {useState} from 'react'

// Weather information box
const WeatherInformation = () => {

  const [showWeather, setShowWeather] = useState(false); // State to manage weather box visibility
  const toggleWeather = () => setShowWeather((prev) => !prev); // Toggle weather box visibility

  return (
    <div style={{
      position: 'fixed',
      top: 10, // Position it at the top
      left: 10, // Position it on the left
      zIndex: 1, // Ensures it's above the canvas
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
      overflow: 'hidden', // Hide overflow for animation
      transition: 'max-height 0.5s ease', // Smooth transition for expanding
      maxHeight: showWeather ? '300px' : '50px', // Expandable height
      width: '200px',
    }}>
      <div style={{ padding: '10px', cursor: 'pointer' }} onClick={toggleWeather}>
        <h4>Weather Information</h4>
      </div>
      {showWeather && (
        <div style={{ padding: '10px', backgroundColor: 'rgba(240, 240, 240, 0.9)' }}>
          <p>Temperature: 20°C</p>
          <p>Condition: Sunny</p>
          <p>Humidity: 50%</p>
        </div>
      )}
    </div>
  )
}


export default WeatherInformation