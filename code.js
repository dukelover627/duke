// fuction that runs timer
function runTimer(countdown){
    // this variable the timer with the countdown that shows on the page
var currtime=50;
// timeout tracks delay 
var timeout=0;
// determins how long the delay
var timeoutincrement=5000;
// built in fucntion run on delay
setTimeout(function(){
// where the contdown display
    countdown.innerHTML=currtime;
    // we -5 so timer can go to zero
    currtime=currtime-5;

},timeout);
timeout=timeout+timeoutincrement;

setTimeout(function(){

    countdown.innerHTML=currtime;
    currtime=currtime-5;

},timeout);
timeout=timeout+timeoutincrement;

setTimeout(function(){

    countdown.innerHTML=currtime;
    currtime=currtime-5;

},timeout);
timeout=timeout+timeoutincrement;

setTimeout(function(){

    countdown.innerHTML=currtime;
    currtime=currtime-5;

},timeout);
timeout=timeout+timeoutincrement;

setTimeout(function(){

    countdown.innerHTML=currtime;
    currtime=currtime-5;

},timeout);
timeout=timeout+timeoutincrement;

setTimeout(function(){

    countdown.innerHTML=currtime;
    currtime=currtime-5;

},timeout);
timeout=timeout+timeoutincrement;

setTimeout(function(){

    countdown.innerHTML=currtime;
    currtime=currtime-5;

},timeout);
timeout=timeout+timeoutincrement;

setTimeout(function(){

    countdown.innerHTML=currtime;
    currtime=currtime-5;

},timeout);
timeout=timeout+timeoutincrement;

setTimeout(function(){

    countdown.innerHTML=currtime;
    currtime=currtime-5;

},timeout);
timeout=timeout+timeoutincrement;

setTimeout(function(){

    countdown.innerHTML=currtime;
    currtime=currtime-5;

},timeout);
timeout=timeout+timeoutincrement;
//last timout with alert
setTimeout(function(){
    countdown.innerHTML=currtime;
    //alert to balst off
    alert("blast off");

},timeout);
}
//empty for now
function startbuttonclick(){}
function stopbuttonclick(){}