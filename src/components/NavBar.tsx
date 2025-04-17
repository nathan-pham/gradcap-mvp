
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/48bc17d1-bd9b-4d83-a946-79df41125cbf.png" 
            alt="GradCap Logo" 
            className="h-10 w-auto"
          />
          <span className="font-bold text-xl text-pathway-darker">GradCap</span>
        </a>
        
        <Button className="bg-pathway hover:bg-pathway-darker">Get Started</Button>
      </div>
    </header>
  );
};

export default NavBar;
