/*Input: Get wind speed and temperature
 *Processing: The formula for wind chill is entered, and are calculated based off of the speed and temperature entered.
 *Output: Display the wind chill in ° Faherenheit
 */

function windChill(temp, speed){
	var f = Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275  * temp * Math.pow(speed, 0.16));
	return f;
}
 
	var result = windChill(50, 3);

	document.getElementById('output').innerHTML = result;


