const student = {
	name:"Joydeep"
}
Object.prototype.getKeys = function(){
	return Object.keys(this)
}
console.log(student.getKeys())