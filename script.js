const student = {
	name
}
student.prototype.getKeys = function(){
	let result = [];
	for(let key in student){
		result.push(key);
	}
	return result;
}