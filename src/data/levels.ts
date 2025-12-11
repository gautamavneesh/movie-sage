// 1️⃣ Interfaces
export interface Movie {
  title: string;
  platform: string;
  completed: boolean;
  trivia?: string;
  image?: string;
}

export interface Level {
  id: number;
  title: string;
  description: string;
  movies: Movie[];
}

// 2️⃣ Movie Levels Data
export const levels: Level[] = [
  {
    id: 1,
    title: "Level 1: Classics",
    description: "Must-watch influential classics.",
    movies: [
      {
        title: "The Shawshank Redemption",
        platform: "Netflix",
        completed: false,
        image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        trivia: "The movie was shot mostly in Ohio's Mansfield Reformatory.",
      },
      {
        title: "The Godfather",
        platform: "Amazon Prime",
        completed: false,
        image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      },
    ],
  },

  {
    id: 2,
    title: "Level 2: Modern Gems",
    description: "Critically acclaimed modern masterpieces.",
    movies: [
      {
        title: "Inception",
        platform: "JioCinema",
        completed: false,
        trivia: "Christopher Nolan wrote the script over 10 years.",
        image: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg", // ⬅ Added image
      },
    ],
  },
];
