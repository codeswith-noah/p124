function preload(){

}

function setup(){
    canvas = createCanvas(800, 800);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(550, 550);
    canvas.id('myCanvas');

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, -800, 0, 600, 600);
}

function modelLoaded(){
    console.log('PoseNet has been successfully initialized.');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}