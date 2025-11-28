import { Heart, Sparkles, Users, Compass } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Discipline',
      description: 'Cultivating consistency through daily practice and dedication'
    },
    {
      icon: Sparkles,
      title: 'Peace',
      description: 'Finding stillness within through breath and meditation'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Growing together in a supportive and nurturing environment'
    },
    {
      icon: Compass,
      title: 'Transformation',
      description: 'Embracing the journey toward clarity and inner liberation'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-orange-50" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-600 font-medium text-sm uppercase tracking-wider">Our Story</span>
            <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              About Swasthya Yoga Center - Premier Yoga Studio in Chinchwad
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At Swasthya Yoga Center in Chinchwad, Pimpri-Chinchwad, we offer the best yoga classes combining traditional yogic wisdom with modern wellness practices. Our yoga studio is a sanctuary where you can experience authentic hatha yoga, therapeutic yoga for health, meditation, and pranayama breathing techniques.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We guide each practitioner on their unique journey toward health, balance, and inner peace. Through dedicated practice, mindful breathing, and compassionate guidance, we create a community where transformation happens naturally.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Rooted in the philosophy of <span className="font-semibold text-orange-700">मोक्षमार्ग (Moksha Marg)</span>—the path toward clarity, harmony, and inner liberation—we honor the depth of yoga's spiritual heritage while making it accessible to all who seek wellness.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-orange-100 rounded-3xl p-8 flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#15803d" strokeWidth="0.5" opacity="0.3" />
                  <circle cx="100" cy="100" r="75" fill="none" stroke="#ea580c" strokeWidth="0.5" opacity="0.4" />
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#15803d" strokeWidth="0.5" opacity="0.5" />
                  <text x="100" y="120" fontSize="72" fill="#ea580c" textAnchor="middle" fontFamily="serif">ॐ</text>
                </svg>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <p className="text-sm text-gray-600 italic">
                  "A guided journey toward clarity, harmony, and inner liberation through the ancient wisdom of yoga."
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}