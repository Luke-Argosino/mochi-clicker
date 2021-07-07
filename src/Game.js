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

    const imageClick = () => {
        document.getElementById("mochi").src='../assets/mochi_hit.png'
    }
    
    const imageClickReset = () => {
        document.getElementById("mochi").src='../assets/mochi.png'
    }

    return (
        <div className="Game">
            <div><h1>{counter}</h1></div>
            <img id="mochi" alt="mochi" src={window.location.origin + '/assets/mochi.png'} onMouseDown={handleDownClick} onMouseUp={handleUpClick}/>
        </div>
    )
}

export default Game;