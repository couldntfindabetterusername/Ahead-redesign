"use client";

import { motion } from "framer-motion";
import { sliderData } from "@/constants/sliderData";
import Card from "./Card";
import UI_Image from "../UI_Image/UI_Image";

const Slider = () => {
  return (
    <section className=" flex flex-col items-start justify-start mt-28 w-[90%] gap-2  ">
      <div className="flex items-center">
        <motion.h1
          initial={{ x: -200, scale: 0 }}
          transition={{
            delay: 0.4,
            duration: 1.5,
            type: "spring",
            stiffness: 50,
          }}
          whileInView={{ x: 0, scale: 1 }}
          viewport={{ once: true }}
          className="md:pl-4 pl-2 flex md:text-4xl text-xl font-bold "
        >
          Does this sound familiar...{" "}
        </motion.h1>{" "}
        <motion.div
          initial={{ rotate: -90, x: 400, y: 20 }}
          whileInView={{
            rotate: 0,
            x: 0,
            y: 0,
          }}
          transition={{ duration: 1.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <UI_Image
            src="/assets/boo.svg"
            width={100}
            height={100}
            alt="boo"
            className=" rounded-full -rotate-[30deg] opacity-80 hidden md:flex"
          />
        </motion.div>{" "}
      </div>{" "}
      <div className="flex overflow-x-scroll no-scrollbar py-8 w-full px-4">
        {" "}
        {sliderData.map((item, index) => (
          <Card
            emoji={item.emoji}
            bg={item.bg}
            heading={item.heading}
            info={item.info}
            key={index}
          />
        ))}{" "}
      </div>{" "}
    </section>
  );
};

export default Slider;
