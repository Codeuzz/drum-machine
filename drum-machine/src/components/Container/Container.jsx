import "./Container.css"
import { Keyboard } from "../Keyboard/Keyboard"
import { Reglages } from "../Reglages/Reglages"
import { useState } from "react";

export function Container() {
    const [isBankChecked, setIsBankChecked] = useState(false);
    const [power, setPower] = useState(false)

    const handleCheckboxChange = (e) => {
        setIsBankChecked(e.target.checked);
    };

    const handlePowerChange = e => {
        setPower(e.target.checked)
    }

    return (
        <div id="container">
            <Keyboard isBankChecked={isBankChecked} power={power} />
            <Reglages isBankChecked={isBankChecked} onCheckboxChange={handleCheckboxChange} power={power} handlePowerChange={handlePowerChange} />
        </div>
    )
}