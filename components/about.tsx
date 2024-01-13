"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";

export default function About() {
  // const { ref } = useSectionInView("About");

  return (
    <motion.section
      // ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        {" "}
        After teaching myself{" "}
        <span className="font-medium">web development</span>, I started working
        as a <span className="font-medium">web developer</span> two years ago. I
        love web development, as it gives me the opportunity to express my{" "}
        <span className="italic">creativity</span> and solve{" "}
        <span className="underline">real-world problems</span>. My core stack is{" "}
        <span className="font-medium">
          HTML, CSS, JavaScript, and Bootstrap
        </span>
        . I am also familiar with jQuery and WordPress. I am always eager to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a web
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy reading
        books, listening to music, and playing chess. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">
          artificial intelligence and machine learning
        </span>
        . I'm also learning how to play the piano.
      </p>
    </motion.section>
  );
}
