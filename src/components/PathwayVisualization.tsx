
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Book, BookOpen, Triangle, Calendar, Clock, FileText, Award, 
  Layers, AlertTriangle, Users, HelpCircle, Target, Globe, 
  Briefcase, ChevronRight, Lightbulb, X, Plus, ArrowRight
} from "lucide-react";

// Import the content data
import { pathwayData, PathwayNodeType } from "@/data/pathwayData";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PathwayVisualization = () => {
  const [selectedNode, setSelectedNode] = useState<PathwayNodeType | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathwayRef = useRef<HTMLDivElement>(null);
  const [visibleSection, setVisibleSection] = useState<'start' | 'middle' | 'end'>('start');

  useEffect(() => {
    // Show pathway after a small delay for animation purposes
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleNodeClick = (node: PathwayNodeType) => {
    setSelectedNode(prev => prev?.id === node.id ? null : node);
    // Scroll the info card into view on mobile
    if (window.innerWidth < 768) {
      setTimeout(() => {
        document.getElementById("info-section")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  // Get icon component based on node title
  const getNodeIcon = (iconName: string | undefined) => {
    if (!iconName) return <ChevronRight className="w-5 h-5" />;
    
    switch (iconName) {
      case "Book":
        return <Book className="w-5 h-5" />;
      case "BookOpen":
        return <BookOpen className="w-5 h-5" />;
      case "Triangle":
        return <Triangle className="w-5 h-5" />;
      case "Calendar":
        return <Calendar className="w-5 h-5" />;
      case "Clock":
        return <Clock className="w-5 h-5" />;
      case "FileText":
        return <FileText className="w-5 h-5" />;
      case "Award":
        return <Award className="w-5 h-5" />;
      case "Layers":
        return <Layers className="w-5 h-5" />;
      case "AlertTriangle":
        return <AlertTriangle className="w-5 h-5" />;
      case "Users":
        return <Users className="w-5 h-5" />;
      case "HelpCircle":
        return <HelpCircle className="w-5 h-5" />;
      case "Target":
        return <Target className="w-5 h-5" />;
      case "Globe":
        return <Globe className="w-5 h-5" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5" />;
      default:
        return <ChevronRight className="w-5 h-5" />;
    }
  };

  // Group pathway data into sections
  const startNodes = pathwayData.slice(0, 5); // First 5 nodes
  const middleNodes = pathwayData.slice(5, 10); // Next 5 nodes
  const endNodes = pathwayData.slice(10); // Remaining nodes

  const handleSectionToggle = (section: 'start' | 'middle' | 'end') => {
    setVisibleSection(section);
    // Give time for DOM updates before scrolling
    setTimeout(() => {
      document.getElementById(`section-${section}`)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-white to-pathway-light min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-pathway-darker mb-2">
            Actuarial Science Education Pathway
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore the complete educational journey of an actuarial science student, from prerequisites through to career outcomes.
          </p>
        </div>

        {/* Pathway Navigation */}
        <div className="flex justify-center gap-2 md:gap-6 mb-8 sticky top-20 z-30 bg-white bg-opacity-90 p-2 rounded-lg shadow-sm">
          <Button 
            variant={visibleSection === 'start' ? 'default' : 'outline'} 
            onClick={() => handleSectionToggle('start')}
            className="text-sm md:text-base"
          >
            <Book className="w-4 h-4 mr-1" /> Beginning
          </Button>
          <Button 
            variant={visibleSection === 'middle' ? 'default' : 'outline'} 
            onClick={() => handleSectionToggle('middle')}
            className="text-sm md:text-base"
          >
            <FileText className="w-4 h-4 mr-1" /> Middle
          </Button>
          <Button 
            variant={visibleSection === 'end' ? 'default' : 'outline'} 
            onClick={() => handleSectionToggle('end')}
            className="text-sm md:text-base"
          >
            <Target className="w-4 h-4 mr-1" /> Advanced
          </Button>
        </div>

        {/* Pathway visualization - responsive grid layout */}
        <div 
          ref={pathwayRef}
          className="relative mx-auto"
        >
          {/* First section of nodes */}
          <div id="section-start" className={cn(
            "transition-all duration-500 ease-in-out",
            visibleSection !== 'start' && "opacity-50"
          )}>
            <h2 className="text-xl font-semibold mb-6 flex items-center text-pathway-darker">
              <Book className="w-5 h-5 mr-2" /> Beginning Your Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {startNodes.map((node, index) => (
                isVisible && (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <Card 
                      className={cn(
                        "cursor-pointer transition-all duration-300 hover:shadow-md border-l-4",
                        selectedNode?.id === node.id 
                          ? "border-l-pathway" 
                          : "border-l-transparent hover:border-l-pathway-light"
                      )}
                      onClick={() => handleNodeClick(node)}
                    >
                      <CardHeader className="p-4 pb-0">
                        <div className="flex items-center gap-2">
                          <div className="bg-pathway bg-opacity-10 p-2 rounded-full">
                            {getNodeIcon(node.icon)}
                          </div>
                          <CardTitle className="text-lg">{node.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <CardDescription>{node.description}</CardDescription>
                        {selectedNode?.id === node.id && node.details && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="mt-4 space-y-2"
                          >
                            {node.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <div className="mt-1 text-pathway">
                                  <ChevronRight size={14} />
                                </div>
                                <p className="text-sm text-gray-700">{detail}</p>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              ))}
            </div>
          </div>
          
          {/* Middle section nodes with connecting arrow */}
          <div className="flex justify-center my-6">
            <ArrowRight className="text-pathway w-10 h-10" />
          </div>
          
          {/* Middle section of nodes */}
          <div id="section-middle" className={cn(
            "transition-all duration-500 ease-in-out",
            visibleSection !== 'middle' && "opacity-50"
          )}>
            <h2 className="text-xl font-semibold mb-6 flex items-center text-pathway-darker">
              <FileText className="w-5 h-5 mr-2" /> Deepening Your Knowledge
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {middleNodes.map((node, index) => (
                isVisible && (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index + 0.5 }}
                  >
                    <Card 
                      className={cn(
                        "cursor-pointer transition-all duration-300 hover:shadow-md border-l-4",
                        selectedNode?.id === node.id 
                          ? "border-l-pathway" 
                          : "border-l-transparent hover:border-l-pathway-light"
                      )}
                      onClick={() => handleNodeClick(node)}
                    >
                      <CardHeader className="p-4 pb-0">
                        <div className="flex items-center gap-2">
                          <div className="bg-pathway bg-opacity-10 p-2 rounded-full">
                            {getNodeIcon(node.icon)}
                          </div>
                          <CardTitle className="text-lg">{node.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <CardDescription>{node.description}</CardDescription>
                        {selectedNode?.id === node.id && node.details && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="mt-4 space-y-2"
                          >
                            {node.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <div className="mt-1 text-pathway">
                                  <ChevronRight size={14} />
                                </div>
                                <p className="text-sm text-gray-700">{detail}</p>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              ))}
            </div>
          </div>
          
          {/* Final connecting arrow */}
          <div className="flex justify-center my-6">
            <ArrowRight className="text-pathway w-10 h-10" />
          </div>
          
          {/* Final section of nodes */}
          <div id="section-end" className={cn(
            "transition-all duration-500 ease-in-out",
            visibleSection !== 'end' && "opacity-50"
          )}>
            <h2 className="text-xl font-semibold mb-6 flex items-center text-pathway-darker">
              <Target className="w-5 h-5 mr-2" /> Completing Your Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {endNodes.map((node, index) => (
                isVisible && (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index + 1 }}
                  >
                    <Card 
                      className={cn(
                        "cursor-pointer transition-all duration-300 hover:shadow-md border-l-4",
                        selectedNode?.id === node.id 
                          ? "border-l-pathway" 
                          : "border-l-transparent hover:border-l-pathway-light"
                      )}
                      onClick={() => handleNodeClick(node)}
                    >
                      <CardHeader className="p-4 pb-0">
                        <div className="flex items-center gap-2">
                          <div className="bg-pathway bg-opacity-10 p-2 rounded-full">
                            {getNodeIcon(node.icon)}
                          </div>
                          <CardTitle className="text-lg">{node.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <CardDescription>{node.description}</CardDescription>
                        {selectedNode?.id === node.id && node.details && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="mt-4 space-y-2"
                          >
                            {node.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <div className="mt-1 text-pathway">
                                  <ChevronRight size={14} />
                                </div>
                                <p className="text-sm text-gray-700">{detail}</p>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              ))}
            </div>
          </div>
        </div>
        
        {/* Optional: Instructions for users */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Click on any card to view details about that stage of the educational pathway.</p>
          <p>Use the navigation buttons to jump between different sections of the pathway.</p>
        </div>
      </div>
    </section>
  );
};

export default PathwayVisualization;
