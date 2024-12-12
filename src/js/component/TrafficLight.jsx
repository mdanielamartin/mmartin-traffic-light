import React,{useState} from "react";


const TrafficLight = () => {

    const [activeButton, setButton] = useState(null)
    const activateButton = (e) =>{
        setButton(e.target.value)
    }
	return (
		<div className="container">
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
