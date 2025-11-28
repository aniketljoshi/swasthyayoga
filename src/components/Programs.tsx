import { Sunrise, Mountain, Heart, Wind, Baby, Calendar } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: Sunrise,
      title: 'Beginner Yoga',
      description: 'Build a strong foundation with gentle postures, proper alignment, and breath awareness. Perfect for those taking their first steps into yoga practice.',
      duration: '60 mins',
      level: 'Beginner',
      image: 'beginner-yoga'
    },
    {
      icon: Mountain,
      title: 'Advanced Hatha Yoga',
      description: 'Deepen your practice with challenging asanas, extended holds, and refined techniques. Develop strength, flexibility, and profound body awareness.',
      duration: '90 mins',
      level: 'Advanced',
      image: 'advanced-hatha'
    },
    {
      icon: Heart,
      title: 'Therapeutic Yoga (Yogupchar)',
      description: 'Specialized sequences for back pain relief, improved mobility, stress management, and hormonal balance. Healing through mindful movement.',
      duration: '75 mins',
      level: 'All Levels',
      image: 'therapeutic-yoga'
    },
    {
      icon: Wind,
      title: 'Meditation & Pranayama',
      description: 'Master the art of breathwork and stillness. Cultivate emotional clarity, mental peace, and inner balance through ancient breathing techniques.',
      duration: '45 mins',
      level: 'All Levels',
      image: 'meditation-pranayama'
    },
    {
      icon: Baby,
      title: 'Kids Yoga',
      description: 'Playful movement practices that build focus, creativity, coordination, and confidence. A joyful introduction to yoga for young practitioners.',
      duration: '45 mins',
      level: 'Ages 5-14',
      image: 'kids-yoga'
    },
    {
      icon: Calendar,
      title: 'Weekend Workshops',
      description: 'Special sessions on detoxification, vedic chanting, grounding practices, and yogic lifestyle wisdom. Deepen your understanding beyond the mat.',
      duration: 'Varies',
      level: 'All Levels',
      image: 'workshops'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white" aria-labelledby="programs-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-medium text-sm uppercase tracking-wider">What We Offer</span>
          <h2 id="programs-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Yoga Classes & Programs in Chinchwad
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully designed programs that blend traditional wisdom with practical wellness approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-orange-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100"
            >
              <div className="h-48 bg-gradient-to-br from-green-800 to-emerald-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <program.icon className="w-20 h-20 text-white/90 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                  {program.level}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {program.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-orange-600 font-medium">{program.duration}</span>
                  <a
                    href="#contact"
                    className="text-green-700 font-medium hover:text-orange-600 transition-colors"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}