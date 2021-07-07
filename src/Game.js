import { render } from '@testing-library/react'
import React, {useState} from 'react'

function Game() {
    const [counter, setCounter] = useState(0)
    const handleDownClick = () => {
        imageClick()
        setCounter(counter + 1)
    }
    
    const handleUpClick = () => {
        imageClickReset()
    }

    return (
        <div className="Game">
            <div>{counter}</div>
            <img id="mochi" src={window.location.origin + '/assets/mochi.png'} onMouseDown={handleDownClick} onMouseUp={handleUpClick}/>    
        </div>
    )
}

const imageClick = () => {
    document.getElementById("mochi").src='../assets/mochi_hit.png'
}

const imageClickReset = () => {
    document.getElementById("mochi").src='../assets/mochi.png'
}

export default Game;