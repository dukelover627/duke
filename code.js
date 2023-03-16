// fuction that runs timer
function runTimer(countdown){

    // this variable the timer with the countdown that shows on the page
var currTime=50;

// timeout tracks delay 
var timeout=0;

// determins how long the delay
var timeoutincrement=5000;

for(var counter=0; counter < 11; counter++){
// built in fucntion run on delay
arrInterval[counter] = setTimeout(function(){
    if(currTime == 0){
    //alert to balst off
    alert("blast off");
    countdowneElem.innerHTML = "launch successful!";
}
else if (currTime >25){
    countdown.innerHTML= "Warning Less than 1/2 way to launch, time left = insert variable here = " + currTime;
}
else{
    countdown.innerHTML=currTime;
}

// where the contdown display


    // we -5 so timer can go to zero
    currTime=currTime-5;

},timeout);
timeout=timeout+timeoutincrement;
}


}
var arrInterval = new Array();
//empty for now
function startbuttonclick(){
    //disable start button once clicked
    document.getElementById("btnStart").disabled = true;
    //disables stop button once clicked
    document.getElementById("btnStop").disabled = false;
            //pionter to html span that shows countdown
var countdown=document.getElementById("countdown");
// calls javascript to make funtion 
runTimer(countdown);
}
function stopbuttonclick(){
    document.getElementById("btnStart").disabled = false;
    document.getElementById("btnStop").disabled = true;
    //clears all delays code
    for (counter = 0; counter < 11; counter++){
        clearTimeout(arrInterval[counter]);
    }
}