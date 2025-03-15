import { motion } from "framer-motion";
import ExperienceItem from "./ExperienceItem";

const Experience = ({ darkMode } : any) => {
    return (
        <section className="min-h-screen flex flex-col justify-center py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold">
                    <span className="text-violet-500">&lt;</span>
                    Experience
                    <span className="text-violet-500">/&gt;</span>
                </h2>
                <div className="w-24 h-1 bg-violet-500 mx-auto mt-4"></div>
            </motion.div>

            <div className="relative max-w-3xl mx-auto">
                <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${darkMode ? 'bg-zinc-700' : 'bg-zinc-300'}`}></div>

                <ExperienceItem
                    title="Software Developer (E3)"
                    company="Interra Systems"
                    period="July 2023 — Present"
                    location="Noida, India"
                    description={["Web Development", "System Administration", "Security enhancements"]}
                    darkMode={darkMode}
                    index={0}
                />

                <ExperienceItem
                    title="Software Intern"
                    company="Interra Systems"
                    period="January 2023 — June 2023"
                    location="Noida, India"
                    description={["Front End Development"]}
                    darkMode={darkMode}
                    index={1}
                />

                <ExperienceItem
                    title="Software Intern (Volunteer)"
                    company="United ATS (AIESEC Exchange Program)"
                    period="December 2019 — January 2020"
                    location="Cairo, Egypt"
                    description={["Automation scripting", "3D modelling"]}
                    darkMode={darkMode}
                    index={2}
                />
            </div>
        </section>
    );
};

export default Experience