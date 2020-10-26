function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(500 , 350);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VtcARAigL/model.json' , modelLoaded);
}

function modelLoaded() {
    console.log('Model Loaded');
}

function draw(){
    image(video , 0 , 0 , 300 , 240);
    classifier.classify(video , gotresult);
}

function gotresult(error , results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_name").innerHTML = results[0].label;
        var percentage =  results[0].confidence.toFixed(3) * 100;
        percentage = percentage + "%";
        document.getElementById("result_accuracy").innerHTML = percentage;
    }
}