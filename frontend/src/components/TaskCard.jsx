import { useState } from "react";
import axios from "axios";

export default function TaskCard({ task, onStatusChange }) {
  const statusFlow = ["To Do", "In Progress", "Done"];
  const currentIndex = statusFlow.indexOf(task.status);
  const nextStatus = statusFlow[currentIndex + 1];

  const token = localStorage.getItem("token");

  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const updateStatus = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/tasks/${task.id}`,
        { status: nextStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      onStatusChange();
    } catch {
      alert("Error updating status");
    }
  };

  const deleteTask = async () => {
    if (!window.confirm("Delete this task?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${task.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      onStatusChange();
    } catch {
      alert("Failed to delete task");
    }
  };

  const saveEditedTitle = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/tasks/${task.id}`,
        { title: editedTitle },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEditMode(false);
      onStatusChange();
    } catch {
      alert("Failed to edit task");
    }
  };

  return (
    <div className="bg-white shadow rounded-xl p-4 mb-4 transition-all duration-200 hover:shadow-lg">
      <div className="flex justify-between items-start mb-3">
        {editMode ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="border px-3 py-2 rounded w-full mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        ) : (
          <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
        )}
        <div className="flex gap-2 text-sm">
          {editMode ? (
            <>
              <button
                onClick={saveEditedTitle}
                className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setEditedTitle(task.title);
                  setEditMode(false);
                }}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-2 py-1 rounded"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setEditMode(true)}
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={deleteTask}
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-3">
        Status: <span className="font-medium">{task.status}</span>
      </p>

      {nextStatus && (
        <button
          onClick={updateStatus}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm"
        >
          Mark as {nextStatus}
        </button>
      )}
    </div>
  );
}
