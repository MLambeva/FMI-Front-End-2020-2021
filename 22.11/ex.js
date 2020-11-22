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
	function salary(){
		let _salary = 1000;
			return _salary;
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

//ex.6
function Table(){
	var separator = document.createElement("hr");
	document.body.appendChild(separator);
	var header = document.createElement("header");
	header.style.textAlign = 'center';
	var texth = document.createTextNode("Table caption");
	header.appendChild(texth);
	document.body.appendChild(header);
	var table = document.createElement("table");
	
	var border = document.createAttribute("border");
    border.value = "1";
    table.setAttributeNode(border);
	var tr1 = document.createElement("tr");
	var th1 = document.createElement("th");
	var text1 = document.createTextNode("Evidence");
	var text_1 = document.createElement("br");
	var text_11 = document.createTextNode("rating");
	th1.appendChild(text1);
	th1.appendChild(text_1);
	th1.appendChild(text_11);
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
	tr1.appendChild(th1);
	tr1.appendChild(th2);
	tr1.appendChild(th3);
	tr1.appendChild(th4);
	tr1.appendChild(th5);	
	
	var tr2 = document.createElement("tr");
	var td1 = document.createElement("td");
	var text11 = document.createTextNode("A");
	td1.appendChild(text11);
	var td2 = document.createElement("td");
	var text22 = document.createTextNode("Power");
	var text_2 = document.createElement("br");
	var text_22 = document.createTextNode("Output");
	td2.appendChild(text22);
	td2.appendChild(text_2);
	td2.appendChild(text_22);
	var td3 = document.createElement("td");
	var text33 = document.createTextNode("3 Stars");
	td3.appendChild(text33);
	var td4 = document.createElement("td");
	var text411 = document.createTextNode("80%");
	var text422 = document.createElement("br");
	var text433 = document.createTextNode("18studies");
	td4.appendChild(text411);
	td4.appendChild(text422);
	td4.appendChild(text433);
	var td5 = document.createElement("td");
	var text55 = document.createTextNode("......");
	td5.appendChild(text55);
	tr2.appendChild(td1);
	tr2.appendChild(td2);
	tr2.appendChild(td3);
	tr2.appendChild(td4);
	tr2.appendChild(td5);
	
	var tr3 = document.createElement("tr");
	var td11 = document.createElement("td");
	var text111 = document.createTextNode("B");
	td11.appendChild(text111);
	var td22 = document.createElement("td");
	var text222 = document.createTextNode("Weight");
	td22.appendChild(text222);
	var td33 = document.createElement("td");
	var text333 = document.createTextNode("4 Stars");
	td33.appendChild(text333);
	var td44 = document.createElement("td");
	var text441 = document.createTextNode("100%");
	var text442 = document.createElement("br");
	var text443 = document.createTextNode("65studies");
	td44.appendChild(text441);
	td44.appendChild(text442);
	td44.appendChild(text443);
	var td55 = document.createElement("td");
	var text555 = document.createTextNode("......");
	td55.appendChild(text555);
	tr3.appendChild(td11);
	tr3.appendChild(td22);
	tr3.appendChild(td33);
	tr3.appendChild(td44);
	tr3.appendChild(td55);
	
	table.appendChild(tr1);
	table.appendChild(tr2);	
	table.appendChild(tr3);	
	
	document.body.appendChild(table);
}
Table();

//ex.7
function swapRows() {
    document.getElementsByTagName("table")[0].insertBefore(document.getElementsByTagName("tr")[2], document.getElementsByTagName("tr")[1]);
}
var button = document.createElement("button");
var functionality = document.createAttribute("onclick");
functionality.value = "swapRows()";
button.setAttributeNode(functionality);
document.body.appendChild(button);











	