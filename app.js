

var GraphFileReader = require("./GraphFileReader.js");
var SparseGraph = require("./SparseGraph.js");
var SimpleNode = require("./SimpleNode.js");
var GraphEdge = require("./GraphEdge.js");

var reader = new GraphFileReader();
var graph = reader.createFromFile(__dirname + "/data/themePark.json",SparseGraph,SimpleNode,GraphEdge);

console.dir(graph);

var search;
var searchResults;
var pathToTarget;
var pathToTargetReadable;

// DFS
var GraphSearchDFS = require("./GraphSearchDFS.js");

search = new GraphSearchDFS();
searchResult = search.execute(graph,0,graph.numNodes()-1);
pathToTarget = searchResult.getPathToTarget();
pathToTargetReadable = [];

pathToTarget.forEach(function(nodeIndex)
{
	pathToTargetReadable.push(graph.getNode(nodeIndex).label);
})

console.log("DFS");
console.dir(pathToTargetReadable);

// BFS
var GraphSearchBFS = require("./GraphSearchBFS.js");

search = new GraphSearchBFS();
searchResult = search.execute(graph,0,graph.numNodes()-1);
pathToTarget = searchResult.getPathToTarget();
pathToTargetReadable = [];

pathToTarget.forEach(function(nodeIndex)
{
	pathToTargetReadable.push(graph.getNode(nodeIndex).label);
})

console.log("BFS");
console.dir(pathToTargetReadable);

// Djikstra
var GraphSearchDjikstra = require("./GraphSearchDjikstra.js");

search = new GraphSearchDjikstra();
searchResult = search.execute(graph,0,graph.numNodes()-1);
pathToTarget = searchResult.getPathToTarget();
pathToTargetReadable = [];

pathToTarget.forEach(function(nodeIndex)
{
	pathToTargetReadable.push(graph.getNode(nodeIndex).label);
})

console.log("Djikstra");
console.dir(pathToTargetReadable);