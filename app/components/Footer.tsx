export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-8xl mx-auto px-6 md:px-20 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="text-white/50 text-sm">
          <div
            className="mb-2"
            style={{ fontFamily: "SF Pro Display, -apple-system, sans-serif" }}
          >
            © {new Date().getFullYear()} Oasis. All rights reserved.
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <a
            href="/privacy"
            className="text-white/50 hover:text-white/80 transition"
            style={{ fontFamily: "SF Pro Display, -apple-system, sans-serif" }}
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="text-white/50 hover:text-white/80 transition"
            style={{ fontFamily: "SF Pro Display, -apple-system, sans-serif" }}
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}