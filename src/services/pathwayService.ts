
import { supabase } from "@/integrations/supabase/client";

export interface PathwayNodeType {
  id: string;
  title: string;
  description: string;
  details?: string[];
  icon?: string;
  position: number;
}

export async function fetchPathwayNodes(): Promise<PathwayNodeType[]> {
  try {
    const { data, error } = await supabase
      .from('pathway_nodes')
      .select('*')
      .order('position', { ascending: true });
    
    if (error) {
      console.error("Error fetching pathway nodes:", error);
      throw error;
    }
    
    // Transform the database response to match our expected format
    return data.map(node => ({
      id: node.node_id,
      title: node.title,
      description: node.description,
      details: node.details,
      icon: node.icon,
      position: node.position
    }));
  } catch (error) {
    console.error("Failed to fetch pathway nodes:", error);
    return [];
  }
}

export async function updatePathwayNode(node: PathwayNodeType): Promise<PathwayNodeType | null> {
  try {
    const { data, error } = await supabase
      .from('pathway_nodes')
      .update({
        title: node.title,
        description: node.description,
        details: node.details,
        icon: node.icon,
        position: node.position
      })
      .eq('node_id', node.id)
      .select()
      .single();
    
    if (error) {
      console.error("Error updating pathway node:", error);
      throw error;
    }
    
    return {
      id: data.node_id,
      title: data.title,
      description: data.description,
      details: data.details,
      icon: data.icon,
      position: data.position
    };
  } catch (error) {
    console.error("Failed to update pathway node:", error);
    return null;
  }
}
