import React, { useState } from 'react';
import { Palette, Printer, Shirt, Package, Star, Monitor, Scissors, Keyboard as Billboard } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      icon: <Palette className="w-12 h-12 text-orange-600" />,
      title: "Graphic Design",
      description: "Professional graphic design services for all your branding and marketing needs.",
      features: ["Logo Design", "Brand Identity", "Marketing Materials", "Digital Graphics"]
    },
    {
      icon: <Shirt className="w-12 h-12 text-orange-600" />,
      title: "Digital Embroidery",
      description: "High-quality embroidery services for uniforms, caps, and promotional items.",
      features: ["Custom Embroidery", "Logo Embroidery", "Uniform Services", "Promotional Items"]
    },
    {
      icon: <Package className="w-12 h-12 text-orange-600" />,
      title: "Souvenirs",
      description: "Custom souvenirs and promotional products for events and businesses.",
      features: ["Custom Souvenirs", "Event Merchandise", "Corporate Gifts", "Promotional Products"]
    },
    {
      icon: <Printer className="w-12 h-12 text-orange-600" />,
      title: "Large Format Print",
      description: "Professional large format printing for banners, posters, and signage.",
      features: ["Banner Printing", "Poster Printing", "Vinyl Graphics", "Trade Show Displays"]
    },
    {
      icon: <Star className="w-12 h-12 text-orange-600" />,
      title: "Branding",
      description: "Complete branding solutions to establish and enhance your business identity.",
      features: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Marketing Collateral"]
    },
    {
      icon: <Monitor className="w-12 h-12 text-orange-600" />,
      title: "Digital Printing",
      description: "High-quality digital printing services for all your business needs.",
      features: ["Business Cards", "Flyers & Brochures", "Stickers & Labels", "Photo Printing"]
    },
    {
      icon: <Shirt className="w-12 h-12 text-orange-600" />,
      title: "T-Shirt Print",
      description: "Custom t-shirt printing with various techniques and high-quality materials.",
      features: ["Screen Printing", "Heat Transfer", "Vinyl Printing", "Custom Designs"]
    },
    {
      icon: <Scissors className="w-12 h-12 text-orange-600" />,
      title: "3D Fabrication",
      description: "Professional 3D fabrication and manufacturing services for custom projects.",
      features: ["3D Modeling", "Prototype Development", "Custom Fabrication", "Product Design"]
    },
    {
      icon: <Billboard className="w-12 h-12 text-orange-600" />,
      title: "Billboard Advertising",
      description: "Eye-catching billboard design and installation for maximum visibility.",
      features: ["Billboard Design", "Installation Services", "Maintenance", "Strategic Placement"]
    }
  ];

  const handleServiceClick = (serviceName: string) => {
    setSelectedService(serviceName);
    alert(`You selected: ${serviceName}`);
  };

  return (
    <main className="pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Comprehensive design, printing, and fabrication services to bring 
            your creative vision to life with professional quality and attention to detail.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              We Do:
            </h2>
            <p className="text-lg text-gray-600">
              Click on any service to get more information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-2 border-transparent hover:border-orange-200"
                onClick={() => handleServiceClick(service.title)}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600">
              Simple steps to bring your project to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", description: "Discuss your vision and requirements with our team" },
              { step: "2", title: "Design", description: "Create custom designs tailored to your needs" },
              { step: "3", title: "Production", description: "Professional fabrication and printing services" },
              { step: "4", title: "Delivery", description: "Quality check and timely delivery of your project" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Services List */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Quick Service Selection
            </h2>
            <p className="text-xl text-orange-100">
              Click on any service below to get started
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white text-orange-600 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => handleServiceClick(service.title)}
              >
                <div className="flex items-center space-x-3">
                  <div className="text-orange-600">
                    {React.cloneElement(service.icon, { className: "w-6 h-6" })}
                  </div>
                  <span className="font-semibold">{service.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free consultation and personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
              Get Free Quote
            </button>
            <a 
              href="tel:+233540504926"
              className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors"
            >
              Call: +233 540 504 926
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;