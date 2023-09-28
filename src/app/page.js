import NavBar from "@/components/NavBar/NavBar";
import Hero from "@/components/Hero/Hero";
import StaticSection from "@/components/Static_Section/Static_Section";

import { sectionData } from "@/constants/sectionData";
import Slider from "@/components/Slider/Slider";
import About from "@/components/About/About";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <NavBar />
      <Hero />
      <StaticSection content={sectionData[0]} /> <Slider />
      <About />
      <StaticSection content={sectionData[1]} />{" "}
    </main>
  );
}
