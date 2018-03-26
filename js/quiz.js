//#344
var reverseString = function(s){

	var result = "";
	var ary = s.split('');

	for (var i = ary.length - 1; i >= 0; i--) {
		result += ary[i];
	}

	alert(result);
	return result;
}

//#292
var canWin = function(n){

	var result = false;

	if(n < 4)
	{
		result = true;
	}
	else
	{
		result = n % 4 != 0;
	}

	alert(result);
	return result;
}

//#283
var moveZeros = function(nums)
{
	var index = 0;

	for (var i = 0; i < nums.length; i++) 
	{
		if(nums[i] !== 0)
		{
			nums[index++] = nums[i];
		}
	}

	for (index; index < nums.length; index++) {
		nums[index] = 0;
	}

	alert(nums);
}

//#349
var collectIntersection = function(nums1, nums2)
{
	var target;
	var compareBase;
	var result = [];

	if(nums1.length > nums2.length)
	{
		compareBase = nums1;
		target = nums2;
	}
	else
	{
		compareBase = nums2;
		target = nums1;	
	}

	for (var x = 0; x < target.length; x++) 
	{
		var value = target[x];

		if(compareBase.indexOf(value) > -1 && result.indexOf(value) == -1){
			result.push(value);
		}	
	}

	alert(result);
}


//#226
function TreeNode(val){
	this.val = val;
	this.left = null;
	this.right = null;
}

var inverseTree = function(rootNode)
{
	if(rootNode === null || (rootNode.left === null && rootNode.right === null))
	{
		return rootNode;
	}

	var temp = rootNode.left;
	rootNode.left = inverseTree(rootNode.right);
	rootNode.right = inverseTree(temp);

	return rootNode;
}

//#804 Morse, filter same output
var uniqueMorseRepresentations = function(words) {
    var morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
	var resultDiff = [];

    for(var i = 0; i < words.length; i++)
    {    
        var codeBuilder = '';
        
        for(var x = 0; x < words[i].length; x++)
        {
            codeBuilder += morse[words[i].charCodeAt(x) - 97];
        }

        if(resultDiff.indexOf(codeBuilder) == -1)
        {
        	resultDiff.push(codeBuilder);
        	alert(codeBuilder);
        }
    }

    alert(resultDiff.length);
};

