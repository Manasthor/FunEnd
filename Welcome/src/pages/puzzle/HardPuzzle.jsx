import React from 'react';
import PuzzleGame from '../../components/PuzzleGame/PuzzleGame';

const HardPuzzle = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50">
      <h1 className="text-3xl font-semibold mb-4 text-red-600">Hard Puzzle</h1>
      <PuzzleGame level="Hard" />
    </div>
  );
};

export default HardPuzzle;
