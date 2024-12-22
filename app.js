const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log('Example app listening on port ${port}!'));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

/*
var current = 0;
var monsts = [];

async function getMonster() {
	
  const url = "./data.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Some sort of error occurred!");
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
*/
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
<script>

const monsters = {
  "Sins":[
    {
        "Name":"Torteyes",
        "Sin": "Sloth",
        "Element":"Earth",
        "Description": "A Torteyes is a tortoise misSing its head and tail, with dozens of eyes protruding from its shell, looking about feverishly. The eyes are of various colors, with each eye color shooting a different type of beam. Each eye has an eyelid that is hard as turtle shell, which close when attacked. Each eye can fire a beam of a random type. Each eye can fire a beam of random energy type.",
        "Abilities": "Disco Shell Hell - The Torteyes makes 10 attacks with each having a base 50% chance to hit each. A secret d20 is also rolled to determine which effect the eye has.        <br>50% chance to hit x10        <br>Do this when a hit succeeds, on a roll of 1d20:        <br>1-14) Rainbow Beam: 1-5 dmg random Element type (7 types, 2 die sides each)        <br>15-19) Evil Eye: Stun - The enemy has to make a Mental saving throw or is Stunned. The length of the stun is rolled at this time, so subsequent stuns that have better length of time rolls are used in place of lesser ones. However, there is no \"super-stun\" for being stunned more than once.        <br>20) Near-diSintegration - The target monster's health is set to 1, regardless of how much health they have. If they only had 1 health, they are fully diSintigrated, dropped to 0 health. When this effect occurs, the Torteyes has a 10% chance of being nearly-diSintigrated, themselves."
    },
    {
    	"Name":"Skinwalker",
    	"Sin":"Envy",
    	"Element":"Water",
    	"Description":"A featureless human sized posable figurine, wearing the skin of a human as a foolhardy attempt to disguise themselves as one.",
    	"Abilities":""
    },
    {
    	"Name":"Black Widow",
    	"Sin":"Wrath",
    	"Element":"Mental",
    	"Description":"The hindquarters of a spider with a human upper-torso in the front. She is an angry, murderous wife.",
    	"Abilities":""
    },
    {
    	"Name":"Burn Victim",
    	"Sin":"Lust",
    	"Element":"Fire",
    	"Description":"A charred body of a person, misSing their eyes, covered in glistening keroSine, with a cigarette in their mouth, and a lighter in one hand.",
    	"Abilities":"Lighter: Burn Victim attempts to light a cigarette, cauSing him to ignite, and ignites the enemy.<br>KeroSine: Vomits excess keroSine on the enemy, making them doubly vulnerable to fire. Anything immune to fire is immune to this effect.<br>Resistance: Fire 75% +1%/lvl, (meaning it takes 25% damage from the Lighter attack).<br>Weakness: Water 50% -1%/3 lvls."
    },
    {
    	"Name":"Poison Ivy Leaguer",
    	"Sin":"Pride",
    	"Element":"Biological",
    	"Description":"",
    	"Abilities":"Itch: If this attack hits, the enemy takes 1-5 damage, then 1-5 damage each turn the Ivy Leaguer passes their turn. It's a sort of \"auto-lock on\" mechanism, where they automatically hit the enemy on subsequent turns."
    }
  ]
}

function getMonster() {

 	return monst[0];

}


function display() {
	
	const monst = getMonster();

 	console.log(monst);
    
	document.getElementById("Name").innerHTML="Name: " + monst["Name"];
	document.getElementById("Type").innerHTML="Type: " + monst["Sin"] + "/" + monst["Element"];
	document.getElementById("Description").innerHTML="Description: " + monst["Description"];
	document.getElementById("Abilities").innerHTML="Abilities: " + monst["Abilities"];
	
	document.getElementById("inner").className = monst["Element"];
    
	
}

 </script>
 
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

</body>
</html>
`

