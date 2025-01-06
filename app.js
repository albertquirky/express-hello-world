const express = require("express");
const app = express();
const port = process.env.PORT || 10000;
const util = require('util'); 
  
const fs = require('node:fs');

const jsonfile ="data.json";

const server = app.listen(port, () => console.log('Example app listening on port '+port));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

fs.readFile('canvas.html', 'utf8', (err, pageData) => {
	app.get("/", (req, res) => res.type('html').send(pageData));
}

app.use(express.urlencoded({ extended: true }));


/*
app.post('/', (req, res) => {
		
  console.log('Received POST data:', req.body);
  fs.readFile(jsonfile, 'utf8', (err, data) => {
	  let d = JSON.parse(data);
	  if (req.body.hasOwnProperty("DeleteYes")) {
	  	  let toDie = req.body["DeleteYes"];
		  console.log("Killing "+toDie);
		  for (let i = 0; i < d["Sins"].length; i++) {
			  if (d["Sins"][i]["Name"] == toDie) 
				  d["Sins"].splice(i,1);
		  }
	  }
	  else if (req.body.hasOwnProperty("editing")) {
		  for (let i = 0; i < d["Sins"].length; i++) {
			  if (d["Sins"][i]["Name"] == req.body.Name) {
			  	  console.log("hi");
			  	  for (const k in d["Sins"][i]) {
			  	  	  d["Sins"][i][k] = req.body[k];
			  	  	  console.log(k+": "+d["Sins"][i][k] +"="+ req.body[k]);
			  	  }
			  }
		  }
	  }
	  else {  		  
			  d["Sins"].unshift(req.body);
	  }
	  fs.writeFile(jsonfile, JSON.stringify(d), (error)=>{ console.log(error); });
	  console.log("wrote to " + jsonfile + ": " +JSON.stringify(d));
	  loadPage(res);
	  });
});


function loadPage(res) {
	
	fs.readFile(jsonfile, 'utf8', (err, monsterData) => {
			
		fs.readFile('index.html', 'utf8', (err, pageData) => {
				
			if (!monsterData) {
				console.log("AAAAAAAAA!!!");
				loadPage(res);				
			}
			else res.type('html').send(pageData.replace("{*}", monsterData));
				
		});
		
	});	

}
*/
