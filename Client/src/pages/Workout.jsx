import React, { useState, useEffect } from "react";
import axios from "axios";

const Workout = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const fetchWorkouts = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://your-api-url.com/api/workouts", {
        params: {
          type: category !== "all" ? category : undefined,
          query: search || undefined,
        },
        headers: {
          "Authorization": "Bearer YOUR_API_KEY", // if needed
        },
      });
      setWorkouts(res.data.workouts || []);
    } catch (err) {
      console.error("Failed to fetch workouts", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWorkouts();
  }, [category, search]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">💪 AI-Powered Workout Guide</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search workouts (e.g., push, abs)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg"
        >
          <option value="all">All</option>
          <option value="chest">Chest</option>
          <option value="arms">Arms</option>
          <option value="legs">Legs</option>
          <option value="core">Core</option>
          <option value="cardio">Cardio</option>
          <option value="stretch">Stretch</option>
        </select>
      </div>

      {/* Workout Cards */}
      {loading ? (
        <p className="text-gray-500">Loading workouts...</p>
      ) : workouts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workouts.map((w, idx) => (
            <div
              key={w.id || idx}
              className="bg-white shadow rounded-lg p-4 flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold text-gray-800">{w.name}</h3>
              <p className="text-sm text-gray-500 mb-2">
                Muscle: {w.muscleGroup || "General"} <br />
                Equipment: {w.equipment || "None"}
              </p>
              <button
                onClick={() => alert(`+25 XP for completing ${w.name} 💥`)}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg mt-auto"
              >
                Complete & Claim XP
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No workouts found. Try adjusting filters.</p>
      )}
    </div>
  );
};

export default Workout;
