import React, { use } from 'react';
import PlayerCart from '../PlayerCard/PlayerCart';

const AvailablePlayers = ({playerPromise,setAvailableBalance,availableBalance}) => {
    const players =use(playerPromise)
    return (
        <div>
            <div className='grid grid-cols-3 gap-5 py-8'>
                {
                    players.map((player)=> <PlayerCart key={player.id} 
                     player={player}
                     setAvailableBalance={setAvailableBalance}
                     availableBalance={availableBalance}
                     ></PlayerCart>)
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;