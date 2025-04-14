import React, { useState, useEffect } from "react";

const Study = () => {
  const [secondsLeft, setSecondsLeft] = useState(1500); // 25 mins
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (isActive && secondsLeft === 0) {
      setIsBreak(!isBreak);
      setSecondsLeft(isBreak ? 1500 : 300); // switch: 25 or 5 mins
    }
    return () => clearInterval(timer);
  }, [isActive, secondsLeft, isBreak]);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4 text-center text-blue-700">🎯 Study Mode</h1>
      <p className="text-gray-600 mb-6 text-center">Stay focused. XP will be yours.</p>

      <div className="bg-white shadow-lg rounded-xl p-8 text-center w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">
          {isBreak ? "☕ Break Time" : "📖 Focus Time"}
        </h2>
        <div className="text-6xl font-mono mb-6">{formatTime(secondsLeft)}</div>

        <button
          onClick={() => setIsActive(!isActive)}
          className={`px-6 py-3 rounded-xl font-semibold transition ${
            isActive
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-green-500 hover:bg-green-600 text-white"
          }`}
        >
          {isActive ? "Pause" : "Start"}
        </button>

        <div className="mt-6">
          <button
            onClick={() => alert("+30 XP Logged ✅")}
            className="text-sm text-blue-600 hover:underline"
          >
            + Log Session & Claim XP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Study;
