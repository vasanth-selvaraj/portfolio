// import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";

export default function Navbar() {
  return (
    <>
      <div className="fixed hidden xl:flex items-center top-[50%] transform -translate-y-1/2 justify-center right-[68px] text-text-color">
        <div className="border-line border px-4 py-2 rounded-3xl">
          <ul className="flex flex-col py-2">
            <li className="py-4 relative group">
              <Link href="/">
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
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <span className="absolute hidden group-hover:flex top-[25%] -left-5 -translate-x-full px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-1/2 before:left-[100%] before:-translate-y-1/2 before:border-[7px] bg-[#404042] before:border-y-transparent before:border-r-transparent before:border-l-[#404042]">
                  Home
                </span>
              </Link>
            </li>
            <li className="py-4 relative group">
              <Link href="/#aboutme">
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
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <span className="absolute hidden group-hover:flex w-20 top-[25%] -left-5 -translate-x-full px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-1/2 before:left-[100%] before:-translate-y-1/2 before:border-[7px] bg-[#404042] before:border-y-transparent before:border-r-transparent before:border-l-[#404042]">
                  About Me
                </span>
              </Link>
            </li>
            <li className="py-4 relative group">
              <Link href="/#timeline">
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
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="absolute hidden group-hover:flex w-[75px] top-[25%] -left-5 -translate-x-full px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-1/2 before:left-[100%] before:-translate-y-1/2 before:border-[7px] bg-[#404042] before:border-y-transparent before:border-r-transparent before:border-l-[#404042]">
                  Time line
                </span>
              </Link>
            </li>
            <li className="py-4 relative group">
              <Link href="/#skills">
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
                    d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                  />
                </svg>
                <span className="absolute hidden group-hover:flex w-12 top-[25%] -left-5 -translate-x-full px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-1/2 before:left-[100%] before:-translate-y-1/2 before:border-[7px] bg-[#404042] before:border-y-transparent before:border-r-transparent before:border-l-[#404042]">
                  Skills
                </span>
              </Link>
            </li>
            <li className="py-4 relative group">
              <Link href="/#projects">
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
                    d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                  />
                </svg>
                <span className="absolute hidden group-hover:flex w-16 top-[25%] -left-5 -translate-x-full px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-1/2 before:left-[100%] before:-translate-y-1/2 before:border-[7px] bg-[#404042] before:border-y-transparent before:border-r-transparent before:border-l-[#404042]">
                  Projects
                </span>
              </Link>
            </li>
            <li className="py-4 relative group">
              <Link href="/#resume">
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
                <span className="absolute hidden group-hover:flex w-16 top-[25%] -left-5 -translate-x-full px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-1/2 before:left-[100%] before:-translate-y-1/2 before:border-[7px] bg-[#404042] before:border-y-transparent before:border-r-transparent before:border-l-[#404042]">
                  Resume
                </span>
              </Link>
            </li>
            <li className="py-4 relative group">
              <Link href="/#resume">
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <span className="absolute hidden group-hover:flex w-[95px] top-[25%] -left-5 -translate-x-full px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-1/2 before:left-[100%] before:-translate-y-1/2 before:border-[7px] bg-[#404042] before:border-y-transparent before:border-r-transparent before:border-l-[#404042]">
                  Contact Me
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
