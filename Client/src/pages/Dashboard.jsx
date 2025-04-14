import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = {
    name: "Abhrant", // Replace with real user data later
    level: 7,
    currentXP: 340,
    nextXP: 400,
  };

  const todayTasks = [
    { id: 1, title: "🧘 Meditate for 10 mins", completed: false },
    { id: 2, title: "📚 Study for 1 hour", completed: true },
    { id: 3, title: "🏃 Skip rope 500 times", completed: false },
    { id: 4, title: "📓 Journal your thoughts", completed: false },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-2">
        Welcome back, <span className="text-blue-600">{user.name}</span>!
      </h2>
      <p className="text-gray-600 mb-6">Let’s level up your life today. 🌱</p>

      {/* XP Progress */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h3 className="text-xl font-semibold mb-2">Level {user.level}</h3>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-blue-500 h-4 rounded-full transition-all duration-300"
            style={{ width: `${(user.currentXP / user.nextXP) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          {user.currentXP} / {user.nextXP} XP
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Link
          to="/study"
          className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-medium p-4 rounded-lg text-center"
        >
          🎯 Study Mode
        </Link>
        <Link
          to="/workout"
          className="bg-green-100 hover:bg-green-200 text-green-800 font-medium p-4 rounded-lg text-center"
        >
          💪 Workout
        </Link>
        <Link
          to="/journal"
          className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 font-medium p-4 rounded-lg text-center"
        >
          📔 Journal
        </Link>
        <Link
          to="/tasks"
          className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium p-4 rounded-lg text-center"
        >
          ✅ To-Do List
        </Link>
      </div>

      {/* Daily Tasks */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-xl font-semibold mb-4">🗓️ Today’s Missions</h3>
        <ul>
          {todayTasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between py-2 px-3 rounded-lg mb-2 ${
                task.completed ? "bg-green-50 text-green-700" : "bg-gray-50"
              }`}
            >
              <span>{task.title}</span>
              <button className="text-sm text-blue-500 hover:underline">
                {task.completed ? "Done" : "Mark Done"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
