"use client";
import { useState } from "react";
import { createTodos } from "../actions";
import Link from "next/link";

export default function CreateTodo() {
  const [text, setText] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTodos(text); // Menunggu hasil async di sini
      setText(""); // Reset input setelah berhasil
      setShowSuccess(true); // Tampilkan pesan sukses
      setTimeout(() => setShowSuccess(false), 3000); // Hide setelah 3 detik
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="relative mt-10 border border-gray-300 bg-white rounded-lg shadow-md p-6 w-full max-w-2xl mx-auto">
      {/* Popup success */}
      {showSuccess && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-green-500 text-white px-6 py-2 rounded-md shadow-md transition-opacity duration-300 animate-fade-in-out z-50">
          ✅ Todo created!
        </div>
      )}

      {/* <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">📝 Create New Todo</h2> */}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="What do you need to do?"
          name="todo-text"
          id="todo-text"
          required
          className="flex-1 w-full px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition w-full sm:w-auto"
        >
          Create
        </button>
      </form>

      {/* Button to navigate to Todo List */}
      <div className="mt-6 text-center">
        <Link href="/list">
          <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
            Go to Todo List
          </button>
        </Link>
      </div>
    </div>
  );
}
