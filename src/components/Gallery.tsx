export default function Gallery() {
  const images = [
    {
      title: 'Morning Hatha Yoga Class',
      alt: 'yoga posture for flexibility and strength',
      url: 'https://images.pexels.com/photos/3822356/pexels-photo-3822356.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Guided Meditation Session',
      alt: 'meditation group session for mindfulness',
      url: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Pranayama Breathing Practice',
      alt: 'pranayama breathing practice',
      url: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Kids Yoga Program',
      alt: 'kids yoga session for focus and movement',
      url: 'https://images.pexels.com/photos/8436564/pexels-photo-8436564.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Therapeutic Yoga for Wellness',
      alt: 'therapeutic yoga for back pain relief',
      url: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Advanced Asana Practice',
      alt: 'advanced hatha yoga class',
      url: 'https://images.pexels.com/photos/3822668/pexels-photo-3822668.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Peaceful Studio Space',
      alt: 'calm yoga studio interior with natural light',
      url: 'https://images.pexels.com/photos/3822385/pexels-photo-3822385.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Weekend Workshop',
      alt: 'swasthya yoga workshop session',
      url: 'https://images.pexels.com/photos/3822167/pexels-photo-3822167.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Group Yoga Practice',
      alt: 'power yoga group class session',
      url: 'https://images.pexels.com/photos/3822688/pexels-photo-3822688.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-medium text-sm uppercase tracking-wider">Visual Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Gallery
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Glimpses from our yoga sessions and community gatherings
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer relative"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white text-sm font-medium p-4 w-full">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Experience the peaceful atmosphere firsthand
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:shadow-lg transition-all"
          >
            Visit Our Center
          </a>
        </div>
      </div>
    </section>
  );
}