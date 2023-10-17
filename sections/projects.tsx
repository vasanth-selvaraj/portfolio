import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import contruct from "../public/contruction.svg";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  return (
    <div
      id="skills"
      className="px-4 relative py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16 lg:py-20"
    >
      <div
        data-aos="fade-down"
        className="flex border mb-6 border-line w-32 justify-between rounded-3xl px-4 py-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
          />
        </svg>
        <div>Projects</div>
      </div>
      <div className="max-w-5xl flex-col mt-20 flex items-center justify-center">
        {/* <Image src={contruct} height={500} width={500} alt="" />
        <h1 className="py-10 text-xl font-medium">Under Development</h1> */}
      </div>
    </div>
  );
}
