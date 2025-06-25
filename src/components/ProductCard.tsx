
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  price: string;
  weight: string;
  deliveryTime: string;
  image?: string;
}

const ProductCard = ({ title, price, weight, deliveryTime, image }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-4">
      <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-16 h-20 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">
            Product
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full inline-block font-medium">
          {deliveryTime}
        </div>
        
        <h3 className="font-medium text-gray-900 text-sm leading-tight line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-500 text-xs">{weight}</p>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm font-medium text-gray-900">{price}</span>
          <Button 
            variant="outline"
            className="text-blue-600 border-gray-300 hover:bg-blue-50 text-xs px-3 py-1 h-8 font-semibold"
          >
            ADD
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
