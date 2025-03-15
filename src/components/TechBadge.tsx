const TechBadge = ({ label, icon, darkMode } : any) => {
    return (
        <div className={`px-3 py-2 rounded-lg ${darkMode ? 'bg-zinc-800' : 'bg-zinc-100'} flex items-center`}>
            <span className="mr-2">{icon}</span>
            <span className="font-medium">{label}</span>
        </div>
    );
};

export default TechBadge;