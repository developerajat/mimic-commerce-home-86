
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import ChatButton from "@/components/ChatButton";
import Footer from "@/components/Footer";
import { Search, X, Grid3X3, List, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductListing = () => {
  const location = useLocation();
  const searchQuery = location.state?.query || "";
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const products = [
    {
      title: "Organic Plant Protein Bar - Berry Blast",
      price: "₹299",
      weight: "50g",
      deliveryTime: "8 min",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=200&h=200&fit=crop"
    },
    {
      title: "Gluten-Free Energy Bar - Chocolate Nuts",
      price: "₹349",
      weight: "60g",
      deliveryTime: "8 min",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=200&h=200&fit=crop"
    },
    {
      title: "Low Sugar Protein Snack - Vanilla Almond",
      price: "₹279",
      weight: "45g",
      deliveryTime: "8 min",
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=200&h=200&fit=crop"
    },
    {
      title: "Plant-Based Pre-Workout Bar - Tropical",
      price: "₹399",
      weight: "55g",
      deliveryTime: "8 min",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=200&h=200&fit=crop"
    },
    {
      title: "Organic Quinoa Protein Bar - Dark Chocolate",
      price: "₹329",
      weight: "50g",
      deliveryTime: "8 min",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=200&h=200&fit=crop"
    },
    {
      title: "High Protein Pea Bar - Strawberry",
      price: "₹289",
      weight: "48g",
      deliveryTime: "8 min",
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=200&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-figtree">
      {/* Modified Header with Search Bar */}
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
            
            {/* Search Bar in Header */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="flex bg-white rounded-lg shadow-sm border border-gray-300">
                <div className="flex-1 flex items-center px-4">
                  <Search className="text-gray-400 w-4 h-4 mr-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    placeholder="Search for products..."
                    className="flex-1 py-2 outline-none text-gray-700 text-sm"
                    readOnly
                  />
                </div>
                <div className="flex items-center pr-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-gray-900 transition-colors">
                Login
              </button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Main navigation - same as homepage */}
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Results Heading */}
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Showing Results for: Natural, Organic, Gluten-Free Snack Bars (Pre-Workout | High Plant Protein | Low Sugar | Fruity/Berry | Individually Wrapped)
        </h1>

        {/* Results Count and Controls */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-600">200 results</span>
          
          <div className="flex items-center space-x-4">
            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <button className="flex items-center space-x-1 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                <span>Relevance</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            
            {/* View Mode Toggle */}
            <div className="flex items-center space-x-1 border border-gray-300 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className={`grid gap-6 mb-12 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              weight={product.weight}
              deliveryTime={product.deliveryTime}
              image={product.image}
            />
          ))}
        </div>
      </main>

      <ChatButton />
      <Footer />
    </div>
  );
};

export default ProductListing;
