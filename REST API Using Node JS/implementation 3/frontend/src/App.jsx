import { useEffect, useState } from 'react'
import axios from 'axios';

import './App.css'

function App() {
  
  const [cars,setCars]=useState([]);
  useEffect(()=>{
    axios.get('/api/cars').then((response)=>{
      setCars(response.data);
    }).catch((error)=>{
      console.log(error);
    })
  })


  return (
    <>
      <h1>Divyansh's cars Workshop</h1>
      <p>CARS: {cars.length}</p>
      {cars.map((car) => (
      <div key={car.id} className="d-flex gap-2 align-items-center mb-2">
          <h3 className="fw-bold">{car.company}</h3>
      <h4 className="text-muted">{car.model}</h4>
      </div>
))}
    </>
  )
}

export default App
