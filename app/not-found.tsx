export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-2xl md:text-3xl text-white mb-3"
          style={{ fontFamily: "SF Pro Display, -apple-system, sans-serif" }}
        >
          This page cannot be found
        </h1>

        <p
          className="text-white/60 mb-8"
          style={{ fontFamily: "SF Pro Display, -apple-system, sans-serif" }}
        >
          The link may be incorrect, or the page may have been moved.
        </p>

        <a
          href="/"
          className="inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
          style={{ fontFamily: "SF Pro Display, -apple-system, sans-serif" }}
        >
          Back to home
        </a>
      </div>
    </div>
  );
}