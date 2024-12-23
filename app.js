const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log('Example app listening on port ${port}!'));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;


const fs = require('node:fs');

fs.readFile('index2.html', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

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
};

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

