// fuction that runs timer
function runTimer(countdown){

    // this variable the timer with the countdown that shows on the page
var currTime=50;

// timeout tracks delay 
var timeout=0;

// determins how long the delay
var timeoutincrement=5000;

for(var counter=0; counter < 10; counter++){
// built in fucntion run on delay
setTimeout(function(){
    if(currTime == 0){
    //alert to balst off
    alert("blast off");
    countdowneElem.innerHTML = "launch successful!";
}
else if (currTime <25){
    countdown.innerHTML= "Warning Less than 1/2 way to launch, time left = insert variable here = " + currTime;
}
else{
    countdown.innerHTML=currTime;
}

// where the contdown display
    countdown.innerHTML=currTime;

    // we -5 so timer can go to zero
    currtime=currTime-5;

},timeout);
timeout=timeout+timeoutincrement;
}


}
//empty for now
function startbuttonclick(){}
function stopbuttonclick(){}