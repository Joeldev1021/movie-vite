import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useEffect } from 'react/cjs/react.development'
import { config } from './server'


function App() {
  const [data, setData] = useState(null)
  

 useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${config.API_KEY}`)
      .then(res => res.json())
      .then(data => setData(data.results))
  }, [])

   return (
    <div className="App">
       <h1>movie js</h1> 
      {data && data.map(movie => <p key={movie.id}>{movie.title}</p>)} 
    </div>
   );
}

export default App

