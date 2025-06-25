
import ProductCard from "./ProductCard";

interface ProductSectionProps {
  title: string;
  subtitle?: string;
}

const ProductSection = ({ title, subtitle }: ProductSectionProps) => {
  const products = [
    { 
      title: "Mother Dairy Toned Milk", 
      price: "₹35", 
      weight: "500ml",
      deliveryTime: "8 mins",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=200&fit=crop"
    },
    { 
      title: "Coca Cola Soft Drink", 
      price: "₹45", 
      weight: "750ml",
      deliveryTime: "8 mins"
    },
    { 
      title: "Lays Classic Salted Chips", 
      price: "₹20", 
      weight: "52g",
      deliveryTime: "10 mins"
    },
    { 
      title: "Britannia Good Day Biscuits", 
      price: "₹25", 
      weight: "75g",
      deliveryTime: "8 mins"
    },
    { 
      title: "Maggi 2-Minute Noodles", 
      price: "₹14", 
      weight: "70g",
      deliveryTime: "12 mins"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          {subtitle && <p className="text-gray-600 text-sm mt-1">{subtitle}</p>}
        </div>
        <button className="text-blue-600 hover:text-blue-700 font-medium">
          see all
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
    </section>
  );
};

export default ProductSection;
