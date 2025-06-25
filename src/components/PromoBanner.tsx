
import { Button } from "@/components/ui/button";

const PromoBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="flex items-center">
          <div className="flex-1 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Your Favourite Paanshop is online
            </h2>
            <p className="text-gray-600 mb-6">Exports since 1962</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
              Shop Now
            </Button>
          </div>
          <div className="w-80 h-32 bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-sm">Traditional Products</div>
              <div className="text-xs opacity-90">Since 1962</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
