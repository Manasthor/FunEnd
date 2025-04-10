import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
  { optionA: 'Mountains', optionB: 'Beach', traitA: 'Adventurous', traitB: 'Relaxed' },
  { optionA: 'Books', optionB: 'Movies', traitA: 'Thoughtful', traitB: 'Creative' },
  { optionA: 'Early Bird', optionB: 'Night Owl', traitA: 'Disciplined', traitB: 'Spontaneous' },
  { optionA: 'Solo Travel', optionB: 'Group Travel', traitA: 'Independent', traitB: 'Social' },
  { optionA: 'Logic', optionB: 'Emotion', traitA: 'Analytical', traitB: 'Empathetic' },
  { optionA: 'Organized', optionB: 'Go with the Flow', traitA: 'Structured', traitB: 'Flexible' },
  { optionA: 'Leader', optionB: 'Team Player', traitA: 'Confident', traitB: 'Collaborative' },
  { optionA: 'Fast-Paced Life', optionB: 'Slow and Steady', traitA: 'Energetic', traitB: 'Calm' },
  { optionA: 'Take Risks', optionB: 'Play it Safe', traitA: 'Bold', traitB: 'Cautious' },
  { optionA: 'Work First', optionB: 'Play First', traitA: 'Driven', traitB: 'Fun-Loving' },
];

const traitGroups = {
  Introvert: ['Thoughtful', 'Disciplined', 'Independent', 'Analytical', 'Structured'],
  Extrovert: ['Spontaneous', 'Social', 'Confident', 'Collaborative', 'Energetic'],
  Creative: ['Creative', 'Empathetic', 'Flexible', 'Fun-Loving'],
  Structured: ['Organized', 'Driven', 'Cautious'],
  GenZ: ['Go with the Flow', 'Night Owl', 'Movies', 'Play First'],
  OldSoul: ['Books', 'Early Bird', 'Work First', 'Logic'],
};

const ThisOrThat = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [traits, setTraits] = useState([]);
  const navigate = useNavigate();

  const handleChoice = (trait) => {
    const updatedTraits = [...traits, trait];
    setTraits(updatedTraits);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(questions.length);
    }
  };

  const calculateScores = () => {
    const groupScores = {};

    Object.entries(traitGroups).forEach(([group, traitList]) => {
      groupScores[group] = traitList.reduce((acc, trait) => {
        return acc + traits.filter((t) => t === trait).length;
      }, 0);
    });

    const total = Object.values(groupScores).reduce((acc, val) => acc + val, 0);

    const sortedGroups = Object.entries(groupScores)
      .map(([group, value]) => ({
        group,
        percentage: Math.round((value / total) * 100),
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 4); // show top 4

    return sortedGroups;
  };

  const topTraits = calculateScores();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-6 relative">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-white text-gray-800 px-4 py-2 rounded-full shadow hover:bg-gray-200"
      >
        ←
      </button>

      {currentQuestion < questions.length ? (
        <>
          <h2 className="text-3xl font-bold mb-6">This or That?</h2>
          <div className="bg-white p-6 rounded shadow w-full max-w-md text-center">
            <p className="text-xl font-medium mb-4">
              {questions[currentQuestion].optionA} or {questions[currentQuestion].optionB}
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => handleChoice(questions[currentQuestion].traitA)}
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
              >
                {questions[currentQuestion].optionA}
              </button>
              <button
                onClick={() => handleChoice(questions[currentQuestion].traitB)}
                className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600 transition"
              >
                {questions[currentQuestion].optionB}
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="bg-white p-6 rounded shadow w-full max-w-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Your Personality Index</h2>
          <div className="space-y-4">
            {topTraits.map((trait, index) => (
              <div key={index} className="text-left">
                <p className="font-medium mb-1">{trait.group}: {trait.percentage}%</p>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="h-4 rounded-full transition-all"
                    style={{
                      width: `${trait.percentage}%`,
                      backgroundColor: ['#60A5FA', '#A78BFA', '#F472B6', '#34D399'][index % 4],
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Back to Fun Menu Button */}
          <button
            onClick={() => navigate('/third')}
            className="mt-8 bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition"
          >
            Back to Fun Menu
          </button>
        </div>
      )}
    </div>
  );
};

export default ThisOrThat;
