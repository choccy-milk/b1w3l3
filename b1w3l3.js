/**
author: Dennis van Giessen
education: Software Developer
*/

function printTable(table)
{
	document.write("-Tafel van " + table + "-");
	document.write("<br>");

	for(let i = 0; i < 10; i++)
	{
		let problem = table + " * " + (i + 1);
		let solution = table * (i + 1);
		document.write(problem + " = " + solution);
		document.write("<br>");
	}

	document.write("<br>");
}

printTable(3);
printTable(6);

let problem = "(12 + 6) * 10 / 5 - 12";
let solution = (12 + 6) * 10 / 5 - 12;

document.write(problem + " = " + solution);
document.write("<br>");

let inputNumber1 = Number(prompt("Voer een nummer in."));
let inputNumber2 = Number(prompt("Voer nog een nummer in."));
let inputNumber3 = Number(prompt("En nog een nummer."));
let inputNumber4 = Number(prompt("Laatste nummer."));

if(Number.isInteger(inputNumber1) && Number.isInteger(inputNumber2) && Number.isInteger(inputNumber3) && Number.isInteger(inputNumber4))
{
	let problem = "(12" + " + " + inputNumber1 + ") * " + inputNumber2 + " / " + inputNumber3 + " - " + inputNumber4;
	let solution = (12 + inputNumber1) * inputNumber2 / inputNumber3 - inputNumber4;
	document.write(problem + " = " + solution);
}
else
{
	document.write("Voer a.u.b. alleen geldige nummers in.");
}

document.write("<br><br>");
document.write("Ververs de pagina om opnieuw te proberen.");