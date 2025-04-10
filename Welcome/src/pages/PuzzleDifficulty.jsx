import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PuzzleDifficulty = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 relative">
      {/* Back Arrow */}
      <button
        onClick={() => navigate('/third')}
        className="absolute top-4 left-4 bg-white text-gray-800 p-2 rounded-full shadow hover:bg-gray-200"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      <h1 className="text-4xl font-bold mb-6 text-gray-800">Select Puzzle Difficulty</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <button
          onClick={() => navigate('/puzzle/easy')}
          className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
        >
          🧩 Easy
        </button>
        <button
          onClick={() => navigate('/puzzle/medium')}
          className="px-8 py-4 bg-white text-yellow-600 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
        >
          🧩 Medium
        </button>
        <button
          onClick={() => navigate('/puzzle/hard')}
          className="px-8 py-4 bg-white text-red-600 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
        >
          🧩 Hard
        </button>
      </div>
    </div>
  );
};

export default PuzzleDifficulty;
