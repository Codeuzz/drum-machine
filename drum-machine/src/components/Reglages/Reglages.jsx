import "./Reglages.css";

export function Reglages() {

    const displayVol = e => {
     const volumeRange = document.getElementById('range-input').value
     const displayer= document.getElementById('displayer')
     displayer.textContent = `Volume: ${volumeRange}`
     if(displayer.textContent !== '') {
        setTimeout(() => {
            displayer.textContent = '';
        }, 2000);
    }
}

    return (
          <div id="reglages">
            <div className="toggle-switch">
                <p>Power</p>
                <label className="switch">
                    <input className="checkbox" type="checkbox"/>
                    <span className="slider"></span>
                </label>
            </div>
            <div id="displayer"></div>
            <input onChange={displayVol} className="range" id="range-input" type="range" min={1} max={100} />
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