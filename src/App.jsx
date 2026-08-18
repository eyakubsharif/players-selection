import { react, Suspense, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayer from './components/SelectedPlayer/SelectedPlayer'
import { toast, ToastContainer } from 'react-toastify'
import Banner from './components/Banner/Banner'

const fetchPlayers = async()=>{
  const res = await fetch('players.json')
  return res.json()
}

const playerPromise = fetchPlayers()
function App() {
  const [toggle,setToggle] =useState(true);
const [availableBalance,setAvailableBalance]=useState(5000000)
const [choosePlayer,setChoosePlayer]=useState([])

  const handleToggle =(toggle)=>{
    setToggle(toggle)
  }

  const removePlayer =(p)=>{
    const filter = choosePlayer.filter((ply)=>ply.player_name !== p.player_name);
    setChoosePlayer(filter)
    setAvailableBalance(availableBalance+p.price)
    toast.warning(`${p.player_name} removed successfully`)
  }

  return (
    <div className='min-h-screen text-black  bg-gray-200'>
      <div className='w-11/12 mx-auto py-5 '>
         <Navbar availableBalance={availableBalance}></Navbar>
         <Banner></Banner>
         <div className='flex justify-between items-center py-5'>
            <h1 className='font-bold text-2xl'>{toggle?"Available Players":"Selected Players"}</h1>
            <div className='border   rounded-2xl flex gap-2 items-center'>
              <button onClick={()=>handleToggle(true)} className={`${toggle?"bg-yellow-300":""} px-5 py-2 rounded-l-2xl`}>Available</button>
              <button onClick={()=>handleToggle(false)} className={`${toggle?"":"bg-yellow-300"} px-5 py-2 rounded-r-2xl`}>Selected ({`${choosePlayer.length}`})</button>
            </div>
         </div>
         {/* /toggle section  */}
         <div>
              {
                toggle?<Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
                <AvailablePlayers
                setAvailableBalance={setAvailableBalance}
                availableBalance={availableBalance}
                playerPromise={playerPromise}
                choosePlayer={choosePlayer}
                setChoosePlayer={setChoosePlayer}
                ></AvailablePlayers>
              </Suspense>:<SelectedPlayer removePlayer={removePlayer} choosePlayer={choosePlayer}></SelectedPlayer>
              }
         </div>
          
          
      </div>

      <ToastContainer />
    </div>
  )
}

export default App
