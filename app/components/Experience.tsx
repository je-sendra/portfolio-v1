'use client'

import { useRef } from "react";
import { motion } from "framer-motion";
import { TbEaseInOutControlPoints } from "react-icons/tb";

const Experience = () => {
    const scrollRef = useRef(null)

    return (
        <section id="experience">
            <h2 className="text-5xl font-raleway font-semibold mb-0 md:mb-8">Experience | 3+ years</h2>
            <ol className="relative border-s border-gray-200 ml-3">
                <motion.li className="mb-10 ms-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "linear", duration: 0.5 }}
                    viewport={{ root: scrollRef }}
                >
                    <div
                        className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"
                    >
                    </div>
                    <time
                        className="mb-1 text-sm font-normal leading-none text-sky-800 dark:text-sky-200/80">
                        September 2024 - Now...
                    </time>
                    <p className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 my-2">
                    Software Designer and Developer | <a href="https://www.software-shop.com/" className="text-slate-100" target="_blank">MAF RODA AGROBOTIC</a>
                    </p>
                    <p className="flex mb-4 text-sm md:text-base font-normal text-slate-300 text-pretty">
                        <span className="flex items-center justify-center mx-3 text-slate-100"><TbEaseInOutControlPoints /> </span>
                        Design and development of web and desktop applications for traceability systems in the agrobotic industry, including building adaptable REST APIs to manage the different parts of a facility through warehouse management systems.
                    </p>
                </motion.li>

                <motion.li className="mb-10 ms-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "linear", duration: 0.75 }}
                    viewport={{ root: scrollRef }}
                >
                    <div
                        className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"
                    >
                    </div>
                    <time
                        className="mb-1 text-sm font-normal leading-none text-sky-800 dark:text-sky-200/80">
                        June 2024 - August 2024 (3 months)
                    </time>
                    <p className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 my-2">
                        Software Analyst |  <span className="text-slate-100">Imagina IT Solutions</span>
                    </p>
                    <p className="flex mb-4 text-base font-normal text-slate-300 text-pretty">
                        <span className="flex items-center justify-center mx-3 text-slate-100"><TbEaseInOutControlPoints /> </span>
                        Development of desktop applications for cash management and connectivity with cash counting, validation, and control machines. Working with web APIs for device connectivity and with the license server, updates, and error reporting.                    </p>
                </motion.li>

                <motion.li className="mb-10 ms-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "linear", duration: 1 }}
                    viewport={{ root: scrollRef }}
                >
                    <div
                        className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"
                    >
                    </div>
                    <time
                        className="mb-1 text-sm font-normal leading-none text-sky-800 dark:text-sky-200/80">
                        March 2022 - June 2024 (2 years 4 months)
                    </time>
                    <p className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 my-2">
                        Software Developer |  <a href="https://twitter.com/SENAComunica" className="text-slate-100" target="_blank">DYMSA Ingeniería</a>
                    </p>
                    <p className="flex mb-4 text-base font-normal text-slate-300 text-pretty">
                        <span className="flex items-center justify-center mx-3 text-slate-100"><TbEaseInOutControlPoints /> </span>
                        Development of programs to increase productivity and applications, both cross-platform and web-based, for various purposes.
                    </p>
                </motion.li>

            </ol>
        </section>
    );
}

export default Experience;