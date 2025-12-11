export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-700 px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-purple-400">🎬 Movie Sage</h1>

      <div className="flex gap-6 text-gray-300">
        <a href="/" className="hover:text-white">Home</a>
        <a href="/levels" className="hover:text-white">Levels</a>
      </div>
    </nav>
  );
}
