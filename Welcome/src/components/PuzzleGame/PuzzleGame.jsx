import React, { useState, useEffect } from 'react';
import './PuzzleGame.css';
import { useNavigate } from 'react-router-dom';
import Image from '../../assets/Image.jpg'; // Check this resolves correctly

const PuzzleGame = ({ level = 'Easy' }) => {
  const gridSize = level === 'Easy' ? 2 : level === 'Medium' ? 3 : 4;
  const totalPieces = gridSize * gridSize;

  const [pieces, setPieces] = useState([]);
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const shuffled = Array.from({ length: totalPieces }, (_, i) => i).sort(() => Math.random() - 0.5);
    setPieces(shuffled);
  }, [totalPieces]);

  useEffect(() => {
    if (completed) {
      const timeout = setTimeout(() => {
        navigate('/third');
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [completed, navigate]);

  const handleDrop = (fromIndex, toIndex) => {
    const newPieces = [...pieces];
    [newPieces[fromIndex], newPieces[toIndex]] = [newPieces[toIndex], newPieces[fromIndex]];
    setPieces(newPieces);

    const isSolved = newPieces.every((val, idx) => val === idx);
    if (isSolved) {
      setCompleted(true);
    }
  };

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center bg-blue-50 p-4">
      {/* Back Arrow (Top Left of Page) */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-50 bg-gray-100 text-gray-800 px-3 py-2 rounded-full shadow hover:bg-gray-200 transition"
      >
        ←
      </button>

      {/* Puzzle Grid */}
      <div
        className="puzzle-container"
        style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
      >
        {pieces.map((piece, index) => {
          const row = Math.floor(piece / gridSize);
          const col = piece % gridSize;

          return (
            <div
              key={index}
              className="puzzle-piece"
              draggable
              onDragStart={(e) => e.dataTransfer.setData('index', index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                const fromIndex = parseInt(e.dataTransfer.getData('index'), 10);
                handleDrop(fromIndex, index);
              }}
              style={{
                backgroundImage: `url(${Image})`,
                backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`,
                backgroundPosition: `${(col * 100) / (gridSize - 1)}% ${(row * 100) / (gridSize - 1)}%`,
              }}
            />
          );
        })}
      </div>

      {/* Completion Message */}
      {completed && (
        <div className="win-message mt-4 text-xl font-bold text-green-600 bg-white p-4 rounded shadow">
          🎉 Puzzle Completed! Returning...
        </div>
      )}
    </div>
  );
};

export default PuzzleGame;
