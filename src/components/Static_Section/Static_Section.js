"use client";

import { motion } from "framer-motion";
const StaticSection = (props) => {
  return (
    <section className="md:px-40 px-8 flex md:flex-row flex-col md:mt-40 mt-28 gap-8 md:gap-6  text-center md:text-start">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.6,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-[0.4]  justify-start items-start gap-6 md:text-3xl text-xl font-bold text-[#212121]"
      >
        {props.content.title}{" "}
      </motion.div>{" "}
      {props.content.points.map((point, index) => (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.6,
          }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-[0.3] justify-center items-start text-lg mx-5 font-semibold text-[#363636]"
          key={index}
        >
          {point}{" "}
        </motion.div>
      ))}{" "}
    </section>
  );
};

export default StaticSection;
