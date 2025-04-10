import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Frontpage = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => {
      navigate('/second');
    }, 1000); // wait for animation to finish itself
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Left Half */}
      <motion.div
        initial={{ x: 0 }}
        animate={animate ? { x: '-100%' } : {}}
        transition={{ duration: 1 }}
        className="w-1/2 h-full absolute left-0 top-0 bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center"
      />

      {/* Right Half */}
      <motion.div
        initial={{ x: 0 }}
        animate={animate ? { x: '100%' } : {}}
        transition={{ duration: 1 }}
        className="w-1/2 h-full absolute right-0 top-0 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center"
      />

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
        <button
          onClick={handleClick}
          className="px-6 py-3 bg-white text-blue-600 rounded hover:bg-gray-200 transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Frontpage;
