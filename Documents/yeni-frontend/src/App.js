import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://yeni-backend-029afdff767f.herokuapp.com/api/available-rides')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching rides:', error);
      });
  }, []);

  return (
    <div>
      <h1>Available Rides</h1>
      {data ? data.map(ride => (
        <div key={ride.id}>
          <p>{ride.riderName} - {ride.pickup} to {ride.destination}</p>
        </div>
      )) : <p>Loading rides...</p>}
    </div>
  );
}

export default App;
