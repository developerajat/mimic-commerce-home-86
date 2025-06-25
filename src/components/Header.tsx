
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white border-b">
      {/* Top bar */}
      <div className="bg-blue-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="font-semibold">NaturalShop</span>
            <span>Delivery in 8 minutes</span>
            <span>Select Location</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hover:underline">Login</button>
            <Button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-1 text-sm">
              <ShoppingCart className="w-4 h-4 mr-1" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-blue-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-8">
              <a href="#" className="hover:text-blue-200 transition-colors">New</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Pick n Mix</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Snacks & Beverages</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Personal Care</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Household Essentials</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Offers</a>
              <a href="#" className="hover:text-blue-200 transition-colors">FAQs</a>
              <a href="#" className="hover:text-blue-200 transition-colors">News</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
