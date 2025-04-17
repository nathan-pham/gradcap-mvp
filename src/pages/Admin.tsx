
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { fetchPathwayNodes, updatePathwayNode, PathwayNodeType } from "@/services/pathwayService";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Footer from "@/components/Footer";

const Admin = () => {
  const [nodes, setNodes] = useState<PathwayNodeType[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedNode, setSelectedNode] = useState<PathwayNodeType | null>(null);
  const [editForm, setEditForm] = useState<Partial<PathwayNodeType>>({});
  const [detailsInput, setDetailsInput] = useState<string>("");
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  // Fetch pathway nodes from the database
  useEffect(() => {
    async function loadNodes() {
      try {
        setLoading(true);
        const data = await fetchPathwayNodes();
        setNodes(data);
      } catch (error) {
        console.error("Error loading nodes:", error);
        toast({
          title: "Error loading pathway nodes",
          description: "Please try refreshing the page.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    }
    
    loadNodes();
  }, [toast]);

  // Initialize edit form when a node is selected
  useEffect(() => {
    if (selectedNode) {
      setEditForm({
        id: selectedNode.id,
        title: selectedNode.title,
        description: selectedNode.description,
        icon: selectedNode.icon,
        position: selectedNode.position
      });
      setDetailsInput(selectedNode.details?.join('\n') || "");
    } else {
      setEditForm({});
      setDetailsInput("");
    }
  }, [selectedNode]);

  const handleSelectNode = (node: PathwayNodeType) => {
    setSelectedNode(node);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const handleDetailsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetailsInput(e.target.value);
  };

  const handleSave = async () => {
    if (!selectedNode || !editForm.id) return;
    
    try {
      setSaving(true);
      
      // Convert details string to array
      const details = detailsInput
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);
      
      const updatedNode = {
        id: editForm.id,
        title: editForm.title || selectedNode.title,
        description: editForm.description || selectedNode.description,
        details,
        icon: editForm.icon || selectedNode.icon,
        position: editForm.position || selectedNode.position
      };
      
      const result = await updatePathwayNode(updatedNode);
      if (result) {
        // Update local state
        setNodes(prev => prev.map(node => node.id === result.id ? result : node));
        setSelectedNode(result);
        
        toast({
          title: "Changes saved",
          description: "The pathway node has been updated successfully."
        });
      }
    } catch (error) {
      console.error("Error saving changes:", error);
      toast({
        title: "Error saving changes",
        description: "Please try again.",
        variant: "destructive"
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-pathway animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-20 px-4 pb-10">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold text-pathway-darker mb-6">
            Pathway Admin
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Node list */}
            <div className="lg:col-span-5">
              <Card>
                <CardHeader>
                  <CardTitle>Pathway Nodes</CardTitle>
                  <CardDescription>
                    Select a node to edit its details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[60vh]">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Position</TableHead>
                          <TableHead>Title</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {nodes.map(node => (
                          <TableRow
                            key={node.id}
                            className={selectedNode?.id === node.id ? "bg-pathway-light bg-opacity-30" : ""}
                          >
                            <TableCell>{node.position}</TableCell>
                            <TableCell>{node.title}</TableCell>
                            <TableCell>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleSelectNode(node)}
                              >
                                Edit
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
            
            {/* Edit form */}
            <div className="lg:col-span-7">
              <Card>
                <CardHeader>
                  <CardTitle>{selectedNode ? `Edit: ${selectedNode.title}` : "Select a node to edit"}</CardTitle>
                  <CardDescription>
                    Make changes to the pathway node details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedNode ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Title</label>
                        <Input
                          name="title"
                          value={editForm.title || ""}
                          onChange={handleInputChange}
                          placeholder="Node title"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <Textarea
                          name="description"
                          value={editForm.description || ""}
                          onChange={handleInputChange}
                          placeholder="Node description"
                          rows={3}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Icon</label>
                        <Input
                          name="icon"
                          value={editForm.icon || ""}
                          onChange={handleInputChange}
                          placeholder="Icon name (e.g., Book, Globe)"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Valid icons: Book, BookOpen, Triangle, Calendar, Clock, FileText, Award, 
                          Layers, AlertTriangle, Users, HelpCircle, Target, Globe, Briefcase
                        </p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Position</label>
                        <Input
                          name="position"
                          type="number"
                          value={editForm.position || 0}
                          onChange={handleInputChange}
                          placeholder="Node position"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Details (one per line)</label>
                        <Textarea
                          value={detailsInput}
                          onChange={handleDetailsChange}
                          placeholder="Enter details, one per line"
                          rows={8}
                          className="font-mono text-sm"
                        />
                      </div>
                      
                      <div className="pt-4">
                        <Button
                          className="w-full bg-pathway hover:bg-pathway-darker"
                          onClick={handleSave}
                          disabled={saving}
                        >
                          {saving ? "Saving..." : "Save Changes"}
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-[60vh] text-gray-400">
                      Select a node from the list to edit
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
