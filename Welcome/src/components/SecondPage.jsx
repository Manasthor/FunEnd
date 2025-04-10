import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const SecondPage = () => {
  const navigate = useNavigate();
  const controls = useAnimation();

  const handlePull = async () => {
    // Animate slide to left
    await controls.start({
      x: '-100%',
      transition: { duration: 0.6, ease: 'easeInOut' },
    });
    navigate('/third');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <motion.div
      className="h-screen w-screen flex flex-col items-center justify-center text-white relative overflow-hidden"
      initial={{ x: 0 }}
      animate={controls}
      style={{
        background: 'linear-gradient(to bottom right, #6D1799, #BF6AF2, #FDCBFF)',
      }}
    >
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 bg-white text-gray-800 p-2 rounded-full shadow hover:bg-gray-200 z-50"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">About Me</h1>

      {/* Description */}
      <p className="text-center max-w-xl px-6 text-lg font-medium">
        I'm a passionate frontend developer who blends creativity with functionality,
        building sleek, responsive interfaces with modern web technologies.
      </p>

      {/* Pull Me Button */}
      <button
        onClick={handlePull}
        className="absolute top-1/4 right-4 bg-white text-purple-700 font-bold px-6 py-3 rounded-l-full shadow hover:bg-purple-100 transition-all z-50"
      >
        Pull Me →
      </button>
    </motion.div>
  );
};

export default SecondPage;
