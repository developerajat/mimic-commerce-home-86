
import { Search, ShoppingCart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white">
      {/* Top bar */}
      <div className="bg-gray-100 border-b border-gray-200 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span className="font-bold text-blue-600 text-lg">NaturalShop</span>
            <div className="flex flex-col">
              <span className="text-gray-700 font-bold">Delivery in 8 minutes</span>
              <div className="flex items-center cursor-pointer hover:text-gray-900 transition-colors">
                <span className="text-gray-600 text-xs">Select Location</span>
                <ChevronDown className="w-3 h-3 ml-1 text-gray-600" />
              </div>
            </div>
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
