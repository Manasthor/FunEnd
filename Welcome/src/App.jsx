import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Frontpage from './components/frontpage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import PuzzleDifficulty from './pages/PuzzleDifficulty';
import EasyPuzzle from './pages/puzzle/EasyPuzzle';
import MediumPuzzle from './pages/puzzle/MediumPuzzle';
import HardPuzzle from './pages/puzzle/HardPuzzle';
import ThisOrThat from './components/ThisorThat';
import MoodPicker from './components/MoodPicker';
import ContactPage from './components/ContactPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Frontpage />} />
            <Route path="/second" element={<SecondPage />} />
            <Route path="/third" element={<ThirdPage />} />
            <Route path="/puzzle" element={<PuzzleDifficulty />} />
            <Route path="/puzzle/easy" element={<EasyPuzzle />} />
            <Route path="/puzzle/medium" element={<MediumPuzzle />} />
            <Route path="/puzzle/hard" element={<HardPuzzle />} /> 
            <Route path="/this-or-that" element={<ThisOrThat />} />
            <Route path="/mood-picker" element={<MoodPicker />} />
            <Route path="/contact" element={<ContactPage />} />

        </Routes>
    );
}

export default App;
