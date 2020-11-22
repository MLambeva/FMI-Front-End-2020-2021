//ex.1
var person = {
			_salary: 1000,
			getSecretSalaryInfo: function (){
				return this._salary;
			}
};
var stoleSalaryInfo = person.getSecretSalaryInfo();

		console.log(person.getSecretSalaryInfo()); //принтира 1000
		console.log(stoleSalaryInfo); //принтира undefined
		
//ex.2
class Person {
    constructor(name) {
      this.name = name;
      this.planet = "Земя";
    }	
	print(){
		console.log(`Здравей ${this.name} от планетата ${this.planet}`);
	}		
}
var Person1 = new Person("Monika");
var Person2 = new Person("Ivan");
var Person3 = new Person("Dayana");
Person1.print();
Person2.print();
Person3.print();

//ex.3


//ex.4
class Person {
    constructor(name) {
      this.name = name;
    }	
	function print(){
		let _salary = 1000;
		function salary(){
			console.log(this.name + " " + _salary);
		}
	}
}
		
var Person4 = new Person("Petar");
Person4.print();

//ex.5
function changeColors(sColor1, sColor2){
    var x = document.getElementsByTagName("p");
    var y = document.getElementsByClassName("headertitle");
    console.log(x.length);
    console.log(y.length);

    for(elem of x)
    {
        elem.style.backgroundColor = sColor1;
    }

    for(elem of y)
    {
        elem.style.backgroundColor = sColor2;
    }

}
changeColors("pink", "blue");

<header><center>Table caption</center></header>
<table border="1">
 <thead>
	<tr>
		<th>Evidence<br>rating</th>
		<th>Effect</th>
		<th>Efficacy</th>
		<th>Consensus</th>
		<th>Comments</th>
	</tr>
 </thead>
//ex.6
function Table(){
	var separator = document.createElement("hr");
	document.body.appendChild(separator);
	var header = document.createElement("header");
	header.style.textAlign = 'center';
	var texth = document.createTextNode("Table caption");
	header.appendChild(texth);
	var table = document.createElement("table");
	var border = document.createAttribute("border");
    border.value = "1";
    table.setAttributeNode(border);
	var thead = document.createElement("thead");
	var tr = document.createElement("tr");
	table.appendChild(tr);
	var th1 = document.createElement("th");
	var text1 = document.createTextNode("Evidence rating");
	th1.appendChild(text1);
	var th2 = document.createElement("th");
	var text2 = document.createTextNode("Effect");
	th2.appendChild(text2);
	var th3 = document.createElement("th");
	var text3 = document.createTextNode("Efficacy");
	th3.appendChild(text3);
	var th4 = document.createElement("th");
	var text4 = document.createTextNode("Consensus");
	th4.appendChild(text4);
	var th5 = document.createElement("th");
	var text5 = document.createTextNode("Comments");
	th5.appendChild(text5);
	table.appendChild(thead);
}








	