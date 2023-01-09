class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addNode(node) {
        this.adjacencyList.set(node, []);
    }
    addEdge(origin, destination) {
        this.adjacencyList.get(origin).push(destination);
    }
    removeNode(airport) {
        this.adjacencyList.delete(airport);
        for(let ele of this.adjacencyList) {
            ele[1].map((item, index) => {
                if (item === airport) {
                    ele[1].splice(index, 1);
                }
            });
        }
    }
    removeEdge(origin, destination) {
        for (let ele of this.adjacencyList) {
            if(ele[0] === origin) {
                ele[1].map((item, index) => {
                    if(item === destination) {
                        ele[1].splice(index, 1);
                    }
                });
            }
        }
    }
    bfs(start, end) {
        const visited = new Set(start);
        const queue = [start];
        visited.add(start);
        while (queue.length > 0) {
            const airport = queue.shift(); //mutates  the queue     
            const destinations = this.adjacencyList.get(airport);
            for(const destination of destinations) {
                if (!visited.has(destination)){
                    if (destination === end) {
                      console.log("route exits between A and B");
                }
                visited.add(destination);
                queue.push(destination);
               }
            }   
        }
    }
    dfs(start, end, visited = new Set()) {
        console.log(start);
        visited.add(start);
        const destinations = this.adjacencyList.get(start);
        for (const destination of destinations) {
            if (!visited.has(destination)) {
                this.dfs(destination, end, visited);
                if (destination === end) {
                    console.log("route exits between A and D");
                }
            }
        }
    }
}
const adjacencyList = new Map();
const G1 = new Graph();
G1.addNode("KIEV");
G1.addNode("PRAGUE");
G1.addNode("ZURICH");
G1.addNode("AMSTERDAM");
G1.addNode("BARCELONA");
G1.addNode("BERLIN");
G1.addEdge("KIEV","PRAGUE");
G1.addEdge("PRAGUE","ZURICH");
G1.addEdge("ZURICH","AMSTERDAM");
G1.addEdge("AMSTERDAM","BARCELONA");
G1.addEdge("BARCELONA","BERLIN");
G1.addEdge("BERLIN","AMSTERDAM");
console.log(G1);
