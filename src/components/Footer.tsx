import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">SA</span>
              </div>
              <h3 className="text-xl font-bold">Sam Arthur Signs & Fabrication</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Where Your Imagination Becomes Reality. We specialize in creating 
              high-quality signs, graphics, and fabrication services that bring 
              your vision to life.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">ig</span>
              </div>
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">tw</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-orange-400" />
                <span className="text-gray-300">+233 540 504 926</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-orange-400" />
                <span className="text-gray-300">sampsonarthur38@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-orange-400 mt-1" />
                <span className="text-gray-300">
                  Lapaz Flattop - Botwe Avenue<br />
                  Accra, Ghana
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <div className="space-y-2 text-gray-300">
              <p>• Graphic Design</p>
              <p>• Digital Embroidery</p>
              <p>• Large Format Print</p>
              <p>• 3D Fabrication</p>
              <p>• Billboard Advertising</p>
              <p>• T-Shirt Printing</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Sam Arthur Signs & Fabrication. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;