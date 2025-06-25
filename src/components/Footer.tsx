
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">NaturalShop</h3>
            <div className="flex space-x-4 mb-6">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
            <p className="text-sm text-gray-400">
              © 2024 NaturalShop. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors">About Us</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Help & Support</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Support</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center text-white">
                <span className="mr-2">📧</span>
                <span>support@naturalshop.com</span>
              </div>
              <div className="flex items-center text-white">
                <span className="mr-2">📞</span>
                <span>+91 93300 0XXXX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
