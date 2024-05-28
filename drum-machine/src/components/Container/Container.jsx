import "./Container.css"
import { Keyboard } from "../Keyboard/Keyboard"
import { Reglages } from "../Reglages/Reglages"

export function Container() {
    return (
        <div id="container">
            <Keyboard />
            <Reglages />
        </div>
    )
}