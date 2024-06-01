import "./Container.css"
import { Keyboard } from "../Keyboard/Keyboard"
import { Reglages } from "../Reglages/Reglages"
import { useState } from "react";

export function Container() {
    const [isBankChecked, setIsBankChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        setIsBankChecked(e.target.checked);
    };

    return (
        <div id="container">
            <Keyboard isBankChecked={isBankChecked}  />
            <Reglages isBankChecked={isBankChecked} onCheckboxChange={handleCheckboxChange} />
        </div>
    )
}