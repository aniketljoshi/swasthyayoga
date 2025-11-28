import { Clock } from 'lucide-react';

export default function Schedule() {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border-2 border-orange-200">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full mb-6">
              <Clock className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Class Schedule
            </h2>

            <div className="bg-orange-50 rounded-2xl p-8 mb-8">
              <h3 className="font-bold text-gray-900 mb-4 text-xl">Class Timings</h3>
              <div className="space-y-3 text-gray-700 text-lg">
                <p><span className="font-medium">Monday - Saturday:</span> 5:30 AM - 9:30 PM</p>
                <p><span className="font-medium">Sunday:</span> Closed</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-8 border-2 border-green-200">
              <h3 className="font-bold text-gray-900 mb-3 text-xl flex items-center justify-center gap-2">
                <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Special Treatment Classes Available
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We offer personalized therapeutic yoga sessions tailored to your specific health concerns. Special treatment classes are designed based on individual requirements to focus on targeted problems such as back pain, joint issues, stress management, or chronic conditions.
              </p>
            </div>

            <p className="text-gray-600 mb-8">
              Contact us to discuss your specific needs and schedule a consultation for personalized treatment classes.
            </p>

            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transition-all"
            >
              Contact Us for Class Times
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}