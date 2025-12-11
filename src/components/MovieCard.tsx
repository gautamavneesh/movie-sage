interface MovieCardProps {
  title: string;
  platform: string;
  completed: boolean;
  image?: string;
  trivia?: string;
  isUnlocked?: boolean; // NEW
  onToggle: () => void;
  onClick?: () => void; // NEW
}

export function MovieCard({
  title,
  platform,
  completed,
  image,
  trivia,
  isUnlocked = true,
  onToggle,
  onClick,
}: MovieCardProps) {
  return (
    <div
      className={`relative bg-gray-800 p-4 rounded-lg shadow flex space-x-4 transition 
        ${isUnlocked ? "hover:scale-[1.02] cursor-pointer" : "opacity-40 cursor-not-allowed"}`}
      onClick={isUnlocked ? onClick : undefined}
    >
      {/* Poster */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-20 h-28 object-cover rounded"
        />
      )}

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-400 text-sm">{platform}</p>

        {/* Trivia (optional) */}
        {trivia && (
          <p className="text-gray-300 text-xs mt-2 italic">💡 {trivia}</p>
        )}

        {/* Complete Button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent card click
            onToggle();
          }}
          className={`mt-3 px-3 py-1 rounded text-sm ${
            completed ? "bg-green-600" : "bg-blue-600"
          }`}
        >
          {completed ? "Completed ✔" : "Mark Complete"}
        </button>
      </div>

      {/* Locked Overlay */}
      {!isUnlocked && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded">
          <span className="text-white font-bold text-lg">🔒 Locked</span>
        </div>
      )}
    </div>
  );
}
