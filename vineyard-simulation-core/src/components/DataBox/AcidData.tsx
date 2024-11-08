import React from 'react'
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts'

const AcidData= () => {
  const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}]
  
  return (
    <div style={{
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      flexGrow: 1, // Allows the box to grow
      margin: '0 10px', // Adds margin between boxes
      height: '200px', // Increased height for better visualization
      padding: '10px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    }}>
      <h4>Acid Contains</h4>
      <ResponsiveContainer width="80%" height="70%">
        <LineChart width={100} height={100} data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}


export default AcidData