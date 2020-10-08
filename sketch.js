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
let animating = false;
let char = [];
let button;

function preload(){

	for(let i = 0; i <= 15; i++){
		char[i] = loadImage(`assets/char_${i}.png`)
	}

}

function setup() {
	createCanvas(600, 600);
	background(200);
	textSize(32);
	imageMode(CENTER);
	frameRate(12);

	text("click to randomize", 50, 50);
	button = createButton("click to randomize");
	button.mousePressed(buttonPressed);

	console.log(char);



}

function draw(){

	if (animating == true){
		clear();
		image(char[imageCounter], width/2, height/2);

		if (imageCounter < char.length) {
			imageCounter++;
			console.log(imageCounter);
		}else{
			imageCounter = 0;
		}

	}

}

function randomizer(){
	animating = false;

	if (dogs[0]){

	//background(random(200, 255));
	randomIndex = int(random(dogs.length));
	text(dogs[randomIndex].name + "'s favorite color is " + 
		dogs[randomIndex].color, 50, 50);
	image(random(char), width/2, height/2);
	dogs.splice(randomIndex, 1);
} else {
	background(random(200, 255));
	text("nothing left", 50, 50);
	}

}

function buttonPressed(){
	animating = true;
	setTimeout(randomizer, 2000);



}




