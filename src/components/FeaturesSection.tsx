import { Brain, Shield, Zap, Globe } from 'lucide-react';

function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: 'ذكاء اصطناعي سيادي',
      description: 'تحليل مخصص لواقع الاقتصاد المصري الجيوسياسي'
    },
    {
      icon: Shield,
      title: 'خصوصية سيادية',
      description: 'تشفير عسكري AES-256 يضمن عدم تخزين أو اطلاع أي طرف على استشاراتك'
    },
    {
      icon: Zap,
      title: 'كفاءة القرار',
      description: 'استشارات معمقة يتم تقديمها في أقل من 120 ثانية لتناسب وقتك الثمين'
    },
    {
      icon: Globe,
      title: 'رؤية 360 درجة',
      description: 'ربط لحظي بين قطاعات العقار والذهب والأسهم لصورة استثمارية كاملة'
    }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-['Cairo'] font-black text-white text-center mb-4">
          لماذا يثق كبار المستثمرين في Deep Break؟
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-[#C5A059]/20 rounded-xl p-8 hover:border-[#C5A059]/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#C5A059]/10 rounded-lg group-hover:bg-[#C5A059]/20 transition-colors flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#C5A059]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-['Cairo'] font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 font-['IBM_Plex_Sans_Arabic'] text-sm leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
