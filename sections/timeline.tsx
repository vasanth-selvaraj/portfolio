import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function TimeLine() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div
      id="timeline"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16 lg:py-14"
    >
      <div data-aos="fade-down" className="flex border border-line w-32 justify-between rounded-3xl px-4 py-1 mb-20">
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
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <div>Timeline</div>
      </div>
      <div className="hidden max-w-5xl flex-col lg:flex">
        <div className="grid grid-cols-7">
          <h3
            data-aos="fade-right"
            className=" col-span-3 py-4 flex justify-end"
          >
            March 2019
          </h3>
          <div
            data-aos="fade-down"
            className="flex flex-col items-center col-span-1"
          >
            <div className="h-12 w-12 flex justify-center items-center bg-accent-color rounded-full">
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
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div className="w-[2px] h-16 bg-[#ffff]"></div>
          </div>
          <div data-aos="fade-right" className="col-span-3">
            <div className="rounded border border-line">
              <h3 className="p-4">
                Graduated from Bannari Amman Institution with a degree in
                Information Technology
              </h3>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-7">
          <div data-aos="fade-right" className="col-span-3">
            <div className="rounded border border-line">
              <h3 className="p-4">
                Joined Tata Consultancy Services (TCS) as Assistant system
                engineer Trainee
              </h3>
            </div>
          </div>

          <div
            data-aos="fade-down"
            className="flex flex-col items-center col-span-1"
          >
            <div className="h-12 w-12 flex justify-center items-center bg-accent-color rounded-full">
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
                  d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                />
              </svg>
            </div>
            <div className="w-[2px] h-16 bg-[#ffff]"></div>
          </div>
          <h3
            data-aos="fade-right"
            className=" col-span-3 py-4 flex justify-start"
          >
            June 2019
          </h3>
        </div>
        <div className="grid grid-cols-7">
          <h3
            data-aos="fade-right"
            className=" col-span-3 py-4 flex justify-end"
          >
            September 2019
          </h3>
          <div
            data-aos="fade-down"
            className="flex flex-col items-center col-span-1"
          >
            <div className="h-12 w-12 flex justify-center items-center bg-accent-color rounded-full ">
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
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <div className="w-[2px] h-16 bg-[#ffff]"></div>
          </div>
          <div data-aos="fade-right" className="col-span-3">
            <div className="rounded border border-line">
              <h3 className="p-4">
                Began my journey as an Assistant System Engineer at TCS and
                contributed to various projects
              </h3>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-7">
          <div data-aos="fade-right" className="col-span-3">
            <div className="rounded border border-line">
              <h3 className="p-4">
                Recognized for my dedication and contributions, I was promoted
                to the position of System Engineer at TCS
              </h3>
            </div>
          </div>

          <div
            data-aos="fade-down"
            className="flex flex-col items-center col-span-1"
          >
            <div className="h-12 w-12 flex justify-center items-center bg-accent-color rounded-full">
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
                  d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                />
              </svg>
            </div>
            <div className="w-[2px] h-16 bg-[#ffff]"></div>
          </div>
          <h3
            data-aos="fade-right"
            className=" col-span-3 py-4 flex justify-start"
          >
            March 2021
          </h3>
        </div>
        <div className="grid grid-cols-7">
          <h3
            data-aos="fade-right"
            className=" col-span-3 py-4 flex justify-end"
          >
            September 2022
          </h3>
          <div
            data-aos="fade-down"
            className="flex flex-col items-center col-span-1"
          >
            <div className="h-12 w-12 flex justify-center items-center bg-accent-color rounded-full">
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
                  d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
                />
              </svg>
            </div>
            <div className="w-[2px] h-28 bg-[#ffff]"></div>
          </div>
          <div data-aos="fade-right" className="col-span-3">
            <div className="rounded border border-line">
              <h3 className="p-4">
                Joined Mavenberg Innovations, where I continue to create
                innovative web solutions and contribute to captivating digital
                experiences.
              </h3>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5">
          <div
            data-aos="fade-down"
            className="flex flex-col col-start-3 items-center col-span-1"
          >
            <div className="h-12 w-12 flex glow-infinite justify-center items-center bg-accent-color rounded-full">
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
                  d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            </div>
            {/* <div className="w-[2px] h-16 bg-[#ffff]"></div> */}
          </div>
        </div>
        <div className="flex justify-center pt-5">
          <div
            data-aos="fade-down"
            className="rounded border border-line max-w-xl"
          >
            <h3 className="p-4">
              Thriving at Mavenberg, I'm driven to push the boundaries of web
              development and shape the future of the digital landscape
            </h3>
          </div>
        </div>
      </div>
      <div className="flex max-w-2xl text-xs md:text-base flex-col lg:hidden">
        <div className="grid grid-cols-12 ">
          <h3
            data-aos="fade-right"
            className=" col-span-3 py-4 flex justify-end"
          >
            March 2019
          </h3>
          <div className="flex flex-col items-center col-span-2">
            <div data-aos="fade-down" className="h-12 w-12 flex justify-center items-center bg-accent-color rounded-full">
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
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div className="w-[2px] h-24 bg-[#ffff]"></div>
          </div>
          <div className="col-span-7">
            <div data-aos="fade-right" className="rounded border border-line">
              <h3 className="p-4">
                Graduated from Bannari Amman Institution with a degree in
                Information Technology
              </h3>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 ">
          <h3
            data-aos="fade-right"
            className=" col-span-3 py-4 flex justify-end"
          >
            June 2019
          </h3>
          <div className="flex flex-col items-center col-span-2">
            <div data-aos="fade-down" className="h-12 w-12 flex justify-center items-center bg-accent-color rounded-full">
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
                  d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                />
              </svg>
            </div>
            <div className="w-[2px] h-24 bg-[#ffff]"></div>
          </div>
          <div className="col-span-7">
            <div data-aos="fade-right" className="rounded border border-line">
              <h3 className="p-4">
                Joined Tata Consultancy Services (TCS) as Assistant system
                engineer Trainee
              </h3>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 ">
          <h3
            data-aos="fade-right"
            className=" col-span-3 py-4 flex justify-end"
          >
            September 2019
          </h3>
          <div className="flex flex-col items-center col-span-2">
            <div data-aos="fade-down" className="h-12 w-12 flex justify-center items-center bg-accent-color rounded-full">
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
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <div className="w-[2px] h-24 bg-[#ffff]"></div>
          </div>
          <div className="col-span-7">
            <div data-aos="fade-right" className="rounded border border-line">
              <h3 className="p-4">
                Began my journey as an Assistant System Engineer at TCS and
                contributed to various projects
              </h3>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 ">
          <h3
            data-aos="fade-right"
            className=" col-span-3 py-4 flex justify-end"
          >
            March 2021
          </h3>
          <div className="flex flex-col items-center col-span-2">
            <div data-aos="fade-down" className="h-12 w-12 flex justify-center items-center bg-accent-color rounded-full">
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
                  d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                />
              </svg>
            </div>
            <div className="w-[2px] h-24 bg-[#ffff]"></div>
          </div>
          <div className="col-span-7">
            <div data-aos="fade-right" className="rounded border border-line">
              <h3 className="p-4">
                Recognized for my dedication and contributions, I was promoted
                to the position of System Engineer at TCS
              </h3>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 ">
          <h3
            data-aos="fade-right"
            className=" col-span-3 py-4 flex justify-end"
          >
            September 2022
          </h3>
          <div className="flex flex-col items-center col-span-2">
            <div data-aos="fade-down" className="h-12 w-12 flex justify-center items-center bg-accent-color rounded-full">
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
                  d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
                />
              </svg>
            </div>
            <div className="w-[2px] h-32 bg-[#ffff]"></div>
          </div>
          <div className="col-span-7">
            <div data-aos="fade-right" className="rounded border border-line">
              <h3 className="p-4">
                Joined Mavenberg Innovations, where I continue to create
                innovative web solutions and contribute to captivating digital
                experiences.
              </h3>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="flex flex-col col-start-4 items-center col-span-2">
            <div data-aos="fade-down" className="h-12 w-12 glow-infinite flex justify-center items-center bg-accent-color rounded-full">
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
                  d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            </div>
            {/* <div className="w-[2px] h-16 bg-[#ffff]"></div> */}
          </div>
        </div>
        <div className="flex justify-center pt-5">
          <div data-aos="fade-down" className="rounded border border-line max-w-5xl">
            <h3 className="p-4">
              Thriving at Mavenberg, I'm driven to push the boundaries of web
              development and shape the future of the digital landscape
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
