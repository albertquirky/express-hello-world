const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!doctype html>
<html>  
<head>
<style>
div.outer {
	margin:10em 20em;
}
div.box {
	border:1px solid black;
	color:white;
}
div#Name {
	font-weight:bold;
}
div.Fire {
	background:darkred;
}
div.Water {
	background:blue;
}
div.Air {
	background:yellow;
}
div.Earth {
	background:orange;
}
div.Electricity {
	background:indigo;
}
div.Biological {
	background:green;
}
div.Mental {
	background:violet;
}
div.Blank {
	background:gray;
}
</style>
<title>Sins!</title>
</head>
<body onload="display()">

<div class="outer">
<button onclick="next()" id="next">Next</button>
<button onclick="preedit()" id="edit">Edit</button>
<button onclick="newww()" id="new">New</button>
<div id="inner">
	<div id="Name" class="box"></div>
	<div id="Type" class="box"></div>
	<div id="Description" class="box"></div>
	<div id="Abilities" class="box"></div>
	<div id="ButtonSpace"></div>
</div>
</div>

<script>

var current = 0;
var monsts = [];

async function getMonster() {
	
  const url = "./data.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Response status: ${response.status}');
    }

    const json = await response.json();
    monsts = json["Sins"];
	
  	} catch (error) {
    console.error(error.message);
    }
    
    return monsts[current % monsts.length];
  }

async function next() {

	current++;
	display();
	
}

async function display() {
	
	const monst = await getMonster();
    
	document.getElementById("Name").innerHTML="Name: " + monst["Name"];
	document.getElementById("Type").innerHTML="Type: " + monst["Sin"] + "/" + monst["Element"];
	document.getElementById("Description").innerHTML="Description: " + monst["Description"];
	document.getElementById("Abilities").innerHTML="Abilities: " + monst["Abilities"];
	
	document.getElementById("inner").className = monst["Element"];
    
	
}

function newww() {
	
	const sinselect = "<select name='SinSelect' id='SinSelect'><option value='Sloth'>Sloth</option><option value='Envy'>Envy</option><option value='Wrath'>Wrath</option><option value='Lust'>Lust</option><option value='Pride'>Pride</option><option value='Gluttony'>Gluttony</option><option value='Greed'>Greed</option></select>";
	const elementselect = "<select name='ElementSelect' id='ElementSelect'><option value='Earth'>Earth</option><option value='Water'>Water</option><option value='Fire'>Fire</option><option value='Air'>Air</option><option value='Mental'>Mental</option><option value='Biological'>Biological</option><option value='Electricity'>Electricity</option></select>";
	
	document.getElementById("Name").innerHTML="Name: <input id='NameInput'></input>";
	document.getElementById("Type").innerHTML="Type: "+sinselect+elementselect;
	document.getElementById("Description").innerHTML="Description: <textarea id='DescriptionInput' rows='4' cols='100'></textarea>";
	document.getElementById("Abilities").innerHTML="Abilities: <textarea id='AbilitiesInput' rows='4' cols='100'></textarea>";
	
	document.getElementById("inner").className = "Blank";
	
	document.getElementById("ButtonSpace").innerHTML = "<button onclick='submit()' id='submit'>Submit</button>";
}

async function preedit() {
	edit(await getMonster());
}

async function edit(monst) {
	
	newww();
	
	document.getElementById("NameInput").value=monst["Name"];
	document.getElementById("SinSelect").value=monst["Sin"];
	document.getElementById("ElementSelect").value=monst["Element"];
	document.getElementById("DescriptionInput").value=monst["Description"];
	document.getElementById("AbilitiesInput").value=monst["Abilities"];
}

async function submit() {

	  const xhttp = new XMLHttpRequest();
	  xhttp.open("POST", "edit.php");
	  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	  const json = JSON.stringify(monsts);
	  xhttp.send("x="+json);
	  xhttp.onload = function() {
	  	  document.getElementById("ButtonSpace").innerHTML = json;	
      }

	
}
</script>

  </body>
  </html>
`
