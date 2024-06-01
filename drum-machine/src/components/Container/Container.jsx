import "./Container.css"
import { Keyboard } from "../Keyboard/Keyboard"
import { Reglages } from "../Reglages/Reglages"
import { useState } from "react";

export function Container() {
    const [isBankChecked, setIsBankChecked] = useState(false);
    const [power, setPower] = useState(false);
    const [bank, setBank] = useState("Heater Kit")


    const handleCheckboxChange = (e) => {
        if(power) {
            setIsBankChecked(e.target.checked);
        if(bank === 'Heater Kit') {
            setBank('Smooth Piano Kit')
        } else {
            setBank('Heater Kit')
        }

        const displayer= document.getElementById('display')
        displayer.textContent = bank;
        if(displayer.textContent !== '') {
        setTimeout(() => {
            displayer.textContent = '';
        }, 2000);
    }
        } 
        
    };

    const handlePowerChange = e => {
        if(power === true) {
            setPower(e.target.checked)
            document.getElementById('display').textContent = ''
        } else {
            setPower(true)
        }
    }

    return (
        <div id="container">
            <Keyboard isBankChecked={isBankChecked} power={power} />
            <Reglages 
                isBankChecked={isBankChecked} 
                onCheckboxChange={handleCheckboxChange} 
                power={power} 
                handlePowerChange={handlePowerChange}
            />
        </div>
    )
}