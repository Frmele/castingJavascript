// ⚠️ We renamed the variable here to "birthYearString"
const birthYearString = prompt("In which year were you born?");
console.log("You became an adult in the year:");

// Cast (convert) birthYear to a number
const birthYear = Number(birthYearString)
console.log(birthYear + 18);


// We can also combine cast and prompt on the same line
const birthYear2 = Number(prompt("In which year were you born?"));
console.log("You became an adult in the year:");
console.log(birthYear2 + 18);

/*Ask the user for an example temperature in degrees Celsius, use prompt for this.
Cast the value to a number
Use the formula in the comments to convert the temperature in Celsius to Fahrenheit.
Use string interpolation and console.log to print the sentence: “X degrees Celsius is equal to Y degrees Fahrenheit”.*/

let temperatureCelsius = Number(prompt("What is the current temperature in Celsius?"));
let temperatureFahreneith = ((9/5)*temperatureCelsius)+32;
let finalTemperature = temperatureCelsius + `degrees Celsius is equal to ` + temperatureFahreneith +' degrees Fahrenheit';
console.log(finalTemperature)