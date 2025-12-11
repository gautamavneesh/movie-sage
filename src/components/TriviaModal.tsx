interface TriviaModalProps {
  isOpen: boolean;
  onClose: () => void;
  movieTitle: string;
  trivia: string;
}

export default function TriviaModal({ isOpen, onClose, movieTitle, trivia }: TriviaModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-900 text-gray-100 rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">{movieTitle} Trivia</h2>
        <p className="mb-6">{trivia}</p>
        <button
          onClick={onClose}
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}
