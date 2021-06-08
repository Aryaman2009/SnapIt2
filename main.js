rearx=0;
reary=0;

learx=0;
leary=0;

nx=0;
ny=0;



function preload(){
    cat1= loadImage("https://i.postimg.cc/fyzhtdmM/Untitled-1-copy.png");
    cat2= loadImage("https://i.postimg.cc/5NrZ1T74/Untitled-2-copy.png");
    cat3= loadImage("https://i.postimg.cc/LXhr2WWp/Untitled-3-copy.png");



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

         rearx=results[0].pose.rightEar.x-190;
         reary=results[0].pose.rightEar.y-270;

         learx=results[0].pose.leftEar.x-280;
         leary=results[0].pose.leftEar.y-250;
         
         nx=results[0].pose.nose.x-250;
         ny=results[0].pose.nose.y-110;
    }
}

function draw(){
    image(capture,0,0,300,350);
    
    image(cat1,rearx,reary,200,300);
    image(cat2,learx,leary,130,200);
    image(cat3,nx,ny,150,150);
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
function dog(){
    window.location="index1.html";
}
function rabbit(){
    window.location="index2.html";
}
function m(){
    window.location="index3.html";
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