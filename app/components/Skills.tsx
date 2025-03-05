"use client"
import { useRef } from "react";
import { motion } from "framer-motion";

const Skills = () => {
    const scrollRef = useRef(null)
    return (
        <motion.section className="mt-20 px-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "linear", duration: 1 }}
            viewport={{ root: scrollRef }}
            id="skills"
        >
            <h4 className="text-5xl font-raleway font-semibold mb-8">Skills</h4>
            <div className="flex items-center flex-wrap gap-3">
                <div className="bg-slate-600 text-center px-3 py-1 rounded-md">C#/.NET</div>
                <div className="bg-slate-600 text-center px-3 py-1 rounded-md">TypeScript</div>
                <div className="bg-slate-600 text-center px-3 py-1 rounded-md">JavaScript</div>
                <div className="bg-slate-600 text-center px-3 py-1 rounded-md">React</div>
                <div className="bg-slate-600 text-center px-3 py-1 rounded-md">Blazor</div>
                <div className="bg-slate-600 text-center px-3 py-1 rounded-md">Angular</div>
                <div className="bg-slate-600 text-center px-3 py-1 rounded-md">SQL/MySQL/PostgreSQL</div>
                <div className="bg-slate-600 text-center px-3 py-1 rounded-md">Docker</div>
            </div>
            <p className="my-4 text-gray-400 text-sm">
                These are the skills in which I have the most experience and have worked with them in different projects. I am currently learning to master non-relational databases such as MongoDB.
            </p>
        </motion.section>
    );
}

export default Skills;