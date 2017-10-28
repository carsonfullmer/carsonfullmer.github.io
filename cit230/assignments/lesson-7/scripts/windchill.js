/*Input: Get wind speed and temperature
 *Processing:
 *Output: Display the wind chill
 */

function doInputOutput() {
    var s= parseFloat(document.getElementsById('speed').value);
    var t= parseFloat(document.getElementById('temp').value);
    
//Call windChill function
    var result= windChill (t, s);
    
    document.getElementById('output').innerHTML= result;
}

funtion windChill(tempF, speed){
    
    var f= 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275  * tempF * Math.pow(speed, 0.16);
	return f;
}