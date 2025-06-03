"use client";
import { deleteTodos, updateTodos } from "../actions";
import { useState } from "react";

export default function Todo({ text, id }) {
  const [showUpdateInput, setShowUpdateInput] = useState(false);
  const [newText, setNewText] = useState(text);
  const [popup, setPopup] = useState("");

  const triggerPopup = (message) => {
    setPopup(message);
    setTimeout(() => setPopup(""), 3000); // Hide after 3s
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateTodos(id, newText);
    setShowUpdateInput(false);
    triggerPopup("✅ Todo updated!");
  };

  const handleDelete = async () => {
    triggerPopup("🗑️ Todo deleted!");
    setTimeout(async () => {
      await deleteTodos(id);
    }, 1000); // Delay 1 detik agar popup sempat muncul
  };


  return (
    <div className="relative bg-white border border-gray-300 rounded-lg shadow-md p-4 mt-4 w-full max-w-2xl mx-auto">
      {/* Pop-up Notification */}
      {popup && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 -translate-y-full bg-blue-600 text-white px-4 py-2 rounded shadow animate-fade-in-out text-sm z-10">
          {popup}
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Todo Text or Input */}
        <div className="flex-1 w-full">
          {showUpdateInput ? (
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="w-full px-3 py-2 border rounded-md text-black focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-lg font-medium text-gray-800">{text}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 shrink-0">
          {showUpdateInput ? (
            <>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                Save
              </button>
              <button
                onClick={() => setShowUpdateInput(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setShowUpdateInput(true)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
              >
                Update
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
