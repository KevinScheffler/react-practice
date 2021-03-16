import React, { useState, useEffect } from 'react'
import './CountButton.css';

function CountButton(props) {

    const [currentCount, setCurrentCount] = useState(0);

    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
    }

    useEffect(() => {
        console.log(currentCount)
        if(currentCount === 10) {
           setCurrentCount(0)
        }
    }, [currentCount])

    
    return (
        <div>
            <button onClick={handleClick}>+{props.incrementBy}</button>
            <div className='count-display'>{currentCount}</div>
        </div>
    )
}

export default CountButton;
