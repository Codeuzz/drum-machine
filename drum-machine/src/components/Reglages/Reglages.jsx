import "./Reglages.css";

export function Reglages() {
    return (
          <div id="reglages">
            <div className="toggle-switch">
                <p>Power</p>
                <label className="switch">
                    <input className="checkbox" type="checkbox"/>
                    <span className="slider"></span>
                </label>
            </div>
            <div id="displayer">HAHAHAHA</div>
            <input className="range" id="range-input" type="range" min={1} max={100} />
            <div className="toggle-switch">
                <p>Bank</p>
                <label className="switch">
                    <input className="checkbox" type="checkbox"/>
                    <span className="slider"></span>
                </label>
            </div>
          </div> 
    )
}