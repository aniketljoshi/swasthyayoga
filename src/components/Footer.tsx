import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <Logo variant="light" size="medium" />

          <div className="text-center">
            <p className="text-gray-400 mb-2">
              Swasthya Yogupchar Wa Yogmargdarshan Kendra
            </p>
            <p className="text-gray-500 text-sm">
              स्वास्थ्य योगोपचार व योग मार्गदर्शन केंद्र
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#home" className="hover:text-orange-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
            <a href="#programs" className="hover:text-orange-400 transition-colors">Programs</a>
            <a href="#teacher" className="hover:text-orange-400 transition-colors">Teacher</a>
            <a href="#testimonials" className="hover:text-orange-400 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
          </div>

          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

          <div className="text-center">
            <p className="text-gray-400 text-sm">
              मोक्षमार्ग — A path toward clarity, harmony, and inner liberation
            </p>
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p>&copy; 2025 Swasthya Yoga Center. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}