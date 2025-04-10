import React from 'react';
import PuzzleGame from '../../components/PuzzleGame/PuzzleGame';

const MediumPuzzle = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50">
      <h1 className="text-3xl font-semibold mb-4 text-purple-700">Medium Puzzle</h1>
      <PuzzleGame level="Medium" />
    </div>
  );
};

export default MediumPuzzle;
