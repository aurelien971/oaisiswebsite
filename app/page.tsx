export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="min-h-screen flex items-center relative overflow-hidden py-20 md:py-0">
        {/* Animated Gradient Glow */}
        <div 
          className="absolute left-0 top-1/5 md:top-1/2 w-96 h-96 blur-3xl pointer-events-none animate-glow"
          style={{
            background: 'radial-gradient(circle, rgba(147,51,234,0.4) 0%, rgba(59,130,246,0.3) 40%, rgba(236,72,153,0.2) 70%, transparent 100%)',
            transform: 'translateY(-50%)',
            opacity: 0.4
          }}
        />

        <div className="max-w-8xl mx-auto px-6 md:px-20 w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            
            {/* Left: Text - Centered on mobile, Left-aligned on desktop */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left order-1">
              <h1 
                className="text-3xl md:text-4xl font-normal text-white mb-4 md:mb-5 leading-tight"
                style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}
              >
                Speaking is 387% faster than typing.
              </h1>
              
              <p 
                className="text-lg md:text-xl mb-6 md:mb-8 leading-relaxed"
                style={{ 
                  fontFamily: 'SF Pro Display, -apple-system, sans-serif',
                  fontWeight: 300,
                  background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.65) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Transcribe your voice instantly, and intelligently
              </p>
              
              <a 
                href="#download" 
                className="inline-flex items-center gap-2 bg-white text-black px-6 md:px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition order-3 md:order-2"
                style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Try for Free on MacOS
              </a>
            </div>

            {/* Right: Video - Pushed right on desktop */}
            <div className="flex items-center justify-center md:justify-end order-2 md:order-3">
              <div className="rounded-3xl overflow-hidden shadow-2xl w-full max-w-md md:max-w-none">
                <video 
                  autoPlay 
                  loop 
                  muted  
                  playsInline
                  className="w-full h-auto"
                >
                  <source src="/demo-animation.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}