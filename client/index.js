//document.getElementById('p1').innerHTML = "hello world"
const DudenSearchApi = require( "duden-search-api" );

let instance = new DudenSearchApi();

document.getElementById('test').onsubmit = function () {

  instance.search(document.getElementById('Eingabe').value).then( ( result ) => {
     console.log( result );
  } ).catch( ( error ) => {
     console.log( error );
  } );
  console.log(document.getElementById('Eingabe').value);
	document.getElementById('p1').innerHTML = document.getElementById('Eingabe').value;
	return false;
}
