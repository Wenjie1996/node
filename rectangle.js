// callback is a function used when this module is called
module.exports = (x,y,callback) => {
	if (x <= 0 || y <= 0) {
		// first parameter is a function, second is the time
		setTimeout(() => 
			//callback has two parameter, one is error and another is return value
			callback(new Error("Rectangle dimensions should be greater than zero: x = " + x + ',' + 'y = ' + y), null), 
			2000);
	}
	else{
		setTimeout(() => 
			//callback has two parameter, one is error and another is return value
			callback(null, {
				perimeter: (x, y) => (2*(x + y)),
				area: (x, y) => (x*y)
			}), 
			2000);
	}
}

perimeter = (x, y) => (2*(x + y));
area = (x, y) => (x*y);