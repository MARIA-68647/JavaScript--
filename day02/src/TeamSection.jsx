import React, { useState } from "react";
import TeamCard from "./TeamCard";

export default function TeamSection() {
  const team = [
    {
      id: 1,
      name: "Ali Khan",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      email: "ali@gmail.com",
      phone: "+92 300 1234567",
      about: "Experienced React Frontend Developer.",
    },
    {
      id: 2,
      name: "Sara Ahmed",
      role: "Mobile App Developer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      email: "sara@gmail.com",
      phone: "+92 301 9876543",
      about: "Flutter and Android Developer.",
    },
    {
      id: 3,
      name: "Hassan",
      role: "Backend Developer",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      email: "hassan@gmail.com",
      phone: "+92 333 1112233",
      about: "Node.js and Express Specialist.",
    },
    {
      id: 4,
      name: "Maria",
      role: "Project Manager",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      email: "maria@gmail.com",
      phone: "+92 345 5556677",
      about: "Leads software development teams.",
    },
  ];

  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="bg-slate-900 min-h-screen py-20 px-6">
      <h1 className="text-5xl text-white font-bold text-center mb-12">
        Meet Our Team
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member) => (
          <TeamCard
            key={member.id}
            image={member.image}
            name={member.name}
            role={member.role}
            onView={() => setSelectedMember(member)}
          />
        ))}
      </div>

      {selectedMember && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
          <div className="bg-white rounded-2xl p-8 w-96 text-center relative">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-3 right-4 text-2xl font-bold"
            >
              ×
            </button>

            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="w-32 h-32 rounded-full mx-auto"
            />

            <h2 className="text-3xl font-bold mt-4">
              {selectedMember.name}
            </h2>

            <p className="text-blue-600 font-semibold">
              {selectedMember.role}
            </p>

            <p className="mt-4">
              <strong>Email:</strong> {selectedMember.email}
            </p>

            <p>
              <strong>Phone:</strong> {selectedMember.phone}
            </p>

            <p className="mt-4 text-gray-600">
              {selectedMember.about}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}