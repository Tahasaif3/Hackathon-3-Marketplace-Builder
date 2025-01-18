import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ChooseFoodCategory from "@/components/choose-food-item";
import FoodCategorySection from "@/components/food-categogy";
import StatisticsSection from "@/components/stats";
import MenuSection from "@/components/menu";
import TestimonialSection from "@/components/testimonial";
import FoodProcessSection from "@/components/food-process";
import BlogPreviewSection from "@/components/blogs";
import Footer from "@/components/footer";

export default function Home() {
  return (
   <div>
    <HeroSection/>
    <AboutSection/>
    <ChooseFoodCategory/>
    <FoodCategorySection/>
    <StatisticsSection/>
    < MenuSection/>
    <TestimonialSection/>
    <FoodProcessSection/>
    <BlogPreviewSection/>
    <Footer/>
   </div>
  );
}
