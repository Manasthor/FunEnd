import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const moods = [
  { color: '#f87171', label: 'Angry', emoji: '😡' },
  { color: '#fbbf24', label: 'Happy', emoji: '😄' },
  { color: '#34d399', label: 'Calm', emoji: '😌' },
  { color: '#60a5fa', label: 'Focused', emoji: '🎯' },
  { color: '#a78bfa', label: 'Excited', emoji: '🤩' },
  { color: '#f472b6', label: 'Romantic', emoji: '🥰' },
  { color: '#d4d4d4', label: 'Meh', emoji: '😐' },
];

const quotes = [
  "You're doing great, keep going! 💪",
  "Every day is a new beginning 🌅",
  "You’ve got this 💫",
  "Smile, it's your superpower 😊",
  "The best is yet to come ✨",
  "You're stronger than you think 💥",
  "You are enough. Always. 💖",
];

const MoodPicker = () => {
  const canvasRef = useRef(null);
  const [selectedMood, setSelectedMood] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [quote, setQuote] = useState('');
  const navigate = useNavigate();

  // Drawing logic
  const startDrawing = (e) => {
    if (!selectedMood) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = selectedMood.color;
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing || !selectedMood) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setQuote(''); // Reset quote if mood changes
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setSelectedMood(null);
    setQuote('');
  };

  const handleDone = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);

    // Optionally redirect after 2s
    setTimeout(() => navigate('/third'), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-pink-100 to-blue-100 p-6 relative">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-white text-gray-800 px-4 py-2 rounded-full shadow hover:bg-gray-200"
      >
        ←
      </button>

      <h2 className="text-3xl font-bold mb-6">How are you feeling today?</h2>

      {/* Mood Options */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {moods.map((mood) => (
          <button
            key={mood.label}
            onClick={() => handleMoodSelect(mood)}
            className={`w-12 h-12 rounded-full shadow-md border-2 ${
              selectedMood?.label === mood.label ? 'border-black' : 'border-transparent'
            }`}
            style={{ backgroundColor: mood.color }}
            title={mood.label}
          >
            <span className="sr-only">{mood.label}</span>
          </button>
        ))}
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        className="bg-white rounded shadow-lg border border-gray-300 cursor-crosshair"
      />

      {/* Mood Summary */}
      {selectedMood && (
        <div className="mt-4 text-center text-lg font-semibold">
          You’re feeling <span className="font-bold">{selectedMood.label}</span> {selectedMood.emoji}
        </div>
      )}

      {/* Uplifting Quote */}
      {quote && (
        <div className="mt-4 text-center text-xl font-medium text-purple-800 bg-white p-4 rounded shadow">
          {quote}
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={handleClear}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
        >
          Clear
        </button>
        <button
          onClick={handleDone}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default MoodPicker;
