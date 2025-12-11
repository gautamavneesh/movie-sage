import { levels } from "../data/levels";

export default function Levels() {
    // 1️⃣ Check if a level is fully completed
    const isLevelCompleted = (levelId: number) => {
        const saved = JSON.parse(localStorage.getItem("movieProgress") || "{}");
        const progress = saved[levelId] || [];
        return progress.length > 0 && progress.every((c: boolean) => c);
        };

        // 2️⃣ Check if a level is unlocked
        const isLevelUnlocked = (levelId: number) => {
        if (levelId === 1) return true; // Level 1 always unlocked
        return isLevelCompleted(levelId - 1);
    };
    
    return (
        <div className="p-6">
        <h2 className="text-3xl font-bold mb-6">Movie Levels</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {levels.map((level) => {
                const unlocked = isLevelUnlocked(level.id);

                return (
                    <div key={level.id} className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-bold">{level.title}</h3>
                        <p className="text-gray-400">{level.description}</p>
                    </div>

                    {unlocked ? (
                        <a
                        href={`/levels/${level.id}`}
                        className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
                        >
                        Play
                        </a>
                    ) : (
                        <span className="bg-gray-600 px-3 py-1 rounded text-gray-300">Locked 🔒</span>
                    )}
                    </div>
                );
            })}
        </div>
        </div>
    );
}
