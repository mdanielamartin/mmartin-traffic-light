import React, { useState, useEffect, useRef } from "react";


const TrafficLight = () => {

    const [activeButton, setButton] = useState(null)
    const [cyclingStatus, setCycling] = useState(false);
    const [disableButton, setDisable] = useState(true);
    const buttons = ['red', 'yellow', 'green']
    const intervalId = useRef(null);

    const activateButton = (e) => {
        setButton(e.target.value)
    }

    useEffect(() => {
        if (cyclingStatus) {
            setButton(buttons[0])
            setDisable(false)
            let index = 1;
            intervalId.current = setInterval(() => {
                setButton(buttons[index])
                index = (index + 1) % buttons.length;
            }, 3000)
        } else if (!cyclingStatus) {
            clearInterval(intervalId.current);
            setButton(null);
            setCycling(null);
            setDisable(true);
        }

        return () => clearInterval(intervalId.current)
    }, [cyclingStatus])

    const activateCycling = () => {
        setCycling(true)
    }

    const deactivateCycling = () => {
        setCycling(false);
        setButton(null);
    }

    return (
        <div className="container">
            <div className="cycleButtons"> <button className='btn cycleStart' name='cycle' onClick={activateCycling}>Start Traffic Light Cycle</button>
                <button className='btn cycleStop' name='Stopcycle' onClick={deactivateCycling} disabled={disableButton}>Stop Traffic Light Cycle</button></div>
            <div className="traffic">
                <div className="stem"></div>
                <div className="lights">
                    <button value='red' className={`light red ${activeButton === 'red' ? 'glow' : ''}`} onClick={activateButton}></button>
                    <button value='yellow' className={`light yellow ${activeButton === 'yellow' ? 'glow' : ''}`} onClick={activateButton}></button>
                    <button value='green' className={`light green ${activeButton === 'green' ? 'glow' : ''}`} onClick={activateButton}></button>
                </div>
            </div>

        </div>
    );
};

export default TrafficLight;
