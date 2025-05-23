"use client"
import { motion } from "framer-motion";
import { Link as LinkScroll } from "react-scroll";

const MainSection = () => {
    return (
        <motion.section className="w-full h-screen flex items-center justify-center flex-col"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{
                ease: "linear",
                duration: 2,
                x: { duration: 0.3 }
            }}
            id="main"
        >
            <h1 className="text-8xl font-raleway font-semibold mb-4 text-center">Josep Sendra</h1>
            <p className="text-3xl text-gray-400 text-center">Full-stack developer</p>
            <div className="flex items-center justify-center gap-5 my-8">
                <LinkScroll to="aboutMe" duration={500} offset={-80} smooth={true} className="w-24 text-center bg-gray-800 py-2 rounded-md hover:bg-gray-400 hover:cursor-pointer">About me</LinkScroll>
                <LinkScroll to="skills" duration={500} offset={-80} smooth={true} className="w-24 text-center bg-yellow-300 py-2 rounded-md text-black shadow-xl shadow-yellow-300/20 hover:bg-yellow-500 hover:cursor-pointer">My Skills</LinkScroll>
            </div>
        </motion.section>
    );
}

export default MainSection;