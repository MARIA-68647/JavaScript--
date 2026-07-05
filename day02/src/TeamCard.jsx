import React from "react";

export default function TeamCard({ image, name, role, onView }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden text-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mt-6"
      />

      <div className="p-6">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-blue-600">{role}</p>

        <button
          onClick={onView}
          className="mt-5 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          View Profile
        </button>
      </div>
    </div>
  );
}