function startClassifier(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/LRR6t5icf/model.json",modelReady)
}

function modelReady(){
    console.log("Model Loadded Succesfully")
    classifier.classify(gotResults)
}

function gotResults(error,results){
   if (error){
    console.log(error)
   } else {
    console.log(results)
    random_number_r=Math.floor(Math.random()*255);
    random_number_b=Math.floor(Math.random()*255);
    random_number_g=Math.floor(Math.random()*255);

    document.getElementById("sound_label").innerHTML="i can hear " + results[0].label
    document.getElementById("accuracy_label").innerHTML="Accurancy " + (results[0].confidence *100).toFixed(2) + "%";
   }
}
