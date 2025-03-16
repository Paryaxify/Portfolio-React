import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

// Projects Component
const Projects = ({ darkMode } : any) => {
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
                    Projects
                    <span className="text-violet-500">/&gt;</span>
                </h2>
                <div className="w-24 h-1 bg-violet-500 mx-auto mt-4"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                <ProjectCard
                    title="BAQSA"
                    description="A blockchain-based tracking system that uses decentralized technology to ensure secure and transparent tracking. Implemented with JWT-based authentication and smart contracts to enhance security and data integrity."
                    technologies={["Solidity", "Express.js", "React", "Flutter", "Arduino"]}
                    image="/api/placeholder/400/250"
                    darkMode={darkMode}
                    delay={0.1}
                />

                <ProjectCard
                    title="CAMPGROUNDS"
                    description="A full-stack application for discovering and sharing campgrounds. Features user authentication with Passport.js, role-based access control, and interactive map searches using Mapbox API."
                    technologies={["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap"]}
                    image="/api/placeholder/400/250"
                    darkMode={darkMode}
                    delay={0.2}
                />

                <ProjectCard
                    title="Jellyfin Server"
                    description="A responsive media streaming platform with adaptive video quality and user engagement features. Supports different video formats and aspect ratios."
                    technologies={["Prowlarr", "Sonarr", "Radarr", "FlareSolverr", "QbitTorrent", "Jellyfin"]}
                    image="/api/placeholder/400/250"
                    darkMode={darkMode}
                    delay={0.4}
                />
            </div>
        </section>
    );
};

export default Projects