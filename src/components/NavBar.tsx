
import { GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <GraduationCap className="h-7 w-7 text-pathway" />
          <span className="font-bold text-xl text-pathway-darker">PathwayFinder</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-pathway-text hover:text-pathway font-medium">Home</a>
            <a href="#" className="text-pathway-text hover:text-pathway font-medium">Explore Careers</a>
            <a href="#" className="text-pathway-text hover:text-pathway font-medium">Universities</a>
            <a href="#" className="text-pathway-text hover:text-pathway font-medium">Resources</a>
          </nav>
          
          <Button className="bg-pathway hover:bg-pathway-darker">Get Started</Button>
        </div>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md animate-slide-up">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-pathway-text hover:text-pathway font-medium py-2">Home</a>
            <a href="#" className="text-pathway-text hover:text-pathway font-medium py-2">Explore Careers</a>
            <a href="#" className="text-pathway-text hover:text-pathway font-medium py-2">Universities</a>
            <a href="#" className="text-pathway-text hover:text-pathway font-medium py-2">Resources</a>
            <Button className="bg-pathway hover:bg-pathway-darker mt-2">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
