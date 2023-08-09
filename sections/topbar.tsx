import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="w-full">
      <div className="flex p-4 justify-between xl:justify-start md:px-14 pt-3 ">
        <Image
          src="/logo.png"
          alt="Vasanth"
          height={80}
          width={80}
          className=""
        />
        <div className="xl:hidden flex items-center">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-text-color" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-2 left-0 w-full px-4">
              <div className="p-5 bg-main-color shadow-md shadow-accent-color border rounded">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <div className="w-14 h-14 rounded-full nav-shadow">
                        <Image
                          src="/logo.png"
                          alt="Vasanth"
                          width={100}
                          height={100}
                        />
                      </div>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded  focus:bg-maven-white focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-maven-white" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href="/"
                        className="font-medium tracking-wide text-text-color transition-colors duration-200 "
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#aboutme"
                        className="font-medium tracking-wide text-maven-white transition-colors duration-200 "
                      >
                        About Me
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#timeline"
                        aria-label="About us"
                        title="About us"
                        className="font-medium tracking-wide text-maven-white transition-colors duration-200"
                      >
                        TimeLine
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#skills"
                        aria-label="Sign in"
                        title="Sign in"
                        className="font-medium tracking-wide text-maven-white transition-colors duration-200"
                      >
                        Skills
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#projects"
                        aria-label="Sign in"
                        title="Sign in"
                        className="font-medium tracking-wide text-maven-white transition-colors duration-200"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#resume"
                        aria-label="Sign in"
                        title="Sign in"
                        className="font-medium tracking-wide text-maven-white transition-colors duration-200"
                      >
                        Resume
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#contactme"
                        aria-label="Sign in"
                        title="Sign in"
                        className="font-medium tracking-wide text-maven-white transition-colors duration-200"
                      >
                        Contact Me
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
