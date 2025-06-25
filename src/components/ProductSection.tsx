
import ProductCard from "./ProductCard";

interface ProductSectionProps {
  title: string;
  subtitle?: string;
}

const ProductSection = ({ title, subtitle }: ProductSectionProps) => {
  const products = [
    { title: "Mother Dairy Toned Milk", price: "₹35", rating: 5, reviews: 3 },
    { title: "Mother Dairy Toned Milk", price: "₹35", rating: 5, reviews: 3 },
    { title: "Mother Dairy Toned Milk", price: "₹35", rating: 5, reviews: 3 },
    { title: "Mother Dairy Toned Milk", price: "₹35", rating: 5, reviews: 3 },
    { title: "Mother Dairy Toned Milk", price: "₹35", rating: 5, reviews: 3 },
    { title: "Mother Dairy Toned Milk", price: "₹35", rating: 5, reviews: 3 },
    { title: "Mother Dairy Toned Milk", price: "₹35", rating: 5, reviews: 3 },
    { title: "Mother Dairy Toned Milk", price: "₹35", rating: 5, reviews: 3 },
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
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            rating={product.rating}
            reviews={product.reviews}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
