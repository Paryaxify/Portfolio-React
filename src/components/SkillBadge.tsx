const SkillBadge = ({ label, percentage, darkMode } : any ) => {
    return (
        <div className={`relative px-3 py-2 rounded-lg ${darkMode ? 'bg-zinc-800' : 'bg-zinc-100'}`}>
            <div className="flex justify-between mb-1">
                <span className="font-medium">{label}</span>
                <span className="text-violet-500">{percentage}%</span>
            </div>
            <div className={`w-full h-1 rounded-full ${darkMode ? 'bg-zinc-700' : 'bg-zinc-300'}`}>
                <div
                    className="h-1 rounded-full bg-violet-500"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default SkillBadge;