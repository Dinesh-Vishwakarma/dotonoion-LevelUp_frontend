import React, { useState } from "react";

const moods = [
  { emoji: "😄", label: "Happy" },
  { emoji: "😔", label: "Sad" },
  { emoji: "😠", label: "Angry" },
  { emoji: "😌", label: "Calm" },
  { emoji: "😐", label: "Neutral" },
];

const Journal = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const [entry, setEntry] = useState("");

  const handleSave = () => {
    if (!entry) {
      alert("Please write something to save your journal.");
      return;
    }

    // Simulate save
    console.log("Journal saved:", { selectedMood, entry });

    alert("📝 Journal saved! +20 XP earned.");
    setEntry("");
    setSelectedMood("");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">🧠 Journal & Mood Tracker</h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Track your thoughts, clear your mind, and grow. Expressing emotions is XP-worthy too.
      </p>

      {/* Mood Selector */}
      <div className="mb-6 flex flex-wrap justify-center gap-4">
        {moods.map((mood) => (
          <button
            key={mood.label}
            onClick={() => setSelectedMood(mood.label)}
            className={`text-3xl p-2 rounded-full border ${
              selectedMood === mood.label
                ? "bg-blue-100 border-blue-500"
                : "bg-white border-gray-300"
            } hover:scale-110 transition`}
            title={mood.label}
          >
            {mood.emoji}
          </button>
        ))}
      </div>

      {/* Journal Input */}
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write your thoughts here..."
        className="w-full max-w-xl min-h-[180px] p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      ></textarea>

      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        Save Journal
      </button>
    </div>
  );
};

export default Journal;
