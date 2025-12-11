import TriviaModal from "../components/TriviaModal";
import { useParams } from "react-router-dom";
import { levels } from "../data/levels";
import { useState } from "react";
import { MovieCard } from "../components/MovieCard";
// const [triviaOpen, setTriviaOpen] = useState(false);
// const [currentTrivia, setCurrentTrivia] = useState({ movieTitle: "", trivia: "" });


export default function LevelDetails() {
    const { id } = useParams();
    const levelId = Number(id);

    // Find the level using the ID
    const level = levels.find((lvl) => lvl.id === levelId);

    if (!level) {
        return <div className="p-6">Level not found.</div>;
    }

    // Load saved progress from localStorage
    const savedProgress = JSON.parse(localStorage.getItem("movieProgress") || "{}");

    // Initialize movies with saved completion state
    const [triviaOpen, setTriviaOpen] = useState(false);
    const [currentTrivia, setCurrentTrivia] = useState({ movieTitle: "", trivia: "" });

    const initialMovies = level.movies.map((movie, index) => ({
    ...movie,
    completed: savedProgress[levelId]?.[index] || false,
    }));

    const [movies, setMovies] = useState(initialMovies);


    const toggleComplete = (index: number) => {
    const updated = [...movies];
    updated[index].completed = !updated[index].completed;
    setMovies(updated);

    const saved = JSON.parse(localStorage.getItem("movieProgress") || "{}");
    saved[levelId] = updated.map((m) => m.completed);
    localStorage.setItem("movieProgress", JSON.stringify(saved));

    // Open trivia modal if movie is marked complete
    if (updated[index].completed) {
        setCurrentTrivia({
        movieTitle: updated[index].title,
        trivia: updated[index].trivia || "No trivia available.",
        });
        setTriviaOpen(true);
    }
    };
    

    return (
        <div className="p-6">
        <h2 className="text-3xl font-bold">{level.title}</h2>
        <p className="text-gray-400 mt-2">{level.description}</p>

            <div className="mt-6 space-y-4">
                {movies.map((movie, i) => (
                    <MovieCard
                    key={i}
                    image={movie.image}
                    title={movie.title}
                    platform={movie.platform}
                    completed={movie.completed}
                    onToggle={() => toggleComplete(i)}
                    />
                ))}
            </div>
            <TriviaModal
            isOpen={triviaOpen}
            onClose={() => setTriviaOpen(false)}
            movieTitle={currentTrivia.movieTitle}
            trivia={currentTrivia.trivia}
            />
        </div>
    );
}
