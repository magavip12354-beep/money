import { Lock, ShieldCheck, Eye } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black border-t border-[#C5A059]/20 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-8 mb-8 flex-wrap">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#C5A059]" />
            <span className="text-gray-400 font-['IBM_Plex_Sans_Arabic'] text-sm">
              تشفير عسكري AES-256
            </span>
          </div>
          <div className="text-[#C5A059]">|</div>
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-[#C5A059]" />
            <span className="text-gray-400 font-['IBM_Plex_Sans_Arabic'] text-sm">
              خصوصية تامة
            </span>
          </div>
          <div className="text-[#C5A059]">|</div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
            <span className="text-gray-400 font-['IBM_Plex_Sans_Arabic'] text-sm">
              Deep Break Security Protocols
            </span>
          </div>
        </div>

        <div className="bg-[#C5A059]/5 border border-[#C5A059]/20 rounded-lg p-6 text-center">
          <p className="text-gray-300 font-['IBM_Plex_Sans_Arabic'] text-sm leading-relaxed font-medium">
            نحن ندرك قيمة المعلومة؛ كافة استشاراتك تتم في بيئة مشفرة بالكامل ولا يتم تخزينها
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 font-['IBM_Plex_Sans_Arabic'] text-xs font-medium">
            © 2024 Deep Break. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
