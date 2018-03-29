function Node(val){
	this.Value = val;
	this.Left = null;
	this.Right = null;
}

Node.prototype.insert = function(val)
{
	if(val <= this.Value)
	{
		if(!this.Left)
			this.Left = new Node(val);
		else
			this.Left.insert(val);
	}
	else
	{
		if(!this.Right)
			this.Right = new Node(val);
		else
			this.Right.insert(val);	
	}
}

Node.prototype.contains = function(val)
{
	if(val === this.val)
		return true;

	if(val <= this.val)
	{
		if(!this.Left)
			return false;
		else
			return this.Left.contains(val);
	}
	else
	{
		if(!this.Right)
			return false;
		else
			return this.Right.contains(val);	
	}



}

Node.prototype.printByDepthFist = function()
{
	console.log(this.Value);

	if(this.Left)
		this.Left.depth();

	if(this.Right)
		this.Right.depth();
}

Node.prototype.printByBreadthFirst = function()
{
	let queue = [this];

	while(queue.length)
	{
		//Return first object of array, also remove first object in array
		let treeNode = queue.shift();
		console.log(treeNode.Value);

		if(treeNode.Left)
			queue.push(treeNode.Left);

		if(treeNode.Right)
			queue.push(treeNode.Right);
	}
}

Node.prototype.getMinVal = function()
{
	if(!this.Left)
		return this.Value;
	else
		return this.Left.getMinVal();
}

Node.prototype.getMaxVal = function()
{
	if(!this.Right)
		return this.Value;
	else
		return this.Right.getMaxVal();
}


//Test
function recursive(n){
	if(n === 0)
		return 1;

	return n * recursive(n - 1);
}