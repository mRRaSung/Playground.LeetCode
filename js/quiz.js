var reverseString = function(s){

	var result = "";
	var ary = s.split('');

	for (var i = ary.length - 1; i >= 0; i--) {
		result += ary[i];
	}

	return result;
}