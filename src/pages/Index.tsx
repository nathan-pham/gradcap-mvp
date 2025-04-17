
import NavBar from "@/components/NavBar";
import PathwayVisualization from "@/components/PathwayVisualization";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-16">
        <PathwayVisualization />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
