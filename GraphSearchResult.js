



var GraphSearchResult = function(params)
{
	this.graph = params.graph;
	this.nodeParents = params.nodeParents;
	this.visitedNodeIndexes = params.visitedNodeIndexes;
	this.source = params.source;
	this.target = params.target;
	this.found = params.found;
}

GraphSearchResult.prototype.getPathToTarget = function()
{
	var path = [];

	if (!this.found)
		return path;

	var curNode = this.target;
	path.unshift(curNode);

	while (curNode != this.source)
	{
		curNode = this.nodeParents[curNode];
		path.unshift(curNode);
	}

	return path;
}

module.exports = GraphSearchResult;