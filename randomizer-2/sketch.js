// randomizer

let dogs = [{
	name: "Hometown:", 
	color: " Sector 7 slums"
}, {
	name: "Hometown:", 
	color: " Mushroom Kingdom"
}, {
	name: "Hometown:", 
	color: " Liyue"
}, {
	name: "Hometown:", 
	color: " Pallet Town"
}, {
	name: "Hometown:", 
	color: " San Andreas"
}, {
	name: "Hometown:", 
	color: " The Sims custom house"
}, {
	name: "Hometown:", 
	color: " Tsushima"
}, {
	name: "Hometown:", 
	color: " Sparta"
}, {
	name: "Hometown:", 
	color: " Green Hill Zone"
}, {
	name: "Hometown:", 
	color: " Destiny Island"
},{
	name: "Hometown:", 
	color: " Skeld from Among Us"
}, {
	name: "Hometown:", 
	color: " Fall Guys' Fall Mountain"
}, {
	name: "Hometown:", 
	color: " Summoner's Rift"
}, {
	name: "Hometown:", 
	color: " Raccoon City"
}, {
	name: "Hometown:", 
	color: " Hyrule"
}];

let randomIndex;
let animating = false;
let char = [];
let button;

function preload(){

	for(let i = 0; i <= 14; i++){
		char[i] = loadImage(`assets/char_${i}.png`)
	}

}

function setup() {
	createCanvas(600, 600);
	background(200);
	textSize(28);
	imageMode(CENTER);
	frameRate(12);

	button = createButton("Randomize");
	button.mousePressed(buttonPressed);
	button.class("randomButton");

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

	background(random(200, 255));
	randomIndex = int(random(dogs.length));
	text(dogs[randomIndex].name + dogs[randomIndex].color, 50, 50);
	image(random(char), width/2, height/2);
	dogs.splice(randomIndex, 1);
} else {
	background(random(200, 255));
	text("nothing left", 50, 50);
	}

}

function buttonPressed(){
	animating = true;
	setTimeout(randomizer, 1000);



}




