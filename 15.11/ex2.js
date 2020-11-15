
var date1 = new Date();
var Object1 = {
	"day":date1.getDate(),
	"month":date1.getMonth()+1,
	"year":date1.getFullYear(),
	"printDate":function(){
		return this.day + "." + this.month + "." + this.year;
	}
}

var date2 = new Date(2020, 11, 08, 21, 00, 00);
var Object2 = {
	"day":date2.getDate(),
	"month":date2.getMonth()+1,
	"year":date2.getFullYear(),
	"printDate":function(){
		return this.day + "." + this.month + "." + this.year;
	}
}

var array1 = [Object1.printDate(), Object2.printDate()];

var array2 = [date1.getDay(), date2.getDay()];


var HourToday = {
	"hour":date1.getHours(),
	"minutes":date1.getMinutes(),
	"seconds":date1.getSeconds(),
	"printHour":function(){
		return this.hour + ":" + this.minutes + ":" + this.seconds;
	}
}

var Hour2 = {
	"hour":date2.getHours(),
	"minutes":date2.getMinutes(),
	"seconds":date2.getSeconds(),
	"printHour":function(){
		return this.hour + ":" + this.minutes + ":" + this.seconds;
	}
}

const daysNames = ["неделя", "понеделник", "вторник", "сряда", "четвъртък", "петък", "събота"];

function daysInMonth (month, year) {
    return new Date(year, month + 1, 0).getDate();
}

var array3 = ["Дата:" + Object1.printDate() + ", час: " + HourToday.printHour() + ", " + daysNames[date1.getDay()] + ", " + daysInMonth(date1.getMonth(), date1.getFullYear()) + "дни",
              "Дата:" + Object2.printDate() + ", час: " + Hour2.printHour() + ", " + daysNames[date2.getDay()] + ", " + daysInMonth(date2.getMonth(), date2.getFullYear()) + "дни"];


console.log(array1);
console.log(array2);
console.log(array3);
 
