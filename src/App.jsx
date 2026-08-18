import { react, Suspense, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayer from './components/SelectedPlayer/SelectedPlayer'
import { ToastContainer } from 'react-toastify'

const fetchPlayers = async()=>{
  const res = await fetch('players.json')
  return res.json()
}

const playerPromise = fetchPlayers()
function App() {
  const [toggle,setToggle] =useState(true);
const [availableBalance,setAvailableBalance]=useState(5000000)
  const handleToggle =(toggle)=>{
    setToggle(toggle)
  }

  return (
    <div className='min-h-screen text-black  bg-gray-100'>
      <div className='max-w-[1200px] mx-auto py-5 '>
         <Navbar availableBalance={availableBalance}></Navbar>
         <div className='flex justify-between items-center py-5'>
            <h1 className='font-bold text-2xl'>{toggle?"Available Players":"Selected Players"}</h1>
            <div className='border   rounded-2xl flex gap-2 items-center'>
              <button onClick={()=>handleToggle(true)} className={`${toggle?"bg-yellow-300":""} px-5 py-2 rounded-l-2xl`}>Available</button>
              <button onClick={()=>handleToggle(false)} className={`${toggle?"":"bg-yellow-300"} px-5 py-2 rounded-r-2xl`}>Selected (0)</button>
            </div>
         </div>
         {/* /toggle section  */}
         <div>
              {
                toggle?<Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
                <AvailablePlayers
                setAvailableBalance={setAvailableBalance}
                availableBalance={availableBalance}
                playerPromise={playerPromise}></AvailablePlayers>
              </Suspense>:<SelectedPlayer></SelectedPlayer>
              }
         </div>
          
          
      </div>

      <ToastContainer />
    </div>
  )
}

export default App
