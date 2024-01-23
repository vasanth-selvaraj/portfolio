import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const scrollToView = (value: string) => {
    const contactSection = document.getElementById(value);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [activesection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      const windowHeight = window.innerHeight;

      let maxVisibleArea = 0;
      let activeSectionId = "";

      sections.forEach((section) => {
        const bounding = section.getBoundingClientRect();
        const visibleArea =
          Math.min(windowHeight, bounding.bottom) - Math.max(0, bounding.top);
        if (visibleArea > maxVisibleArea) {
          maxVisibleArea = visibleArea;
          activeSectionId = section.id;
        } else if (bounding.bottom === windowHeight) {
          activeSectionId = section.id;
        }
      });
      setActiveSection(activeSectionId);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div className="fixed hidden z-50 dark:bg-main-color bg-light-main-color xl:flex items-center top-[50%] transform -translate-y-1/2 justify-center right-[68px] dark:text-text-color text-light-text-color">
        <div className="border-line dark:border-[#737373] border px-4 py-2 shadow-md rounded-3xl">
          <ul className="flex flex-col py-2">
            <li className="py-4 relative group cursor-pointer">
              <div onClick={() => scrollToView("home")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-5 h-5 hover:text-accent-color transition-colors duration-150 ${
                    activesection === "home" ? "text-accent-color" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <span className="absolute hidden group-hover:flex top-[25%] -left-5 -translate-x-full px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-1/2 before:left-[100%] before:-translate-y-1/2 before:border-[7px] dark:bg-[#404042] bg-[#e4e4e7] before:border-y-transparent before:border-r-transparent before:dark:border-l-[#404042] before:border-l-[#e4e4e7]">
                  Home
                </span>
              </div>
            </li>
            <li className="py-4 relative group cursor-pointer">
              <div onClick={() => scrollToView("aboutme")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-5 h-5 hover:text-accent-color transition-colors duration-150 ${
                    activesection === "aboutme" ? "text-accent-color" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <span className="absolute hidden group-hover:flex w-20 top-[25%] -left-5 -translate-x-full px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-1/2 before:left-[100%] before:-translate-y-1/2 before:border-[7px] dark:bg-[#404042] bg-[#e4e4e7] shadow-md before:border-y-transparent before:border-r-transparent before:border-l-[#e4e4e7] before:dark:border-l-[#404042]">
                  About Me
                </span>
              </div>
            </li>
            <li className="py-4 relative group cursor-pointer">
              <div onClick={() => scrollToView("timeline")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-5 h-5 hover:text-accent-color transition-colors duration-150 ${
                    activesection === "timeline" ? "text-accent-color" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="absolute hidden group-hover:flex w-[75px] top-[25%] -left-5 -translate-x-full px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-1/2 before:left-[100%] before:-translate-y-1/2 before:border-[7px] dark:bg-[#404042] bg-[#e4e4e7] before:border-y-transparent before:border-r-transparent before:dark:border-l-[#404042] before:border-l-[#e4e4e7]">
                  Time line
                </span>
              </div>
            </li>
            <li className="py-4 relative group cursor-pointer">
              <div onClick={() => scrollToView("github")}>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  className={`inline-block text-end octicon octicon-mark-github w-5 h-5 hover:text-accent-color transition-colors duration-150 ${
                    activesection === "github" && "text-accent-color"
                  }`}
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>

                <span className="absolute hidden group-hover:flex w-18 top-[25%] -left-5 -translate-x-full px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-1/2 before:left-[100%] before:-translate-y-1/2 before:border-[7px] dark:bg-[#404042] bg-[#e4e4e7] before:border-y-transparent before:border-r-transparent before:dark:border-l-[#404042] before:border-l-[#e4e4e7]">
                  Github
                </span>
              </div>
            </li>
            <li className="py-4 relative group cursor-pointer">
              <div onClick={() => scrollToView("skills")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-5 h-5 hover:text-accent-color transition-colors duration-150 ${
                    activesection === "skills" ? "text-accent-color" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                  />
                </svg>
                <span className="absolute hidden group-hover:flex w-12 top-[25%] -left-5 -translate-x-full px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-1/2 before:left-[100%] before:-translate-y-1/2 before:border-[7px] dark:bg-[#404042] bg-[#e4e4e7] before:border-y-transparent before:border-r-transparent before:dark:border-l-[#404042] before:border-l-[#e4e4e7]">
                  Skills
                </span>
              </div>
            </li>
            <li className="py-4 relative group cursor-pointer">
              <div onClick={() => scrollToView("projects")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-5 h-5 hover:text-accent-color transition-colors duration-150 ${
                    activesection === "projects" ? "text-accent-color" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                  />
                </svg>
                <span className="absolute hidden group-hover:flex w-16 top-[25%] -left-5 -translate-x-full px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-1/2 before:left-[100%] before:-translate-y-1/2 before:border-[7px] dark:bg-[#404042] bg-[#e4e4e7] before:border-y-transparent before:border-r-transparent before:dark:border-l-[#404042] before:border-l-[#e4e4e7]">
                  Projects
                </span>
              </div>
            </li>

            <li className="py-4 relative group cursor-pointer">
              <div onClick={() => scrollToView("contactme")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-5 h-5 hover:text-accent-color transition-colors duration-150 ${
                    activesection === "contactme" ? "text-accent-color" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <span className="absolute hidden group-hover:flex w-[95px] top-[25%] -left-5 -translate-x-full px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-1/2 before:left-[100%] before:-translate-y-1/2 before:border-[7px] dark:bg-[#404042] bg-[#e4e4e7] before:border-y-transparent before:border-r-transparent before:dark:border-l-[#404042] before:border-l-[#e4e4e7]">
                  Contact Me
                </span>
              </div>
            </li>
            <li className="py-4 relative group cursor-pointer">
              <Link
                href="/Vasanth_Selvaraj_Resume.pdf"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 hover:text-accent-color transition-colors duration-150"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
                <span className="absolute hidden group-hover:flex w-16 top-[25%] -left-5 -translate-x-full px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-1/2 before:left-[100%] before:-translate-y-1/2 before:border-[7px] dark:bg-[#404042] bg-[#e4e4e7] before:border-y-transparent before:border-r-transparent before:dark:border-l-[#404042] before:border-l-[#e4e4e7]">
                  Resume
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
