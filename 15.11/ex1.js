
function ex1_1(array){
	for(let element of array){
		console.log(element);
	}
}

var B = [];
function ex1_2(array){
	B = array.map(x => x * 2);
	console.log(B);
}

function ex1_3(array){
	console.log(array.filter(num => num % 2 == 0));
}

function ex1_4(array){
	for(var i = 0;i < array.length;i++)
	{
		if(array[i] < 10) return true;	
	}
	return false;
}

function ex1_5(array){
	console.log(array.filter(num => num % 3 == 0));
}

function ex1_6(array){
	let result = (accum, curr) => accum + curr;
	console.log(array.reduce(result));
}

function ex1_7(array){
	console.log(array.slice(array.length - 2));
}

var A = [10, 5, 13, 18, 51];
ex1_1(A);
ex1_2(A);
ex1_3(A);
ex1_4(A);
ex1_4(B);
ex1_5(A);
ex1_6(A);
ex1_7(A);

