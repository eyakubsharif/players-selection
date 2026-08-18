import React from 'react';
import ChoosePlayer from '../ChoosePlayer/ChoosePlayer';

const SelectedPlayer = ({choosePlayer,removePlayer}) => {

    return (
        <div>
           {
            choosePlayer.map((player)=><ChoosePlayer removePlayer={removePlayer} player={player }></ChoosePlayer>)
           }
        </div>
    );
};

export default SelectedPlayer;