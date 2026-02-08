import { TrendingUp, Building2, Cpu, LineChart } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  badge: string;
  description: string;
  example: string;
  url: string;
  icon: 'gold' | 'realestate' | 'ai' | 'stocks';
}

const icons = {
  gold: TrendingUp,
  realestate: Building2,
  ai: Cpu,
  stocks: LineChart,
};

function ServiceCard({ title, badge, description, example, url, icon }: ServiceCardProps) {
  const Icon = icons[icon];

  return (
    <a
      href={url}
      className="group relative block bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-[#C5A059]/30 rounded-lg p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C5A059]/20 hover:border-[#C5A059]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/0 to-[#C5A059]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-[#C5A059]/10 rounded-lg group-hover:bg-[#C5A059]/20 transition-colors">
            <Icon className="w-6 h-6 text-[#C5A059]" />
          </div>
          <span className="text-xs font-['IBM_Plex_Sans_Arabic'] bg-[#C5A059]/20 text-[#C5A059] px-3 py-1 rounded-full">
            {badge}
          </span>
        </div>

        <h3 className="text-xl font-['Cairo'] font-black text-white mb-3">
          {title}
        </h3>

        <p className="text-gray-400 font-['IBM_Plex_Sans_Arabic'] text-sm leading-relaxed mb-4 font-medium">
          {description}
        </p>

        <div className="bg-black/40 border border-[#C5A059]/10 rounded-md p-3 mb-4">
          <p className="text-gray-300 font-['IBM_Plex_Sans_Arabic'] text-xs leading-relaxed font-medium">
            {example}
          </p>
        </div>

        <div className="flex items-center text-[#C5A059] text-sm font-['IBM_Plex_Sans_Arabic'] group-hover:gap-2 transition-all font-600">
          <span>استكشف الآن</span>
          <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
        </div>
      </div>
    </a>
  );
}

export default ServiceCard;
