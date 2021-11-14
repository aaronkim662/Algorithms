class Graph {
  constructor(numOfVerticies){
    this.numOfVerticies = numOfVerticies;
    this.adjList = new Map();
  }

  addVertex = (vertex) => {
    this.adjList.set(vertex, [])
  }

  addEdge = (vertex, edge) => {
    this.adjList.get(vertex).push(edge)

    this.adjList.get(edge).push(vertex)

    // connect nodes of both edge and vertex

    //  v -> e
    //  e -> v
  }

  printGraph = () => {
    const getKeys = this.adjList.keys()

    for(let i of getKeys){
      let getValues = this.adjList.get(i)
      let temp = ''

      for(let j of getValues){
        temp += j + ' '
      }

      console.log(`${i} -> ${temp}`)
    }
  }

  bfs = (startingNode) => {
    let visited = {}
    let newQueue = []

    visited[startingNode] = true
    newQueue.push(startingNode)

    while(newQueue.length !== 0){
      console.log('visit',visited)
      let getQueueElement = newQueue.shift()

      console.log(getQueueElement)

      let getList = this.adjList.get(getQueueElement)

      for(let i in getList){
        let neighbor = getList[i]

        if(!visited[neighbor]){
          visited[neighbor] = true
          newQueue.push(neighbor)
        }
      }
    }
  }

  DFS = (startingNode) => {
    let visited = {}

    this.DFSutil(startingNode, visited)

  }

  DFSutil = (vertex, visited) => {
    console.log('visit', visited)
    visited[vertex] = true

    console.log(vertex)

    let getNeighbors = this.adjList.get(vertex)

    for(let i in getNeighbors){
      let getElement = getNeighbors[i]

      if(!visited[getElement]){
        this.DFSutil(getElement, visited)
      }
    }
  }
}

let newGraph = new Graph()
let vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]

for(let i in vertices){
  newGraph.addVertex(vertices[i])
}

newGraph.addEdge('A', 'B');
newGraph.addEdge('A', 'D');
newGraph.addEdge('A', 'E');
newGraph.addEdge('B', 'C');
newGraph.addEdge('D', 'E');
newGraph.addEdge('E', 'F');
newGraph.addEdge('E', 'C');
newGraph.addEdge('C', 'F');

// newGraph.printGraph()

// newGraph.bfs('B')
// newGraph.DFS('F')



console.log(x,y,z)

