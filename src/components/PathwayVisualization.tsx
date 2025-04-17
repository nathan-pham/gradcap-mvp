
import { useState, useEffect, useRef } from "react";
import { ChevronRight, Lightbulb, BookOpen, Award, Users, Briefcase, Shapes, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

// Import the content data
import { pathwayData, PathwayNodeType } from "@/data/pathwayData";

const PathwayVisualization = () => {
  const [selectedNode, setSelectedNode] = useState<PathwayNodeType | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const pathwayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show pathway after a small delay for animation purposes
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleNodeClick = (node: PathwayNodeType) => {
    setSelectedNode(node);
    // Scroll the info card into view on mobile
    if (window.innerWidth < 768) {
      setTimeout(() => {
        document.getElementById("info-section")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  // Get icon component based on node type
  const getNodeIcon = (type: string) => {
    switch (type) {
      case "Actuary":
        return <Briefcase className="w-5 h-5" />;
      case "Student Life":
        return <Users className="w-5 h-5" />;
      case "Excellence":
        return <Award className="w-5 h-5" />;
      case "Challenges":
        return <Shapes className="w-5 h-5" />;
      case "Beyond the Books":
        return <BookOpen className="w-5 h-5" />;
      case "Myths":
        return <Lightbulb className="w-5 h-5" />;
      case "Outcomes":
        return <HeartHandshake className="w-5 h-5" />;
      case "Careers":
        return <Briefcase className="w-5 h-5" />;
      default:
        return <ChevronRight className="w-5 h-5" />;
    }
  };

  return (
    <section className="bg-white py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
          Interactive Career Pathway
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Select any node in the pathway to explore detailed information about that aspect of an Actuary career path.
        </p>

        {/* Pathway visualization */}
        <div 
          ref={pathwayRef}
          className="relative mx-auto max-w-5xl overflow-x-auto pb-8 pathway-container"
        >
          <div className="min-w-[900px] h-32 relative">
            {/* Horizontal connection line */}
            <div className="pathway-line top-1/2 left-[50px] right-[50px] transform -translate-y-1/2"></div>

            {/* Solutions node - connected to Challenges */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6">
              {isVisible && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className={`pathway-node flex items-center gap-2 ${selectedNode?.id === "solutions" ? "active" : ""}`}
                  onClick={() => handleNodeClick(pathwayData.find(n => n.id === "solutions")!)}
                >
                  <Lightbulb className="w-5 h-5" />
                  <span>Solutions</span>
                </motion.div>
              )}
              
              {/* Vertical connection to Challenges */}
              {isVisible && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="h-16 border-l-2 border-dashed border-pathway opacity-70 absolute left-1/2 transform -translate-x-1/2"
                ></motion.div>
              )}
            </div>

            {/* Main pathway nodes */}
            <div className="flex justify-between items-center h-full">
              {pathwayData
                .filter(node => !["solutions"].includes(node.id))
                .map((node, index) => (
                  isVisible && (
                    <motion.div
                      key={node.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className={`pathway-node flex items-center gap-2 ${selectedNode?.id === node.id ? "active" : ""}`}
                      onClick={() => handleNodeClick(node)}
                    >
                      {getNodeIcon(node.title)}
                      <span>{node.title}</span>
                    </motion.div>
                  )
                ))}
            </div>
          </div>
        </div>

        {/* Information display section */}
        <div id="info-section" className="mt-8 md:mt-16">
          {selectedNode ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="info-card max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-4">
                {getNodeIcon(selectedNode.title)}
                <h3 className="text-xl md:text-2xl font-bold text-pathway-darker">{selectedNode.title}</h3>
              </div>
              
              <p className="text-gray-700 mb-6">{selectedNode.description}</p>
              
              {selectedNode.details && (
                <div className="space-y-4">
                  {selectedNode.details.map((detail, index) => (
                    <div key={index} className="info-bubble">
                      <p>{detail}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {selectedNode.id === "actuary" && (
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  <div className="bg-pathway-light p-5 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3">What is Actuary?</h4>
                    <p className="mb-3">Work at the intersection of finance, probability, and statistics</p>
                    <p className="mb-3">Use maths and data to assess risk and model future outcomes</p>
                    <p>Solve real-world problems for insurance, superannuation, finance & consulting</p>
                  </div>
                  
                  <div className="bg-pathway-light p-5 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3">Universities that offer Actuary Studies</h4>
                    <p className="mb-3">Multiple universities offer bachelor of actuary degrees</p>
                    <p className="mb-3">Content is similar across programs due to industry accreditation</p>
                    <p>Some universities offer accelerated programs and specialized tracks</p>
                  </div>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center p-8 max-w-2xl mx-auto bg-pathway-light rounded-lg"
            >
              <Lightbulb className="w-12 h-12 text-pathway mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Select a node to explore</h3>
              <p className="text-gray-600">
                Click on any of the pathway nodes above to see detailed information about that aspect of the career path.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PathwayVisualization;
