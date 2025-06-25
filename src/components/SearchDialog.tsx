
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { X, Camera, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SearchDialogProps {
  children: React.ReactNode;
}

const SearchDialog = ({ children }: SearchDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSend = () => {
    if (searchQuery.trim()) {
      navigate('/products', { state: { query: searchQuery } });
      setIsOpen(false);
    }
  };

  const productSuggestions = [
    {
      id: 1,
      name: "Organic Protein Bar - Berry Blast",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=100&h=100&fit=crop",
      discount: "15% OFF"
    },
    {
      id: 2,
      name: "Plant-Based Energy Bar - Chocolate",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=100&h=100&fit=crop",
      discount: "20% OFF"
    },
    {
      id: 3,
      name: "Gluten-Free Protein Snack",
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=100&h=100&fit=crop",
      discount: "10% OFF"
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl p-8 bg-white shadow-2xl">
        <div className="space-y-6">
          <h2 className="text-2xl text-center text-[#555555] leading-relaxed">
            Use natural language to search — no more guessing the right keywords. Say it your way, we'll find it.
          </h2>
          
          <div className="relative">
            <Textarea
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="a natural, organic, and gluten-free snack bar that's suitable for pre-workout energy. It should contain high protein content, ideally from plant-based sources like nuts or peas, and have a low sugar count – no more than 5 grams per bar."
              className="h-[150px] resize-none text-black placeholder:text-black border-gray-300 focus:border-blue-500 pr-12"
            />
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button variant="outline" size="sm" className="p-2">
              <Camera className="w-4 h-4" />
            </Button>
            <Button 
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
            >
              <Send className="w-4 h-4 mr-2" />
              Send
            </Button>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-700">Product Suggestions</h3>
            <div className="space-y-2">
              {productSuggestions.map((product) => (
                <div key={product.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{product.name}</p>
                    <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                      {product.discount}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
