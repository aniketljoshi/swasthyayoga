import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '094232 04328',
      link: 'tel:09423204328'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@swasthyayoga.com',
      link: 'mailto:info@swasthyayoga.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Madhuram Bunglow, Ganesh Colony, Keshav Nagar, Chinchwad, Pimpri-Chinchwad, Maharashtra 411033',
      link: 'https://maps.app.goo.gl/sEWLmrsPBXes3mcm6'
    }
  ];

  const hours = [
    { days: 'Monday - Saturday', time: '5:30 AM - 9:30 PM' },
    { days: 'Sunday', time: 'Closed' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-orange-50 to-white" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-medium text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Visit Swasthya Yoga Center in Chinchwad, Pimpri
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Begin your wellness journey with us. We're here to guide you every step of the way.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target={item.icon === MapPin ? '_blank' : undefined}
                  rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </a>
              ))}

              <div className="p-6 bg-white rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900">Opening Hours</h3>
                </div>
                <div className="space-y-2">
                  {hours.map((hour, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-700">{hour.days}</span>
                      <span className="text-gray-900 font-medium">{hour.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.149214893501!2d73.7841026!3d18.6224033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9af4411f5bb%3A0xc19925e69bb9b366!2sSwasthya%20Yoga%20Center%2C%20Chinchawad!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Swasthya Yoga Center location map"
              ></iframe>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-green-800 to-emerald-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-xl mb-8 text-gray-100">
              Join our welcoming community and discover the transformative power of yoga
            </p>
            <a
              href="tel:09423204328"
              className="inline-block bg-white text-green-800 px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all"
            >
              Book Your Trial Class Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}