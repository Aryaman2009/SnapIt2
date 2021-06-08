rearx=0;
reary=0;

learx=0;
leary=0;

nx=0;
ny=0;



function preload(){
    cat1= loadImage("https://i.postimg.cc/PqknWdD9/images-removebg-preview-6.png");
}
function setup(){
    canvas=createCanvas(300,350);
    capture = createCapture(VIDEO);
    capture.hide();

    p= ml5.poseNet(capture,ml);
    p.on('pose',gotResults);

    canvas.parent("canvas")
}
function ml(){
    console.log("PoseNet Intialized");
}
function gotResults(results){
    if(results.length>0){
         console.log(results);
         nx=results[0].pose.nose.x-200;
         ny=results[0].pose.nose.y-90;
    }
}

function draw(){
    image(capture,0,0,300,350);
    
    image(cat1,nx,ny,100,100);
}

function submit(){
    var name=document.getElementById("f").value;
    if(name == "r"){
        tint(255, 69, 69);
    }
    if(name == "b"){
        tint(69, 134, 255);
    }
    if(name == "g"){
        tint(105, 105, 105);
    }
}
function ta(){
    save('Your funny Image.jpg');
}
function cat(){
    window.location="index.html";
}
function dog(){
    window.location="index1.html";
}
function rabbit(){
    window.location="index2.html";
}
function sun(){
    window.location="index4.html";
}
function c(){
    window.location="index5.html";
}
function kc(){
    window.location="index6.html";
}