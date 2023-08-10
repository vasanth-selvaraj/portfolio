import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  return (
    <div
      id="aboutme"
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
        <div data-aos="fade-right" className="grid grid-cols-3 gap-6">
          <div className="hover:scale-105 transition duration-300 border rounded border-accent-color p-2">
            <div className="flex items-center px-2 justify-evenly text-[#149eca]">
              <svg
                width="100%"
                height="100%"
                viewBox="-10.5 -9.45 21 18.9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-4 mb-3 text-link dark:text-link-dark w-8 self-center text-sm mr-0 flex origin-center transition-all ease-in-out"
              >
                <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                <g stroke="currentColor" stroke-width="1" fill="none">
                  <ellipse rx="10" ry="4.5"></ellipse>
                  <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                  <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                </g>
              </svg>
              <div className="h-3 w-full flex justify-center">
                <div className="h-full w-[90%] bg-line rounded-lg">
                  <div className="h-full w-[75%] bg-[#149eca] rounded-xl"></div>
                </div>
              </div>
            </div>
            <h3 className="p-2">React</h3>
          </div>
          <div className="hover:scale-105 transition duration-300 border rounded border-accent-color p-4"></div>
          <div className="hover:scale-105 transition duration-300 border rounded border-accent-color p-4"></div>
          <div className="hover:scale-105 transition duration-300 border rounded border-accent-color p-4"></div>
        </div>
      </div>
    </div>
  );
}
