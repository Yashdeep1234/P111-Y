Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");

Webcam.attach('#camera');

function Take_Snapshot() {
    Webcam.snap(function (img) {
        document.getElementById("result").innerHTML = '<img id="Photo" src="' + img + '">';
    }
    );
}

var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/uUK89AuWr/model.json', model_Load)

function model_Load() {
    console.log('Model loaded');
}

function Check() {
    img = document.getElementById("Photo");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
    }
}