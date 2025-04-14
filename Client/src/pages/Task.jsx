import React, { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    const task = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };
    setTasks((prev) => [...prev, task]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
    alert("+10 XP Logged ✅");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">✅ To-Do Tracker</h1>
      <p className="text-gray-600 mb-6">
        Log assignments, chores, or goals. Check to earn XP. Stay on top of life.
      </p>

      {/* Add Task */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newTask}
          placeholder="Enter new task..."
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks yet. Add one!</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-center justify-between p-3 rounded-lg shadow-sm ${
                task.completed ? "bg-green-100" : "bg-white"
              }`}
            >
              <span
                className={`text-gray-800 ${
                  task.completed ? "line-through" : ""
                }`}
              >
                {task.title}
              </span>
              <button
                onClick={() => toggleTask(task.id)}
                className={`text-sm px-3 py-1 rounded-lg ${
                  task.completed
                    ? "bg-gray-300 text-gray-700"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
              >
                {task.completed ? "Done" : "Mark Done"}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Tasks;
