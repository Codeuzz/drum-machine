import "./Reglages.css";

export function Reglages({isBankChecked, onCheckboxChange, handlePowerChange, power}) {

    const displayVol = e => {
     const volumeRange = document.getElementById('range-input').value
     const displayer= document.getElementById('display')
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
            <input onChange={displayVol} className="range" id="range-input" type="range" min={1} max={100} />
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