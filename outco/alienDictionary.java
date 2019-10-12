// package whatever; // don't place package name!

import java.io.*;
import java.util.*;

class MyCode {
	public static void main (String[] args) {
		String[] words = {"baa", "abcd", "abca", "cab", "cad"}; //b,d,a,c
    String[] words2 = {"caa", "aaa", "aab"}; //c,a,b
    ArrayList<Character> res = alienDictionary(words2);
    System.out.println(res);
  }
  
  public static ArrayList<Character> alienDictionary(String[] words) {
    //Generate the graph
    HashMap<Character, GraphNode> graph = new HashMap<>();
    
    //For every pair of words, compare chars until mismatch
      //while adding nodes to graph when new characters are found
      
    String word1, word2;
    Character char1, char2;
    int compareLen;
    GraphNode node1, node2;
    for(int i=0; i<words.length-1; i++) {
      word1 = words[i];
      word2 = words[i+1];
      //Get the min length between them
      compareLen = Math.min(word1.length(), word2.length());
      //Loop through both word chars
      for(int j=0; j<compareLen; j++) {
        char1 = word1.charAt(j);
        char2 = word2.charAt(j);
        
        //Check if graph contains either character, if not add it
        if(!graph.containsKey(char1)){
          node1 = new GraphNode(char1);
          graph.put(char1, node1);
        }
        if(!graph.containsKey(char2)){
          node2 = new GraphNode(char2);
          graph.put(char2, node2);
        }
        
        //If character mismatch, then add edge from node1 to node2
        if(char1 != char2) {
          node1 = graph.get(char1);
          node2 = graph.get(char2);
          node1.children.add(node2);
          break;
        }
        
      }
    }
    
    //Topological sort graph to get order of dictionary
    return topologicalSort(graph);
    
  }
  
  private static HashSet<Character> seen;
  private static ArrayList<Character> stack;
  
  public static ArrayList<Character> topologicalSort(HashMap<Character, GraphNode> graph){
    //Init a stack and seen set
    seen = new HashSet<Character>();
    stack = new ArrayList<Character>();
    
    //Loop through all of the keys of graph
    for(Character key: graph.keySet()){
      //Recurse dfs for each node
      dfs(graph.get(key));
    }
    
    Collections.reverse(stack);
    return stack;
    
  }
  
  private static void dfs(GraphNode node){
    //if seen, return
    if(node == null || seen.contains(node.value)) return;
    
    //add node to seen set
    seen.add(node.value);
    
    //Loop through all children, dfsing through children
    for(GraphNode child: node.children){
      dfs(child);
    }
    
    //Add current node value to stack
    stack.add(node.value);
    
  }
}

class GraphNode {
  public Character value;
  public HashSet<GraphNode> children;
  
  public GraphNode(Character val){
    this.value = val;
    this.children = new HashSet<>();
  }
  
}

