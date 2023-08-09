import CodeThink from "../public/code-think.svg"
import Image from "next/image";

export default function Hero() {
  return (
    <div
      id="home"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12"
    >
      <div className="flex flex-col space-y-12 justify-between lg:flex-row lg:space-y-0">
        <div className="lg:w-1/2 flex flex-col lg:pr-10 lg:text-left text-center justify-center pr-0">
          <h1 className="mb-4 lg:mt-20 font-sans  text-3xl tracking-wide font-bold text-text-color sm:text-5xl sm:leading-none">
            Hi, I’m <span className="text-accent-color">Vasanth</span>
          </h1>
          <h3 className="inline-block tracking-widest text-justify text-base text-maven-blue">
            A passionate and driven Full Stack Web Developer with a flair for
            creating captivating digital experiences. 🚀. Building Dreams, One
            Line of Code at a Time With a strong foundation in front-end and
            back-end technologies, I bring ideas to life and transform them into
            dynamic web applications. My mission is to craft seamless user
            experiences that leave a lasting impression.
          </h3>

          <div className="flex items-center justify-center">
            <button className=" mt-10 w-72 items-center hover:bg-accent-color font-semibold border border-accent-color justify-center h-10 px-2 tracking-wide text-text-color transition duration-200 rounded-lg shadow-md bg-transparent focus:shadow-outline focus:outline-none">
              Ready to Ignite the Web?
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center lg:pl-0 pl-10">
        <Image
          src={CodeThink}
          alt="Code Think"
          height={600}
          width={500}
          className=""
        />
        </div>
      </div>
    </div>
  );
}
