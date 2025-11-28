import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Deepa Nayak',
      role: 'Health Warrior',
      text: 'I struggled with sciatica for 9 months - no medicine or doctor helped. Then I was diagnosed with cervical spondylosis and felt mentally exhausted. My husband advised me to join Laxman Sir\'s 10-day medical yoga course, and within just 5 days, my pain completely vanished. I feel mentally fresh, physically pain-free, and truly blessed.',
      rating: 5
    },
    {
      name: 'Sakshi Sonigara',
      role: 'Returning Student',
      text: 'I recently rejoined Joshi Sir\'s yoga class after attending as a kid, and it has been incredible. The classes are fun, engaging, and leave me feeling refreshed all day. Joshi Sir is not just an instructor but a mentor in every sense. His guidance makes each session valuable for both body and mind.',
      rating: 5
    },
    {
      name: 'Sangeeta Shul',
      role: 'Long-term Practitioner',
      text: 'I attended Joshi Sir\'s class in my 40s when I was healthy with no issues. After a 10-year gap due to work, I started having health problems in my 50s. I rejoined last month and found drastic positive changes in myself. Excellent yoga class in Chinchwad - I recommend everyone join for fitness and a healthy lifestyle.',
      rating: 5
    },
    {
      name: 'Gopal Bhosale',
      role: 'Former Allergy Sufferer',
      text: 'Amazing results from yoga therapy! I suffered from dust and climate allergies for 30 years. After trying allopathy, homeopathy, and ayurveda with no permanent relief, I met Joshi Sir. He gave me confidence for relief without medicine. I joined during heavy cold and saw results within two to three days. Big relief from sleepless nights and daytime irritations.',
      rating: 5
    },
    {
      name: 'Sulbha Giri',
      role: 'Weight Loss Success',
      text: 'I started yoga at Swasthya Yoga Center in 2010 and got amazing results in better health and weight loss. Though I had to leave due to work commitments, I continue using the healthy life tricks shared by Joshi Sir and benefit from them. I will always love to join again in the near future.',
      rating: 5
    },
    {
      name: 'Rashmi Doshi',
      role: 'Slip Disc Recovery',
      text: 'I was suffering from slip disc for two months and my right hand was badly affected with limited movement. When I started yoga therapy with Joshi Sir, I got amazing results and recovered in just 15-20 days. Initially I was reluctant about how yoga could help when medicines didn\'t, but trust me, the results are incredible.',
      rating: 5
    },
    {
      name: 'Samir Chaubal',
      role: '17-Year Beneficiary',
      text: 'I\'ve known Shri Laxman Joshi for over 17 years. When I had severe spondylitis-sciatic pains and tried everything with no relief, he assured me healing through medical yoga in 7 days. I experienced complete relief in just 3 days - a true miracle. Recently, my 90-year-old father had similar pains and was bed-ridden. After one month with Joshi Sir, he bounced back and now takes regular 3-5km walks.',
      rating: 5
    },
    {
      name: 'Mansi Jain',
      role: 'Back Pain Relief',
      text: 'I had severe back pain for 6 months due to disc herniation. After doing yoga with Sir, I got 60-70 percent relief in just 10 days. They have great experience and I really recommend them if you have any pain issues.',
      rating: 5
    },
    {
      name: 'Shital Mali',
      role: 'Knee OA Recovery',
      text: 'Since 2011, I suffered with low back and knee pain due to B12 and Vitamin D3 deficiency. I visited multiple orthopedic doctors and tried various treatments, but the pain became pathetic. I was unable to walk or bend my knee. Doctors diagnosed early knee OA and said only surgery could help. Finally, I took a customized 10-day treatment at the yoga center which strengthened my knee and lower back muscles. Now I feel much better than before. Thank you Guruji.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-medium text-sm uppercase tracking-wider">Student Voices</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            What Our Students Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from our yoga community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-orange-200" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}