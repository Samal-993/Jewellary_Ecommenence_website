import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Category from "../components/Category";
import PriceSection from "../components/PriceSection";
import Products from "../components/Products";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-amber-200">
      
      <Hero />
      <Category />
      <PriceSection />
      <Products />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
