//document.getElementById('p1').innerHTML = "hello world"

document.getElementById('test').onsubmit = function () {
  console.log(document.getElementById('Eingabe').value);
	document.getElementById('p1').innerHTML = document.getElementById('Eingabe').value;
	return false;
}
