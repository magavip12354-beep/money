function Header() {
  return (
    <header className="relative bg-[#050505] border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="relative">
          <div className="absolute inset-0 blur-xl opacity-40 bg-[#C5A059]"></div>
          <img
            src="/photo_2025-10-08_09-35-19-removebg-preview.png"
            alt="Deep Break Logo"
            className="h-16 relative z-10"
          />
        </div>

        <nav className="flex gap-8 items-center">
          <a href="#services" className="text-gray-300 hover:text-[#C5A059] transition-colors font-['IBM_Plex_Sans_Arabic'] text-sm font-600">
            الخدمات
          </a>
          <a href="#vip" className="text-gray-300 hover:text-[#C5A059] transition-colors font-['IBM_Plex_Sans_Arabic'] text-sm font-600">
            المكتب الخاص
          </a>
          <a href="#features" className="text-gray-300 hover:text-[#C5A059] transition-colors font-['IBM_Plex_Sans_Arabic'] text-sm font-600">
            المميزات
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
