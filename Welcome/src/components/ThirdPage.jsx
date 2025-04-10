import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react'; // Added Home icon
import PuzzleDifficulty from '../pages/PuzzleDifficulty';

const ThirdPage = () => {
  const controls = useAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    controls.start({
      rotateY: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    });
  }, [controls]);

  const handleBack = () => navigate('/second');
  const handleHome = () => navigate('/');
  const handleContact = () => navigate('/contact');

  return (
    <motion.div
      className="h-screen w-screen flex flex-col items-center justify-center text-white relative"
      initial={{ rotateY: 180 }}
      animate={controls}
      style={{
        background: 'linear-gradient(to bottom right, #FFFFFF, #6D1799)',
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
      }}
    >
      {/* Top Navigation */}
      <div className="absolute top-4 left-4 z-50">
        <button
          onClick={handleBack}
          className="bg-white text-gray-800 p-2 rounded-full shadow hover:bg-gray-200"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={handleHome}
          className="bg-white text-gray-800 p-2 rounded-full shadow hover:bg-gray-200"
        >
          <Home className="w-5 h-5" />
        </button>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-8">Choose Your Fun</h1>

      {/* Main Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button
          className="px-6 py-4 bg-white text-blue-600 rounded shadow hover:bg-blue-100 transition"
          onClick={() =>
            navigate({ pathname: '/puzzle', state: { component: <PuzzleDifficulty /> } })
          }
        >
          🧩 Mini Puzzle
        </button>
        <button
          className="px-6 py-4 bg-white text-purple-600 rounded shadow hover:bg-purple-100 transition"
          onClick={() => navigate('/this-or-that')}
        >
          ⚖️ This or That
        </button>
        <button
          className="px-6 py-4 bg-white text-pink-600 rounded shadow hover:bg-pink-100 transition"
          onClick={() => navigate('/mood-picker')}
        >
          🎨 Mood Picker Canvas
        </button>
      </div>

      {/* Bottom Contact Button */}
      <div className="absolute bottom-6">
        <button
          onClick={handleContact}
          className="bg-white text-gray-700 px-5 py-2 rounded-full shadow hover:bg-gray-200 transition"
        >
          📞 Contact Me
        </button>
      </div>
    </motion.div>
  );
};

export default ThirdPage;
