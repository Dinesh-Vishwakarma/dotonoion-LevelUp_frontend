import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4 text-center">
        Welcome to <span className="text-blue-600">LevelUpLife</span>
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-xl text-center">
        Gamify your life, track your goals, earn XP, and level up every day. Start building the best version of yourself.
      </p>
      <Link
        to="/dashboard"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg shadow-lg transition"
      >
        Enter Dashboard
      </Link>
    </div>
  );
};

export default Home;
