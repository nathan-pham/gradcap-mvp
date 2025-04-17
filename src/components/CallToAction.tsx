
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, BookOpen } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="bg-pathway-light py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Ready to Discover Your Educational Path?
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-10">
          Explore more career pathways, connect with universities, and find the perfect
          educational journey that aligns with your interests and goals.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <GraduationCap className="w-10 h-10 text-pathway mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Explore Majors</h3>
            <p className="text-gray-600 mb-4">
              Discover degrees and majors that align with your interests and career goals.
            </p>
            <Button variant="outline" className="border-pathway text-pathway hover:bg-pathway hover:text-white">
              View Majors
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <BookOpen className="w-10 h-10 text-pathway mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Compare Universities</h3>
            <p className="text-gray-600 mb-4">
              Find the perfect university for your chosen pathway with our comparison tools.
            </p>
            <Button variant="outline" className="border-pathway text-pathway hover:bg-pathway hover:text-white">
              Compare Now
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Users className="w-10 h-10 text-pathway mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Connect with Mentors</h3>
            <p className="text-gray-600 mb-4">
              Get advice from professionals and students who've walked your path.
            </p>
            <Button variant="outline" className="border-pathway text-pathway hover:bg-pathway hover:text-white">
              Find Mentors
            </Button>
          </div>
        </div>
        
        <Button className="bg-pathway hover:bg-pathway-darker px-8 py-6 text-lg">
          Create Your Personalized Pathway
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
