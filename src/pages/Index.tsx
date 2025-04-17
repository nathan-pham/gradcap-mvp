
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import PathwayVisualization from "@/components/PathwayVisualization";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <PathwayVisualization />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
