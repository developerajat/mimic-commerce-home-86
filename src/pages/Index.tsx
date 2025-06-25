
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PromoBanner from "@/components/PromoBanner";
import ProductSection from "@/components/ProductSection";
import ChatButton from "@/components/ChatButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-figtree">
      <Header />
      <HeroSection />
      <PromoBanner />
      <ProductSection 
        title="You Maybe Interested in" 
      />
      <ProductSection 
        title="Trending Products" 
        subtitle="Discover what others are buying in natural language"
      />
      <ProductSection 
        title="Based on Your Recent Searches" 
      />
      <ChatButton />
      <Footer />
    </div>
  );
};

export default Index;
