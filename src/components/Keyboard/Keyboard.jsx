import "./Keyboard.css";

import React, { useEffect, useRef } from 'react';

export function Keyboard({ isBankChecked, power, volume }) {
    const buttonsRef = useRef([]);

    const audioFiles = [
        { name: "Heater 4", nameB: "Chord 1", 
            key: 'Q', file: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3', fileB: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' },
        { name: "Kick", nameB: "Chord 2",
            key: 'W', file: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3', fileB: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' },
        { name: "Heater 3", nameB: "Chord 3", 
            key: 'E', file: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3', fileB: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' },
        { name: "Heater 1", nameB: "Shaker",
            key: 'A', file: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3', fileB: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' },
        { name: "Clap", nameB: "Open HH",          
            key: 'S', file: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3', fileB: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' },
        { name: "Kick n' Hat", nameB: "Closed HH", 
            key: 'D', file: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3', fileB: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' },
        { name: "Heater 2", nameB: "Punchy Kick", 
            key: 'Z', file: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3', fileB: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' },
        { name: "Open HH",  nameB: "Side Stick",
            key: 'X', file: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3', fileB: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' },
        { name: "Closed HH", nameB: "Snare",
            key: 'C', file: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3', fileB: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' },
    ];


    const playAudio = (audioId) => {
        const audioElement = document.getElementById(audioId);
        if (audioElement && power) {
            audioElement.currentTime = 0;
            audioElement.play();
        }
    };

    const handleButtonClick = (e) => {
        e.preventDefault();
        const button = e.target; 
        const buttonValue = button.value;
        const audioId = buttonValue;
        playAudio(audioId);

        if(power) {
            button.classList.add('active');
            setTimeout(() => {
                button.classList.remove('active');
            }, 100);
        }
       

        const displayer = document.getElementById("display");
        const audio = audioFiles.find(audio => audio.key === buttonValue);
        if (audio && power) {
            displayer.textContent = isBankChecked ? audio.nameB : audio.name;
        }
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            const button = buttonsRef.current.find(
                (btn) => btn.value.toLowerCase() === e.key.toLowerCase()
            );
            if (button) {
                const audioId = button.value;
                playAudio(audioId);

                if(power) {
                    button.classList.add('active');
                    setTimeout(() => {
                        button.classList.remove('active');
                    }, 100);
                }

                const displayer = document.getElementById("display");
                const audio = audioFiles.find(audio => audio.key === button.value);
                if (audio && power) {
                    displayer.textContent = isBankChecked ? audio.nameB : audio.name;
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isBankChecked, power]);

    useEffect(() => {
        if (buttonsRef.current && buttonsRef.current.length > 0) {
            buttonsRef.current.forEach((button) => {
                if (button) {
                    const audioElement = button.querySelector('audio');
                    if (audioElement) {
                        audioElement.volume = volume / 100;
                    }
                }
            });
        }
    }, [volume]);

    return (
        <div id="keyboard">
            {audioFiles.map(({ name, nameB, key, file, fileB }, index) => (
                <button
                    key={key}
                    id={isBankChecked ? nameB : name}
                    onClick={handleButtonClick}
                    ref={(el) => (buttonsRef.current[index] = el)}
                    className="drum-pad"
                    value={key}
                    
                >
                    {key}
                    <audio id={key} src={isBankChecked ? fileB : file} className="clip"></audio>
                </button>
            ))}
        </div>
    );
}