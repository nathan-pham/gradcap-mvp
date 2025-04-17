
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Book, BookOpen, Triangle, Calendar, Clock, FileText, Award, 
  Layers, AlertTriangle, Users, HelpCircle, Target, Globe, 
  Briefcase, ChevronRight, ChevronDown, X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { fetchPathwayNodes, PathwayNodeType } from "@/services/pathwayService";

const PathwayVisualization = () => {
  const [pathwayData, setPathwayData] = useState<PathwayNodeType[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedNode, setSelectedNode] = useState<PathwayNodeType | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const pathwayRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Fetch pathway data from Supabase
  useEffect(() => {
    async function loadPathwayData() {
      try {
        setLoading(true);
        const nodes = await fetchPathwayNodes();
        setPathwayData(nodes);
      } catch (error) {
        console.error("Error loading pathway data:", error);
        toast({
          title: "Error loading pathway data",
          description: "Please try refreshing the page.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    }
    
    loadPathwayData();
  }, [toast]);

  useEffect(() => {
    // Show pathway after a small delay for animation purposes
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleNodeClick = (node: PathwayNodeType) => {
    setSelectedNode(prev => prev?.id === node.id ? null : node);
    
    // Scroll the node into better view if on mobile
    if (window.innerWidth < 768 && node.id !== selectedNode?.id) {
      setTimeout(() => {
        document.getElementById(`node-${node.id}`)?.scrollIntoView({ 
          behavior: "smooth", 
          block: "center" 
        });
      }, 100);
    }
  };

  // Get icon component based on node title
  const getNodeIcon = (iconName: string | undefined) => {
    if (!iconName) return <ChevronRight className="w-5 h-5" />;
    
    const iconMap: Record<string, React.ComponentType<any>> = {
      "Book": Book,
      "BookOpen": BookOpen,
      "Triangle": Triangle,
      "Calendar": Calendar,
      "Clock": Clock,
      "FileText": FileText,
      "Award": Award,
      "Layers": Layers,
      "AlertTriangle": AlertTriangle,
      "Users": Users,
      "HelpCircle": HelpCircle,
      "Target": Target,
      "Globe": Globe,
      "Briefcase": Briefcase
    };
    
    const IconComponent = iconMap[iconName] || ChevronRight;
    return <IconComponent className="w-5 h-5" />;
  };

  if (loading) {
    return (
      <div className="py-12 px-4 flex justify-center items-center min-h-screen">
        <div className="animate-pulse text-pathway">Loading pathway data...</div>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-white to-pathway-light min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-pathway-darker mb-2">
            Actuarial Science Education Pathway
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore the complete educational journey of an actuarial science student, from prerequisites through to career outcomes.
          </p>
        </div>

        {/* River-like pathway visualization */}
        <div 
          ref={pathwayRef}
          className="relative mx-auto"
        >
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-pathway-light transform -translate-x-1/2 z-0"></div>
          
          <div className="space-y-20 relative z-10">
            {pathwayData.map((node, index) => (
              isVisible && (
                <motion.div
                  key={node.id}
                  id={`node-${node.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex flex-col items-center"
                >
                  {/* Connecting elements */}
                  {index > 0 && (
                    <div className="h-20 w-px bg-pathway-light absolute -top-20 left-1/2 transform -translate-x-1/2">
                      <ChevronDown className="text-pathway absolute -bottom-4 left-1/2 transform -translate-x-1/2" />
                    </div>
                  )}
                  
                  <Card 
                    className={cn(
                      "w-full md:w-3/4 cursor-pointer transition-all duration-300 hover:shadow-md border-l-4 relative",
                      selectedNode?.id === node.id 
                        ? "border-l-pathway shadow-lg" 
                        : "border-l-transparent hover:border-l-pathway-light"
                    )}
                    onClick={() => handleNodeClick(node)}
                  >
                    <CardHeader className="p-4 pb-0">
                      <div className="flex items-center gap-2">
                        <div className={cn(
                          "p-2 rounded-full",
                          selectedNode?.id === node.id 
                            ? "bg-pathway text-white" 
                            : "bg-pathway bg-opacity-10"
                        )}>
                          {getNodeIcon(node.icon)}
                        </div>
                        <CardTitle className="text-lg md:text-xl">{node.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardDescription className="text-base">{node.description}</CardDescription>
                      {selectedNode?.id === node.id && node.details && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-6 space-y-3 bg-pathway-light bg-opacity-20 p-4 rounded-lg"
                        >
                          {node.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="mt-1 text-pathway">
                                <ChevronRight size={14} />
                              </div>
                              <p className="text-sm md:text-base text-gray-700">{detail}</p>
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
        
        {/* Optional: Instructions for users */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Click on any card to view details about that stage of the educational pathway.</p>
        </div>
      </div>
    </section>
  );
};

export default PathwayVisualization;
