class Graph {
    constructor(adjacenyList={}){
        this.adjacenyList = adjacenyList;
    }

    addVertex(vertex){
        if(!(vertex in this.adjacenyList)){
            this.adjacenyList[vertex] = [];
        }
    }

    getVertex(vertex){
        return this.adjacenyList[vertex];
    }

    addEdge(vertex1, vertex2){
        if(vertex1 in this.adjacenyList && vertex2 in this.adjacenyList){
            this.adjacenyList[vertex1].push(vertex2)
            this.adjacenyList[vertex2].push(vertex1)
        }
    }

    removeEdge(vertex1, vertex2){
        if(vertex1 in this.adjacenyList && vertex2 in this.adjacenyList){
            let index1 = this.adjacenyList[vertex1].indexOf(vertex2)
            let index2 = this.adjacenyList[vertex2].indexOf(vertex1)
            if(index1 >=0 && index2 >= 0){
                this.adjacenyList[vertex1].splice(index1, 1);
                this.adjacenyList[vertex2].splice(index2, 1);
            }
        }
    }

    removeVertex(vertex){
        if(vertex in this.adjacenyList){
            let edges = this.adjacenyList[vertex];
            for(const anotherNode of edges){
                this.adjacenyList[anotherNode] = this.adjacenyList[anotherNode].filter(node => node !== vertex)
            }
            delete this.adjacenyList[vertex];
        }
    }
}