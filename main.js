var video ;
song = "";
leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

scoreLeftWrist = 0;
scoreRightWrist = 0;

function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(500,500);
    canvas.position(499,200);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);   

}

function modelLoaded(){
    console.log("MODEL OK!");
}

function draw(){
    image(video , 0 , 0 , 600 ,500);
}

function gotPoses(){


}


function play(){
    song.play();
}

function stop(){
    song.stop();
}