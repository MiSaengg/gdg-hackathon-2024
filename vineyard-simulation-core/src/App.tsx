import React, { useState } from 'react';
import VineyardScene from './components/VineyardScene';
import SugarData from './components/DataBox/SugarData';
import AcidData from './components/DataBox/AcidData';
import MalicAcidData from './components/DataBox/MalicAcidData';
import WeatherInformation from './components/WeatherInformation';

const App: React.FC = () => {
  const [grapeColor, setGrapeColor] = useState('#8B0000'); // Default grape color
  // const [showWeather, setShowWeather] = useState(false); // State to manage weather box visibility

  // const toggleWeather = () => setShowWeather((prev) => !prev); // Toggle weather box visibility

  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
      <div style={{
        position: 'fixed',
        top: 10, // Position it near the top
        right: 10, // Position it on the right
        zIndex: 1, // Ensures it's above the canvas
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
        width: '200px', // Width of the box
        height: '200px', // Height of the box
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
      }}>
        Meh
      </div>

      {/* Centered Color Input at Top -> This should be changed to time changed value */}
      <div style={{
        position: 'absolute',
        top: 10, // Position it at the top
        left: '50%',
        transform: 'translateX(-50%)', // Center horizontally
        zIndex: 1, // Ensures it's above the canvas
      }}>
        <input
          type="range"
          min = "0"
          max = "100"
          onChange={(e) => setGrapeColor(e.target.value)}
          style={{ width: '100px', height: '50px', cursor: 'pointer' }} // Adjusted size for visibility
        />
      </div>

      <VineyardScene />

      {/* Expandable Weather Box */}
      <WeatherInformation />

      <div style={{
        position: 'fixed',
        bottom: 10, // Position it at the bottom
        left: 10, // Align it to the left
        right: 10, // Align it to the right
        zIndex: 1, // Ensures it's above the canvas
        display: 'flex',
        flexDirection: 'row', // Arrange boxes in a row
        justifyContent: 'space-between', // Space boxes evenly
      }}>
        {/* Box 1 */}
        <SugarData />
        
        {/* Box 2 */}
        <AcidData />
        
        {/* Box 3 */}
        <MalicAcidData />
      </div>
    </div>
  );
};

export default App;
