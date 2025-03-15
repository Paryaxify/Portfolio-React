import { motion } from "framer-motion";

const ProjectCard = ({ title, description, technologies, image, darkMode, delay = 0 } : any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            className={`rounded-lg shadow-lg overflow-hidden ${darkMode ? 'bg-zinc-800' : 'bg-white'}`}
        >
            <div className="relative h-48 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{title}</h3>
            </div>

            <div className="p-6">
                <p className="mb-4">{description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                    {technologies.map((tech : any, index : number) => (
                        <span
                            key={index}
                            className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-zinc-700 text-violet-300' : 'bg-zinc-200 text-violet-700'
                                }`}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;