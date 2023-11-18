function setup(){
    canvas=createCanvas(250,250);
    canvas.center();    
    video =createCapture(VIDEO);
    video.hide();
    clasifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZSnt6o_QF/model.json" ,modelloaded);
}
function modelloaded(){
  console.log("model Loaded");
}
function draw(){
    image(video,0,0,500,300);
    clasifier.classify(video,gotresult);
}
function gotresult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("result_object_name").innerHTML=result[0].label;
        document.getElementById("result_accuracy").innerHTML=result[0].confidence.toFixed(3);
    }
}