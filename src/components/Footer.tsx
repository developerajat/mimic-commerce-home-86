
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NaturalShop</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Revolutionary e-commerce platform that understands what you 
              need through natural language, and so much more.
            </p>
            <div className="flex space-x-4 mt-4">
              <div className="w-6 h-6 bg-gray-600 rounded"></div>
              <div className="w-6 h-6 bg-gray-600 rounded"></div>
              <div className="w-6 h-6 bg-gray-600 rounded"></div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center space-x-4">
            <span>📧 support@naturalshop.com</span>
            <span>📞 +91-8000-123-456</span>
          </div>
        </div>
        
        <div className="text-center text-xs text-gray-500 mt-4">
          © 2024 NaturalShop. All rights reserved. Made with ❤️ for better shopping experiences.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
