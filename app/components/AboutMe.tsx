"use client"
import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutMe = () => {
    const scrollRef = useRef(null)

    return (
        <section className="md:mt-14" id="aboutMe">
            <div className="lg:grid lg:grid-cols-2 mx-5">
                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.3 }}
                    whileInView={{ y: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    viewport={{ root: scrollRef }}
                >
                    <h3 className="text-5xl font-raleway font-semibold mb-2">About me</h3>
                    <p className="text-xl font-raleway font-semibold text-slate-300">Take a look at my story</p>
                    <p className="text-sm md:text-base my-3 text-gray-400">
                        Hello! I&apos;m Josep, an IT enthusiast with a passion for technology. My journey began at a young age with development of games in Roblox, which led me to study IT at Xuquer High School in Alzira, graduating in 2020.
                        <br /> <br />
                        I am committed to continuous learning and growth, always seeking new challenges to expand my skills. My expertise includes programming in various languages and creating innovative solutions.
                        <br /> <br />
                        Outside of work, I enjoy gaming, especially Nintendo games, watching movies, and collectionism.
                        <br /> <br />
                        Whether I&apos;m working on software projects or exploring new games, I bring enthusiasm and dedication to everything I do. I&apos;m always eager for new experiences and connecting with others who share my interests.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ x: 0, y: 200, opacity: 0, scale: 0.6, rotateX: 50, rotateY: -50 }}
                    whileInView={{ y: 50, scale: 1, rotateX: 0, rotateY: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{
                        ease: "easeOut",
                        duration: 1.3,
                    }}
                    viewport={{ root: scrollRef }}
                >
                    <Image
                        src="/img/utils/me.png"
                        alt="Picture of the author"
                        width={1440}
                        height={720}
                        className="rounded-md w-full lg:w-4/5 ml-auto mt-2 md:mt-0"
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default AboutMe;