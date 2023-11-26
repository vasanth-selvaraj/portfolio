import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/sections/hero";
import AboutMe from "@/sections/aboutme";
// import TopBar from "@/sections/topbar";
import GitHub from "@/sections/github";
import TimeLine from "@/sections/timeline";
import Skills from "@/sections/skills";
import Projects from "@/sections/projects";
import ContactMe from "@/sections/contactme";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-bg-color">
      <Hero />
      <AboutMe />
      <TimeLine />
      <GitHub />
      <Skills />
      <Projects />
      <ContactMe />
    </main>
  );
}
