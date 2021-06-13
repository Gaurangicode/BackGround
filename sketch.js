const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var sunrise1,sunrise2,sunrise3,sunrise4,sunrise5,sunrise6;
var sunset7,sunset8,sunset9,sunset10,sunset11,sunset12;

function preload() {
    // create getBackgroundImg( ) here
    sunrise1 = loadImage("sunrise1.png")
    sunrise2 = loadImage("sunrise2.png")
    sunrise3 = loadImage("sunrise3.png")
    sunrise4 = loadImage("sunrise4.png")
    sunrise5 = loadImage("sunrise5.png")
    sunrise6 = loadImage("sunrise6.png")
    sunset7 = loadImage("sunset7.png")
    sunset7 = loadImage("sunset7.png")
    sunset7 = loadImage("sunset7.png")
    sunset7 = loadImage("sunset7.png")
    sunset7 = loadImage("sunset7.png")
    sunset7 = loadImage("sunset7.png")
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    bg.add;
}

function draw(){

    // add condition to check if any background image is there to add
    if(hour>=04 && hour<=06 ){
        bg= "sunrise1.png";
    }else if(hour>=06 && hour<=08 ){
        bg= "sunrise2.png";
    }else if(hour>=23 && hour<=0 ){
        bg= "sunrise3.png";
    }else if(hour>=0 && hour<=03 ){
        bg= "sunrise4.png";
    }else{
        bg= "sunrise5.png";
    }
    
    
    // write code to display time in correct format here
   

    Engine.update(engine);


}

async function getBackgroundImg(){

    // write code to fetch time from API
    async function getTime(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
        
    //change the data in JSON format
    var json= await response.json();
    var dt=json.datetime;
    console.log(dt)
    
    // write code slice the datetime
    var hour = dt.slice(11,13)
    console.log(hour)
   


    // add conditions to change the background images from sunrise to sunset
    if(hour>05&&hour<17){
        bg = "sunrise6.png"
    }
    else{
        bg = "sunset12.png"
    }
    
 //load the image in backgroundImg variable here
 backgroundImg = loadImage(bg)
}


}