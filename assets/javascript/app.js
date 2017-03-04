$( document ).ready(function(){
	
window.onload = function(){

$("#start-button").click(function(){
  var counter = 60;
// Timer
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("show-timer");
      span.innerHTML = counter;
    }
    
    if (counter === 0) {
        alert("Time's Up");
        clearInterval(counter);
    }

  }, 1000);

});
 

}

	

});