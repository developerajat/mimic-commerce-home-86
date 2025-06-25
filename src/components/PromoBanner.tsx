
import { Button } from "@/components/ui/button";

const PromoBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-lg shadow-sm border overflow-hidden relative">
        <div className="flex items-center">
          <div className="flex-1 p-8 z-10 relative">
            <h2 className="text-3xl font-bold text-white mb-3">
              Your Favourite Paanshop is online
            </h2>
            <p className="text-white text-lg mb-6 opacity-90">Experts since 1962</p>
            <Button 
              variant="outline" 
              className="bg-white text-blue-600 border-blue-600 hover:bg-blue-50 px-6 py-2 font-medium rounded-lg"
            >
              Shop Now
            </Button>
          </div>
          <div className="w-80 h-40 z-10 relative">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=200&fit=crop" 
              alt="FMCG Products" 
              className="w-full h-full object-cover rounded-r-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
