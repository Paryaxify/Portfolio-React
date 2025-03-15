import { motion } from "framer-motion";
import TechBadge from "./TechBadge";

// Home Component
const Home = ({ darkMode }: any) => {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="md:w-1/2 text-center md:text-left md:pr-12"
            >
                <div className="mb-6">
                    <span className="text-violet-500 text-xl font-mono">Hello World! I'm</span>
                    <h1 className="text-5xl md:text-6xl font-bold mt-2">Paryagdeep Singh</h1>
                    <h2 className="text-2xl md:text-3xl mt-4 text-gray-400">
                        <span className="text-violet-500">&lt;</span>
                        Software Engineer
                        <span className="text-violet-500">/&gt;</span>
                    </h2>
                </div>

                <p className="text-lg mt-6 mb-8 max-w-xl">
                    Building modern web applications with a focus on performance and user experience.
                    Currently working at Interra Systems, crafting elegant solutions to complex problems.
                </p>

                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <TechBadge label="React" icon="⚛️" darkMode={darkMode} />
                    <TechBadge label="TypeScript" icon="📘" darkMode={darkMode} />
                    <TechBadge label="Django" icon="🐍" darkMode={darkMode} />
                    <TechBadge label="Next.js" icon="▲" darkMode={darkMode} />
                    <TechBadge label="Node.js" icon="🟢" darkMode={darkMode} />
                </div>

                <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="mailto:contact@prxfy.dev"
                        className="px-6 py-3 bg-violet-600 text-white rounded-lg shadow-lg hover:bg-violet-700 transition duration-300"
                    >
                        Get in Touch
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/Paryaxify"
                        target="_blank"
                        rel="noreferrer"
                        className={`px-6 py-3 rounded-lg shadow-lg transition duration-300 flex items-center gap-2 ${darkMode ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-200 hover:bg-zinc-300'
                            }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                        GitHub
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://linkedin.com/in/paryagdeep-singh"
                        target="_blank"
                        rel="noreferrer"
                        className={`px-6 py-3 rounded-lg shadow-lg transition duration-300 flex items-center gap-2 ${darkMode ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-200 hover:bg-zinc-300'
                            }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                        LinkedIn
                    </motion.a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
            >
                <div className={`relative w-64 h-64 md:w-120 md:h-120 rounded-full overflow-hidden border-4 ${darkMode ? 'border-violet-500 shadow-xl shadow-violet-500/20' : 'border-violet-400 shadow-xl shadow-violet-400/20'}`}>
                    <img src="src/assets/aesthetic-ps.webp" alt="Paryagdeep Singh" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-transparent"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Home;