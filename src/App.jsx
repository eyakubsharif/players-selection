import { react, Suspense } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'

const fetchPlayers = async()=>{
  const res = await fetch('players.json')
  return res.json()
}

const playerPromise = fetchPlayers()

function App() {
  

  return (
    <div className='min-h-screen text-black  bg-gray-100'>
      <div className='max-w-[1200px] mx-auto py-5 '>
         <Navbar></Navbar>
          <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
              <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
          </Suspense>
      </div>
    </div>
  )
}

export default App
