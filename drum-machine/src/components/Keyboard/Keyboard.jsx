import "./Keyboard.css";

import React, { useEffect, useRef } from 'react';

export function Keyboard({ isBankChecked, power }) {
    const buttonsRef = useRef([]);

    const audioFiles = [
        { key: 'A', file: './src/audios/Heater-1.mp3', fileB: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' },
        { key: 'Z', file: './src/audios/Heater-2.mp3', fileB: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' },
        { key: 'E', file: './src/audios/Heater-3.mp3', fileB: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' },
        { key: 'Q', file: './src/audios/Heater-4_1.mp3', fileB: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' },
        { key: 'S', file: './src/audios/Heater-6.mp3', fileB: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' },
        { key: 'D', file: './src/audios/Kick_n_Hat.mp3', fileB: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' },
        { key: 'W', file: './src/audios/RP4_KICK_1.mp3', fileB: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' },
        { key: 'X', file: './src/audios/Dsc_Oh.mp3', fileB: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' },
        { key: 'C', file: './src/audios/Cev_H2.mp3', fileB: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' },
    ];


    const playAudio = (audioId) => {
        const audioElement = document.getElementById(audioId);
        if (audioElement && power) {
            audioElement.currentTime = 0;
            audioElement.play();
        }
    };

    const handleButtonClick = (e) => {
        const buttonValue = e.target.value;
        const audioId = isBankChecked ? `${buttonValue}-audioB` : `${buttonValue}-audio`;
        playAudio(audioId);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            const button = buttonsRef.current.find(
                (btn) => btn.value.toLowerCase() === e.key.toLowerCase()
            );
            if (button) {
                const audioId = isBankChecked ? `${button.value}-audioB` : `${button.value}-audio`; 
                playAudio(audioId);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);

        };
    }, [isBankChecked, power]);

    return (
        <div id="keyboard">
            {audioFiles.map(({ key, file, fileB }, index) => (
                <button
                    key={key}
                    onClick={handleButtonClick}
                    ref={(el) => (buttonsRef.current[index] = el)}
                    className="key"
                    value={key}
                >
                    {key}
                    <audio id={`${key}-audio`} src={file}></audio>
                    <audio id={`${key}-audioB`} src={fileB}></audio>
                </button>
            ))}
        </div>
    );
}