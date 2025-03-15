import { motion } from "framer-motion";

const ExperienceItem = ({ title, company, period, location, description, darkMode, index } : any) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className={`relative mb-12 ${isEven ? 'md:ml-auto md:mr-8 md:pr-8' : 'md:mr-auto md:ml-8 md:pl-8'} md:w-5/12`}
        >
            <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-zinc-800' : 'bg-white'}`}>
                <span className={`absolute top-6 ${isEven ? 'md:-left-3' : 'md:-right-3'} w-6 h-6 rounded-full border-4 ${darkMode ? 'border-zinc-900 bg-violet-500' : 'border-white bg-violet-500'}`}></span>

                <h3 className="text-xl font-bold">{title}</h3>
                <div className="flex items-center mt-1 mb-3">
                    <span className="text-violet-500 font-semibold">{company}</span>
                    <span className="mx-2">•</span>
                    <span className="text-gray-400">{period}</span>
                </div>
                <p className="text-gray-400 mb-4">{location}</p>

                <ul className="space-y-2">
                    {description.map((item : any, i : number) => (
                        <li key={i} className="flex items-start">
                            <span className="text-violet-500 mr-2">▹</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default ExperienceItem;