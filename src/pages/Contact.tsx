import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <main className="pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Ready to bring your creative vision to life? Get in touch with our team 
            for a free consultation and personalized quote.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get a Free Quote
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="+233 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="digital-embroidery">Digital Embroidery</option>
                      <option value="souvenirs">Souvenirs</option>
                      <option value="large-format-print">Large Format Print</option>
                      <option value="branding">Branding</option>
                      <option value="digital-printing">Digital Printing</option>
                      <option value="tshirt-print">T-Shirt Print</option>
                      <option value="3d-fabrication">3D Fabrication</option>
                      <option value="billboard-advertising">Billboard Advertising</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us about your project requirements, timeline, and any specific details..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-orange-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-orange-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">+233 540 504 926</p>
                      <p className="text-sm text-gray-500">Available 24/7 for urgent inquiries</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-orange-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">sampsonarthur38@gmail.com</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-orange-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">
                        Lapaz Flattop - Botwe Avenue<br />
                        Accra, Ghana
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-orange-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 4:00 PM<br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <Phone className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Call Us Now</h4>
                  <p className="text-gray-600 text-sm mb-4">Speak with our creative team</p>
                  <a 
                    href="tel:+233540504926"
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors"
                  >
                    Call Now
                  </a>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <Mail className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Email Quote</h4>
                  <p className="text-gray-600 text-sm mb-4">Get a detailed quote via email</p>
                  <a 
                    href="mailto:sampsonarthur38@gmail.com"
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Our Studio
            </h2>
            <p className="text-lg text-gray-600">
              Located in Lapaz Flattop - Botwe Avenue, Accra
            </p>
          </div>
          
          <div className="bg-gray-300 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600">Interactive map would be integrated here</p>
              <p className="text-sm text-gray-500">Lapaz Flattop - Botwe Avenue, Accra, Ghana</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-900 mb-2">What is your turnaround time?</h4>
              <p className="text-gray-600">Turnaround time varies by project complexity. Simple designs can be completed in 1-2 days, while complex projects may take 5-7 days.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer design services?</h4>
              <p className="text-gray-600">Yes! We have a talented design team that can create custom graphics, logos, and layouts for all your printing and fabrication needs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-900 mb-2">What file formats do you accept?</h4>
              <p className="text-gray-600">We accept various formats including AI, PSD, PDF, PNG, JPG, and more. Our team can work with you to ensure optimal file preparation.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer delivery services?</h4>
              <p className="text-gray-600">Yes, we offer delivery services within Accra and surrounding areas. Delivery charges may apply based on location and order size.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;