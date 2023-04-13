var timer = 0;
var theTime = "";
var time_interval = 1000;

//this class will hold uat data
class InputData{
    constructor(
        seconds_data,
        latitude,
        longitude,
        gpsSensor_alt,
        bmpSensor_alt,
        bmpSensor_pres,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eco2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ
    ) {
        this.seconds_data = seconds_data;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gpsSensor_alt = gpsSensor_alt;
        this.bmpSensor_alt = bmpSensor_alt;
        this.bmpSensor_pres = bmpSensor_pres;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eco2 = cssSensor_eco2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

    function dataRow(legend, value, units){
        var txt = "<td>";
        txt += legend;
        txt += ": </td><td>";
        txt += value;
        txt += " " + units;
        txt += "</td>";
        return txt;
    }

function start(){
    var timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disable = true;
    document.getElementById("stopButton").disable = false;
}

function stop(){
    clearInterval(timer);
    document.getElementById("startButton").disable = false;
    document.getElementById("stopButton").disable = true;
}

function updateDisplay(){
    theTime = new Date();
    var theMinutes = theTime.getMinutes();
    if (theMinutes < 10){
        theMinutes = "0" + String(theMinutes);
    }
    var theSeconds = theTime.getSeconds();
    if (theSeconds < 10){
        theSeconds = "0" + String(theSeconds);
    }
    var timeFormat = theTime.getHours() + ":" + theMinutes + ":" + theSeconds;

    document.getElementById("timeStamp").innerHTML = timeFormat;
}