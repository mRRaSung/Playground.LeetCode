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