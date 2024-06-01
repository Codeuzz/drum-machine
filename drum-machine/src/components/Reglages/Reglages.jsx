import { useState } from "react";
import "./Reglages.css";
import { useEffect } from "react";


export function Reglages({ isBankChecked, onCheckboxChange, handlePowerChange, power }) {
    const [volume, setVolume] = useState(50);


    useEffect(() => {
        const volumeRange = document.getElementById('range-input');
        if (volumeRange) {
            volumeRange.disabled = !power;
        }
    }, [power]);
    const displayVol = e => {
        const volumeRange = document.getElementById('range-input')

        if(power) {
            const displayer= document.getElementById('display')
            displayer.textContent = `Volume: ${volumeRange.value}`;
            setVolume(volumeRange.value)

            if(displayer.textContent !== '') {
               setTimeout(() => {
                   displayer.textContent = '';
               }, 2000);
           }
        } 
    
}


    return (
          <div id="reglages">
            <div className="toggle-switch">
                <p>Power</p>
                <label className="switch">
                    <input 
                        className="checkbox" 
                        type="checkbox"
                        checked={power}
                        onChange={handlePowerChange}
                        />
                    <span className="slider"></span>
                </label>
            </div>
            <div id="display"></div>
            <input 
                onChange={displayVol} 
                className="range" 
                id="range-input" 
                type="range" 
                min={0} 
                max={100} 
                value={volume}
                disabled={!power}
                />
            <div className="toggle-switch">
                <p>Bank</p>
                <label className="switch">
                    <input 
                        id="bank" 
                        className="checkbox" 
                        type="checkbox" 
                        checked={isBankChecked}
                        onChange={onCheckboxChange}
                    />
                    <span className="slider"></span>
                </label>
            </div>
          </div> 
    )
}