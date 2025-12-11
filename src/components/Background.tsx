interface BackgroundProps {
  image: string;
  children: React.ReactNode;
}

export default function Background({ image, children }: BackgroundProps) {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Actual content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
}
