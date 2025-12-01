import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero section - Swasthya Yoga Center">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="white" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-orange-500/20 to-transparent rounded-full blur-3xl breathing-animation"></div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto fade-in">
          <div className="mb-8 inline-block">
            <svg viewBox="0 0 120 120" className="w-24 h-24 mx-auto mb-4 breathing-animation">
              <circle cx="60" cy="60" r="58" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.4" />
              <text x="60" y="75" fontSize="48" fill="#fbbf24" textAnchor="middle" fontFamily="serif">ॐ</text>
            </svg>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Traditional Yoga Classes in Chinchwad<br />
            <span className="text-3xl md:text-5xl text-orange-200">Traditional Hatha Yoga & Meditation</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light">
            Join Swasthya Yoga Center in Pimpri-Chinchwad for therapeutic yoga, pranayama, meditation & power yoga
          </p>
          <p className="text-lg md:text-xl text-orange-200 mb-12 font-light">
            Expert instructors • All levels welcome • Trial classes available
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="group bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-2xl transition-all flex items-center gap-2"
            >
              Book a Trial Class
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#programs"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all"
            >
              View Programs
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/80">
            <Phone className="w-4 h-4" />
            <a href="tel:09423204328" className="hover:text-orange-300 transition-colors">
              094232 04328
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}