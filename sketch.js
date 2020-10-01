// randomizer

let dogs = [{
	name: "mario", 
	color: "red"
}, {
	name: "luigi", 
	color: "green"
}, {
	name: "waluigi", 
	color: "purple"
}, {
	name: "wario", 
	color: "yellow"
}, {
	name: "peach", 
	color: "pink"
}, {
	name: "toad", 
	color: "white"
}];

let randomIndex;

function setup() {
	createCanvas(600, 600);
	background(200);


}

function draw(){

}

function mousePressed(){
	background(random(200, 255));
	randomIndex = int(random(dogs.length));
	text(dogs[randomIndex].name, 50, 50);
	dogs.splice(randomIndex, 1);
}