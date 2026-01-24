export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="min-h-screen relative overflow-hidden pt-6 pb-12 md:pt-0 md:pb-16">
        {/* Glow */}
        <div
          className="absolute left-0 top-1/3 w-96 h-96 blur-3xl pointer-events-none animate-glow"
          style={{
            background:
              "radial-gradient(circle, rgba(147,51,234,0.4) 0%, rgba(59,130,246,0.3) 40%, rgba(236,72,153,0.2) 70%, transparent 100%)",
            opacity: 0.4,
          }}
        />

        <div className="max-w-5xl mx-auto px-6 md:px-20 relative z-10">
          {/* TEXT */}
          <div className="flex flex-col items-center text-center mb-8 md:mb-10">
            {/* APP ICON */}
            <img
              src="/appIcon1.png"
              alt="Oasis app icon"
              className="mb-6 w-22 h-22 md:w-26 md:h-26 "
              draggable={false}
            />

            <h1
              className="text-3xl md:text-4xl font-normal text-white mb-4 leading-tight"
              style={{ fontFamily: "SF Pro Display, -apple-system, sans-serif" }}
            >
              Speaking is 387% faster than typing.
            </h1>

            <p
              className="text-lg md:text-xl mb-6 md:mb-7 leading-relaxed text-white/50"
              style={{
                fontFamily: "SF Pro Display, -apple-system, sans-serif",
                fontWeight: 400,
              }}
            >
              Transcribe your voice instantly, intelligently, on any app.
            </p>

           <a
  href="/api/download"
  className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition"
  style={{ fontFamily: "SF Pro Display, -apple-system, sans-serif" }}
>
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 md:w-5 md:h-5 overflow-visible"
    aria-hidden="true"
  >
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>

  Try for Free on MacOS
</a>
          </div>
        </div>

        {/* VIDEO */}
        <div className="max-w-8xl mx-auto px-6 md:px-100 -mt-2 md:-mt-4">
          <video autoPlay loop muted playsInline className="w-full h-auto">
            <source src="/demoanimation4.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}