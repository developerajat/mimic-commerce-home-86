
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white">
      {/* Top bar */}
      <div className="bg-gray-100 border-b border-gray-200 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span className="font-semibold text-gray-900">NaturalShop</span>
            <span className="text-gray-700">Delivery in 8 minutes</span>
            <span className="text-gray-700">Select Location</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900 transition-colors">
              Login
            </button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-blue-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
              <a href="#" className="hover:text-blue-200 transition-colors font-medium">New</a>
              <a href="#" className="hover:text-blue-200 transition-colors font-medium">Daily Deals</a>
              <a href="#" className="hover:text-blue-200 transition-colors font-medium">Snacks & Beverages</a>
              <a href="#" className="hover:text-blue-200 transition-colors font-medium">Household Essentials</a>
              <a href="#" className="hover:text-blue-200 transition-colors font-medium">Offers</a>
              <a href="#" className="hover:text-blue-200 transition-colors font-medium">FAQs</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
