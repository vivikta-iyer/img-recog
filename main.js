Webcam.set({
    width:350,
    height:300,
    image_format:'png',
   png_quality: 90,
   constraints:{
       facingMode:"environment"
   }
  });
  camera= document.getElementById("camera");
  Webcam.attach('#camera');
  function take_snapshot()
{
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="image_result" src="'+data_uri+'"/>';
});
}
classifier=ml5.imageClassifier('MobileNet',modelLoaded);
function modelLoaded(){
    console.log('modelLoaded');}

function check(){
    img= document.getElementById('image_result');
    classifier.classify(img,gotResult);
    }
    function gotResult(error,results){
    if(error){
      console.error(error);
    }
    else
    {
      document.getElementById("object_n!me").innerHTML= results[0].label;
     
    }
    }
    