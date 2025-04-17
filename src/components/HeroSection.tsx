
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-12 md:pt-36 md:pb-24 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          Discover Your Perfect <span className="text-pathway">Career Path</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 animate-fade-in">
          Explore interactive educational pathways that connect your interests to
          real-world careers. Find universities, requirements, and opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 animate-fade-in">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for a career or field of study..."
              className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pathway"
            />
          </div>
          <Button className="bg-pathway hover:bg-pathway-darker flex items-center gap-2 px-6 py-3 text-white rounded-lg">
            Explore Now
            <ArrowRight size={18} />
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 text-sm animate-fade-in">
          <span className="px-3 py-1 bg-pathway-light rounded-full text-pathway-darker">Computer Science</span>
          <span className="px-3 py-1 bg-pathway-light rounded-full text-pathway-darker">Medicine</span>
          <span className="px-3 py-1 bg-pathway-light rounded-full text-pathway-darker">Business</span>
          <span className="px-3 py-1 bg-pathway-light rounded-full text-pathway-darker">Engineering</span>
          <span className="px-3 py-1 bg-pathway-light rounded-full text-pathway-darker">Actuary</span>
          <span className="px-3 py-1 bg-pathway-light rounded-full text-pathway-darker">Arts</span>
          <span className="px-3 py-1 bg-pathway-light rounded-full text-pathway-darker">Law</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
