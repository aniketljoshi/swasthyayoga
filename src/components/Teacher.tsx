import { Award, Heart, BookOpen, Users } from 'lucide-react';

export default function Teacher() {
  const expertise = [
    { icon: Award, text: 'Certified Hatha Yoga Instructor' },
    { icon: Heart, text: 'Yogupchar Therapy Specialist' },
    { icon: BookOpen, text: 'Pranayama & Meditation Guide' },
    { icon: Users, text: '20+ Years Teaching Experience' }
  ];

  return (
    <section id="teacher" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-medium text-sm uppercase tracking-wider">Meet Your Guide</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Our Teacher
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-green-100 via-orange-50 to-amber-100 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center p-12">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <circle cx="100" cy="100" r="95" fill="none" stroke="#15803d" strokeWidth="0.5" opacity="0.2" />
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#ea580c" strokeWidth="0.5" opacity="0.3" />
                    <circle cx="100" cy="100" r="70" fill="#f97316" opacity="0.1" />

                    <circle cx="100" cy="80" r="30" fill="#15803d" opacity="0.3" />
                    <circle cx="85" cy="75" r="3" fill="#ffffff" />
                    <circle cx="115" cy="75" r="3" fill="#ffffff" />

                    <path d="M 70 120 Q 75 110, 80 115 L 85 125 L 90 120 Q 95 110, 100 115 L 105 125 L 110 120 Q 115 110, 120 115 L 125 125 L 130 120"
                          fill="none" stroke="#15803d" strokeWidth="2" opacity="0.4" />

                    <path d="M 100 115 L 100 135 M 85 125 L 75 140 M 115 125 L 125 140 M 90 150 L 100 135 L 110 150"
                          stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full opacity-20 blur-2xl"></div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Dedicated Yoga Instructor
                </h3>
                <p className="text-orange-600 font-medium">Founder & Lead Teacher</p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                With over a decade of devoted practice and teaching, our instructor brings deep knowledge of traditional Hatha yoga, therapeutic applications, and mindfulness practices to every session.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Trained in both classical yoga traditions and modern therapeutic approaches, they guide students with compassion, patience, and personalized attention. Their teaching philosophy centers on discipline balanced with gentleness, honoring each individual's unique journey.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Believing in yoga as a holistic path to wellbeing, they emphasize the union of mind, body, and breath—helping students discover strength, flexibility, and inner peace that extends far beyond the mat.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-orange-50 rounded-xl p-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="text-sm text-gray-700 font-medium leading-tight mt-1.5">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}