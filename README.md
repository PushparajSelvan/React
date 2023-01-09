# React-Assessment

 Graph Algorithm :

Depth-first search is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking. 
So the basic idea is to start from the root or any arbitrary node and mark the node and move to the adjacent unmarked node and continue this loop until there is no unmarked adjacent node. Then backtrack and check for other unmarked nodes and traverse them. Finally, print the nodes in the path.

Follow the below steps to solve the problem:

Create a recursive function that takes the index of the node and a visited array.
Mark the current node as visited and print the node.
Traverse all the adjacent and unmarked nodes and call the recursive function with the index of the adjacent node.



Solution: 
     
     Data Structure:
We will use a graph data structure to represent the route. Each node in the graph will represent a city and each edge will represent a ticket.

Algorithm:
1. Create a graph with all the cities and tickets as edges.
2. Start from the city Kiev.
3. Traverse the graph using Depth-First Search (DFS) algorithm.
4. For each edge, check if it is a valid ticket.
5. If it is a valid ticket, add the destination city to the route and continue traversing the graph.
6. If there are no more valid tickets, backtrack to the previous city and continue traversing the graph.
7. Repeat steps 4-6 until all cities have been visited.
8. The route will be the list of cities visited in the order they were visited.  

Hence, the output of the code screenshot were putted with the file.
