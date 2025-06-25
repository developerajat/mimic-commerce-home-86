
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  price: string;
  rating: number;
  reviews: number;
}

const ProductCard = ({ title, price, rating, reviews }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow">
      <div className="p-4">
        <div className="w-full h-32 bg-green-100 rounded-lg mb-3 flex items-center justify-center">
          <div className="w-16 h-20 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">
            Product
          </div>
        </div>
        
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400 text-sm">
            {'★'.repeat(5)}
          </div>
          <span className="text-gray-500 text-sm ml-1">({reviews})</span>
        </div>
        
        <h3 className="font-medium text-gray-900 mb-2 text-sm leading-tight">
          {title}
        </h3>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">{price}</span>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1">
            ADD
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
