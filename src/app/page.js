import NavBar from "@/components/NavBar/NavBar";
import Hero from "@/components/Hero/Hero";
import StaticSection from "@/components/Static_Section/Static_Section";

import { sectionData } from "@/constants/SectionData";
import Slider from "@/components/Slider/Slider";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <NavBar />
      <Hero />
      <StaticSection content={sectionData[0]} /> <Slider />
      <StaticSection content={sectionData[1]} />{" "}
    </main>
  );
}
