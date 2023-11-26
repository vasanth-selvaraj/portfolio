import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  return (
    <div
      id="aboutme"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16 lg:py-28 section"
    >
      <div data-aos="fade-down" className="flex border mb-6 border-line w-36 justify-between rounded-3xl px-4 py-1">
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
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        <div>About Me</div>
      </div>
      <div className="flex justify-center flex-col">
        <h1 data-aos="fade-down" className="mb-10 lg:mt-20 font-sans  text-3xl tracking-wide font-bold dark:text-text-color text-[#404040] sm:text-5xl sm:leading-none">
          Every Line of Code Tells a <br />
          <span className="text-accent-color text-transparent bg-gradient-to-r from-gradient-start via-gradient-min to-gradient-end bg-clip-text">Captivating Story</span>
        </h1>
        <h3 data-aos="fade-down" className="inline-block max-w-5xl opacity-75 tracking-widest text-justify text-base text-maven-blue">
          With <span className="text-3xl text-accent-color text-transparent bg-gradient-to-r from-gradient-start via-gradient-min to-gradient-end bg-clip-text">4 years</span> of
          experience working with React, Express.js, and various front-end and
          back-end technologies, I have honed my skills to craft dynamic and
          visually engaging web applications. From concept to deployment, I
          revel in transforming ideas into functional and visually stunning web
          solutions. My dedication to delivering high-quality code and seamless
          user experiences drives me to constantly push the boundaries of web
          development.
        </h3>
        <br />
        <h3 data-aos="fade-down" className="inline-block mt-10 max-w-5xl opacity-75 tracking-widest text-justify text-base text-maven-blue">
          I'm on a never-ending quest for knowledge and stay up-to-date with the
          latest industry trends, always eager to embrace new challenges and
          technologies. Let's collaborate and create web wonders that leave a
          lasting impact on the digital landscape!
        </h3>
      </div>
    </div>
  );
}
