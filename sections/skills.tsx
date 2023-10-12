import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  const skills = [
    {
      name: "ReactJs",
      image: "/reactJs.png",
      knowledge: 85,
    },
    {
      name: "ExpressJs",
      image: "/expressJs-white.png",
      knowledge: 80,
    },
    {
      name: "JavaScript",
      image: "/javaScript.png",
      knowledge: 80,
    },
    {
      name: "Figma",
      image: "/figma.png",
      // "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/600px-Figma-logo.svg.png?20190122211436",
      knowledge: 60,
    },
    {
      name: "NextJs",
      image: "/nextjs-white.png",
      knowledge: 50,
    },
    {
      name: "Mongo DB",
      image: "/mongoDb.png",
      knowledge: 70,
    },
    {
      name: "PostgreSQL",
      image: "/postgreSql.png",
      knowledge: 40,
    },
    {
      name: "git",
      image: "/git.png",
      knowledge: 95,
    },
    {
      name: "Azure Devops",
      image: "/Azure.png",
      knowledge: 65,
    },
  ];

  return (
    <div
      id="skills"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16 lg:py-20"
    >
      <div
        data-aos="fade-down"
        className="flex border mb-6 border-line w-28 justify-between rounded-3xl px-4 py-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
          />
        </svg>
        <div>Skills</div>
      </div>
      <div className="max-w-5xl mt-20">
        <div
          data-aos="fade-right"
          className="flex flex-wrap justify-center gap-10"
        >
          {skills.map((skill, i) => {
            return (
              <div
                data-aos={`${i % 2 == 0 ? "fade-right" : "fade-left"}`}
                key={i}
                className="p-2 h-56 w-36"
              >
                <div className="flex flex-col cursor-pointer h-[90%] items-center justify-evenly hover:scale-105 transition duration-300 border rounded-full border-line hover:border-accent-color text-[#149eca]">
                  <Image
                    height={80}
                    width={80}
                    alt="skill"
                    className="rounded-xl p-2"
                    src={skill.image}
                  />
                  <h1 className="text-text-color py-2 text-xl font-medium">
                    {skill.knowledge}%
                  </h1>
                </div>
                <h3 className="py-2 h-[10%] text-center">{skill.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
