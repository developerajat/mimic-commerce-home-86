
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchDialog from "@/components/SearchDialog";

const HeroSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          <span className="text-black font-bold">Find What You Need,</span>{" "}
          <span className="text-blue-600">Just Describe It</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Use natural language to search—no more guessing the right keywords. Say it your way, we'll find it.
        </p>
        
        <div className="flex max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-gray-300">
          <div className="flex-1 flex items-center px-4">
            <Search className="text-gray-400 w-5 h-5 mr-3" />
            <input
              type="text"
              placeholder="e.g., 'gluten-free chips for kids under ₹100'"
              className="flex-1 py-4 outline-none text-gray-700 text-base"
            />
          </div>
          <div className="flex items-center pr-2">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            <SearchDialog>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 ml-2 rounded-lg font-medium">
                Search
              </Button>
            </SearchDialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
