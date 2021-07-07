import { render } from '@testing-library/react'
import React, {useState} from 'react'

function Game() {
    const [counter, setCounter] = useState(0)
    const handleClick = () => {
        imageClick()
        setCounter(counter + 1)
    }
    return (
        <div className="Game">
            <div>{counter}</div>
            <img id="mochi" src={window.location.origin + '/assets/mochi.png'} onClick={handleClick}/>
            
        </div>
    )
}

const imageClick = () => {
    document.getElementById("mochi").src='../assets/mochi_hit.png'
}

export default Game;