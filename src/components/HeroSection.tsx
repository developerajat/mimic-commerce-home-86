
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Find What You Need, <span className="text-blue-600">Just Describe It</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Use natural language to search — no more guessing the right keywords. Say it your way, we'll find it.
        </p>
        
        <div className="flex max-w-2xl mx-auto bg-white rounded-lg shadow-sm border">
          <div className="flex-1 flex items-center px-4">
            <Search className="text-gray-400 w-5 h-5 mr-3" />
            <input
              type="text"
              placeholder='e.g. "gluten-free chips for kids under ₹100"'
              className="flex-1 py-4 outline-none text-gray-700"
            />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-r-lg">
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
