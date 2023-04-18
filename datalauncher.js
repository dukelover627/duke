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
    function getData(){
        var loadedData = loadData();
        return loadedData;
    }

function start(){
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disable = true;
    document.getElementById("stopButton").disable = false;
}

function stop(){
    clearInterval(timer);
    document.getElementById("startButton").disable = false;
    document.getElementById("stopButton").disable = true;
}

function updateDisplay(){
    //clock code
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
//code for updating the table
    var timeRead = data[index].seconds_data;
    var dataTable = document.getElementById("data");
//read dat and ouput it to HDML page
    if (timeRead >= 10){
        dataTable.rows["seconds_data"].innerHTML = dataRow("Time Elapsed", data[index].seconds_data, "seconds");
        dataTable.rows["latitude"].innerHTML = dataRow("Latitude", data[index].latitude, "");
        dataTable.rows["longitude"].innerHTML = dataRow("Longitude", data[index].longitude, "");
        dataTable.rows["gpsSensor_alt"].innerHTML = dataRow("GPS Altitude", data[index].gpsSensor_alt, "");
        dataTable.rows["bmpSensor_alt"].innerHTML = dataRow("BMP Sensor Altitude", data[index].bmpSensor_alt, "");
        dataTable.rows["bmpSensor_pres"].innerHTML = dataRow("BMP Sensor Pressure", data[index].bmpSensor_pres, "");
        dataTable.rows["bmpSensor_temp"].innerHTML = dataRow("BMP Sensor Temperture", data[index].bmpSensor_temp, "");
        dataTable.rows["digSensor_temp"].innerHTML = dataRow("Digital Sensor Temperture", data[index].digSensor_temp, "");
        dataTable.rows["cssSensor_temp"].innerHTML = dataRow("CSS Sensor Temperture", data[index].cssSensor_temp, "");
        dataTable.rows["cssSensor_eco2"].innerHTML = dataRow("CSS Sensor eCO2", data[index].cssSensor_eco2, "");
        dataTable.rows["cssSensor_TVOC"].innerHTML = dataRow("CSS Sensor TVOC", data[index].cssSensor_TVOC, "");
        dataTable.rows["UV"].innerHTML = dataRow("UV", data[index].UV, "");
        dataTable.rows["accelX"].innerHTML = dataRow("Accel X", data[index].accelX, "");
        dataTable.rows["accelY"].innerHTML = dataRow("Accel Y", data[index].accelY, "");
        dataTable.rows["accelZ"].innerHTML = dataRow("Accel Z", data[index].accelZ, "");
        dataTable.rows["magneticX"].innerHTML = dataRow("Magnetic X", data[index].magneticX, "");
        dataTable.rows["magneticY"].innerHTML = dataRow("Magnetic Y", data[index].magneticY, "");
        dataTable.rows["magneticZ"].innerHTML = dataRow("Magnetic Z", data[index].magneticZ, "");
        dataTable.rows["gyroX"].innerHTML = dataRow("Gryo X", data[index].gyroX, "");
        dataTable.rows["gyroY"].innerHTML = dataRow("Gryo Y", data[index].gyroY, "");
        dataTable.rows["gyroZ"].innerHTML = dataRow("Gryo Z", data[index].gyroZ, "");
    }
//when  the end of the data start reaching start over
    if (index > 500){
        index = 0;
    }
    else{
        index++;
        //index = index +1;
    }
}