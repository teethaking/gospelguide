import { Users, Award, Target, Heart, CheckCircle, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Star className="w-8 h-8 text-orange-600" />,
      title: "Quality",
      description: "We deliver exceptional quality in every project, ensuring your satisfaction."
    },
    {
      icon: <Heart className="w-8 h-8 text-orange-600" />,
      title: "Creativity",
      description: "We bring fresh, innovative ideas to make your vision stand out."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-orange-600" />,
      title: "Reliability",
      description: "You can count on us for timely delivery and professional service."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We listen and deliver what you need."
    }
  ];

  const achievements = [
    "500+ Successful Projects",
    "100+ Happy Clients",
    "5+ Years of Experience",
    "Award-Winning Designs"
  ];

  return (
    <main className="pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Sam Arthur Signs & Fabrication
              </h1>
              <p className="text-xl text-orange-100 mb-8">
                Where Your Imagination Becomes Reality. We are passionate about 
                transforming creative ideas into stunning visual experiences through 
                professional design, printing, and fabrication services.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-orange-700 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 font-bold text-3xl">SA</span>
                  </div>
                  <p className="text-white text-xl font-semibold">Creative Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Sam Arthur Signs & Fabrication was founded with a simple yet powerful 
                vision: to bring creative ideas to life through exceptional design and 
                fabrication services. What started as a passion for visual communication 
                has grown into a trusted partner for businesses and individuals across Ghana.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Located in the heart of Accra at Lapaz Flattop - Botwe Avenue, we have 
                been serving our community with dedication, creativity, and professional 
                excellence. Our team combines artistic vision with technical expertise 
                to deliver results that exceed expectations.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to be the go-to choice for graphic design, digital 
                printing, embroidery, and fabrication services, helping our clients 
                make lasting impressions in their respective markets.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">2019</div>
                <div className="text-gray-700">Founded</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                <div className="text-gray-700">Projects</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
                <div className="text-gray-700">Clients</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-700">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-orange-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-lg">
                To transform creative visions into reality through innovative design, 
                high-quality printing, and professional fabrication services. We are 
                committed to helping our clients communicate their message effectively 
                and make lasting impressions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Award className="w-10 h-10 text-orange-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-lg">
                To be Ghana's leading creative solutions provider, known for exceptional 
                quality, innovative designs, and outstanding customer service. We envision 
                a future where every business can access professional design and fabrication 
                services to achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              Passionate professionals dedicated to bringing your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Sam Arthur
              </h3>
              <p className="text-orange-600 font-medium mb-3">Founder & Creative Director</p>
              <p className="text-gray-600 text-sm">
                Visionary leader with a passion for creative excellence and customer satisfaction.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Design Team
              </h3>
              <p className="text-orange-600 font-medium mb-3">Creative Professionals</p>
              <p className="text-gray-600 text-sm">
                Talented designers who bring creativity and technical expertise to every project.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Production Team
              </h3>
              <p className="text-orange-600 font-medium mb-3">Fabrication Specialists</p>
              <p className="text-gray-600 text-sm">
                Skilled technicians ensuring quality production and timely delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-600">
              Milestones that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-orange-50 rounded-lg">
                <Award className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's discuss your project and bring your creative vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-orange-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Get Started Today
            </button>
            <a 
              href="tel:+233540504926"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Call: +233 540 504 926
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;