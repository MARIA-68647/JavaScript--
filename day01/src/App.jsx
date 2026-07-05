import React from "react";

export default function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "WordPress",
  ];

  const projects = [
    {
      title: "React Portfolio",
      description:
        "Personal portfolio site built with React and Tailwind CSS.",
    },
    {
      title: "Responsive Login Form",
      description: "Mobile-first login screen with field validation.",
    },
    {
      title: "Team Members App",
      description: "React app rendering a team roster from a data array.",
    },
    {
      title: "Employee Directory with Search",
      description: "React directory app with live search and filtering.",
    },
  ];

  // ✅ CV DOWNLOAD FUNCTION (reliable method)
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Maria-CV.pdf";
    link.download = "Maria-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#0f2b23] text-[#f4e9cf] font-sans min-h-screen">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-[#24453c]">
        <h1 className="text-2xl font-serif font-bold text-[#d4a91c]">
          Maria
        </h1>

        <div className="flex gap-6">
          <a href="#skills" className="hover:text-[#d4a91c]">
            Skills
          </a>
          <a href="#projects" className="hover:text-[#d4a91c]">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#d4a91c]">
            Contact
          </a>
        </div>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/maria-992814372/"
            className="border border-[#d4a91c] px-4 py-2 text-sm hover:bg-[#d4a91c] hover:text-black"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com"
            className="border border-[#b7b7b7] px-4 py-2 text-sm hover:bg-[#1f3d33]"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-10 py-24 max-w-5xl mx-auto">
        <h1 className="text-7xl font-serif font-bold">Maria</h1>

        <p className="text-xl text-[#b7b7b7] mt-6 max-w-xl leading-8">
          Frontend Developer passionate about creating clean and responsive
          web applications using React and Tailwind CSS.
        </p>
        <p className="text-xl text-[#b7b7b7] mt-6 max-w-xl leading-8">
          BS Software Engineering (In progresss)
       </p>
       
       
        <p className="text-xl text-[#b7b7b7] mt-6 max-w-xl leading-8">
         Riphah International University
       </p>
        {/* ✅ CV DOWNLOAD BUTTON */}

      </section>

      {/* SKILLS */}
      <section id="skills" className="px-10 py-24 max-w-5xl mx-auto">
        <h2 className="uppercase tracking-[6px] text-[#53a6b8] mb-10">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="border border-[#24453c] px-6 py-3 hover:border-[#d4a91c] transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-10 py-24 max-w-5xl mx-auto">
        <h2 className="uppercase tracking-[6px] text-[#53a6b8] mb-12">
          Projects
        </h2>

        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border-b border-[#24453c] pb-10"
            >
              <h3 className="text-4xl font-serif font-bold">
                {project.title}
              </h3>

              <p className="text-[#b7b7b7] mt-3 text-lg">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-10 py-24 max-w-5xl mx-auto">
        <h2 className="uppercase tracking-[6px] text-[#53a6b8]">
          Get In Touch
        </h2>

        <a
          href="mailto:maria@example.com"
          className="inline-block mt-10 text-3xl text-[#d4a91c] hover:underline"
        >
          mariazulfiqar499@gmail.com ↗
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#24453c] px-10 py-8 text-[#b7b7b7] text-center">
        © 2026 Maria — Rawalpindi, Pakistan
      </footer>
    </div>
  );
}