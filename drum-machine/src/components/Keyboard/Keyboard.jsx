import "./Keyboard.css";

export function Keyboard() {

    const playAudio = e => {
        const joe = document.getElementById('joe')
        const joeAudio = document.getElementById('joe-audio');
        joeAudio.currentTime = 0;
        joeAudio.play();
    }

    return (
        <div id="keyboard">
            <button onClick={playAudio} id="joe" className="key" value="A">A
                <audio id="joe-audio" src=".\src\audios\Heater-1.mp3"></audio>
            </button>
            <button className="key" value="Z">Z</button>
            <button className="key" value="E">E</button>
            <button className="key" value="Q">Q</button>
            <button className="key" value="S">S</button>
            <button className="key" value="D">D</button>
            <button className="key" value="W">W</button>
            <button className="key" value="X">X</button>
            <button className="key" value="C">C</button>

        </div>
    )
}