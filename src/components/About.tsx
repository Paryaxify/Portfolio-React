import { motion } from "framer-motion";
import SkillBadge from "./SkillBadge";

// About Component
const About = ({ darkMode } : any) => {
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
                    About Me
                    <span className="text-violet-500">/&gt;</span>
                </h2>
                <div className="w-24 h-1 bg-violet-500 mx-auto mt-4"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
                    <p className="text-lg mb-4">
                        Hey there! I'm Paryagdeep, a software engineer with a passion for building elegant, efficient web applications.
                        Currently based in Noida, I specialize in frontend and backend development using modern technologies.
                    </p>
                    <p className="text-lg mb-4">
                        With experience at Interra Systems, I've worked on porting applications from legacy frameworks to modern ones,
                        optimizing performance, and enhancing security. I enjoy solving complex problems and creating intuitive user experiences.
                    </p>
                    <p className="text-lg">
                        When I'm not coding, you might find me exploring new technologies, contributing to open-source projects,
                        or participating in international exchange programs like my experience in Cairo, Egypt.
                    </p>

                    <div className="mt-8">
                        <h3 className="text-2xl font-bold mb-4">Education</h3>
                        <div className={`p-4 rounded-lg mb-4 ${darkMode ? 'bg-zinc-800' : 'bg-zinc-100'}`}>
                            <div className="flex justify-between">
                                <h4 className="font-bold">B.E. Computer Engineering</h4>
                                <span className="text-violet-500">2019 — 2023</span>
                            </div>
                            <p>Thapar Institute of Engineering and Technology, Patiala</p>
                            <p className="text-sm mt-1">CGPA: 8.96</p>
                        </div>
                        <div className={`p-4 rounded-lg ${darkMode ? 'bg-zinc-800' : 'bg-zinc-100'}`}>
                            <div className="flex justify-between">
                                <h4 className="font-bold">CLASS XII</h4>
                                <span className="text-violet-500">2019</span>
                            </div>
                            <p>SGGS Collegiate Public School, Chandigarh</p>
                            <p className="text-sm mt-1">CGPA: 8.52</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className="text-2xl font-bold mb-4">My Skills</h3>

                    <div className="mb-8">
                        <h4 className="font-semibold mb-3">Languages</h4>
                        <div className="flex flex-wrap gap-3">
                            <SkillBadge label="Python" percentage={90} darkMode={darkMode} />
                            <SkillBadge label="TypeScript" percentage={85} darkMode={darkMode} />
                            <SkillBadge label="JavaScript" percentage={90} darkMode={darkMode} />
                            <SkillBadge label="Go" percentage={60} darkMode={darkMode} />
                            <SkillBadge label="C++" percentage={70} darkMode={darkMode} />
                            <SkillBadge label="HTML/CSS" percentage={95} darkMode={darkMode} />
                        </div>
                    </div>

                    <div className="mb-8">
                        <h4 className="font-semibold mb-3">Frameworks & Libraries</h4>
                        <div className="flex flex-wrap gap-3">
                            <SkillBadge label="React" percentage={93} darkMode={darkMode} />
                            <SkillBadge label="Next.js" percentage={90} darkMode={darkMode} />
                            <SkillBadge label="Django" percentage={90} darkMode={darkMode} />
                            <SkillBadge label="Angular" percentage={80} darkMode={darkMode} />
                            <SkillBadge label="Flask" percentage={75} darkMode={darkMode} />
                            <SkillBadge label="Node.js" percentage={70} darkMode={darkMode} />
                        </div>
                    </div>

                    <div className="mb-8">
                        <h4 className="font-semibold mb-3">Tools & Platforms</h4>
                        <div className="flex flex-wrap gap-3">
                            <SkillBadge label="Linux" percentage={90} darkMode={darkMode} />
                            <SkillBadge label="Docker" percentage={85} darkMode={darkMode} />
                            <SkillBadge label="Git" percentage={70} darkMode={darkMode} />
                            <SkillBadge label="PostgreSQL" percentage={65} darkMode={darkMode} />
                            <SkillBadge label="Jenkins" percentage={60} darkMode={darkMode} />
                            <SkillBadge label="Vim" percentage={75} darkMode={darkMode} />
                        </div>
                    </div>

                    {/* <div>
                        <h4 className="font-semibold mb-3">Languages (Human)</h4>
                        <div className="flex flex-wrap gap-3">
                            <SkillBadge label="English" percentage={95} darkMode={darkMode} />
                            <SkillBadge label="Punjabi" percentage={100} darkMode={darkMode} />
                            <SkillBadge label="Hindi" percentage={98} darkMode={darkMode} />
                        </div>
                    </div> */}
                </motion.div>
            </div>
        </section>
    );
};


export default About;