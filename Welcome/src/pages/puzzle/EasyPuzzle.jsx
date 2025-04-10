// src/pages/puzzle/EasyPuzzle.jsx

import React from 'react';
import PuzzleGame from '../../components/PuzzleGame/PuzzleGame';

const EasyPuzzle = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-6">
          🧩 Easy Puzzle Mode
        </h1>
        <PuzzleGame level="Easy" />
      </div>
    </div>
  );
};

export default EasyPuzzle;
