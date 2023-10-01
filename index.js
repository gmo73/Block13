// Complete the following functions to make our program work!

/**
 * Takes a F number and returns the number to C
 * @param {string} fahren temperature in degrees F
 * @returns {number} the number of degrees C
 */
function convertToCelsius(fahren){
  let celc = (fahren-32) * (5/9);
  return Number.parseFloat (celc).toFixed();}
/**
 * Takes both numbers (F, C) and display a message with
 * both numbers and how that temp makes you feel using
 * this chart
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very col
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
 * @param {number} fahren
 * @param {number} _celc
 */
    function createMessage (fahren, _celc) {
  
      

       if (fahren < 32) {
        return `The tempature is ${fahren} Fahrenheite and ${_celc} Celsius is very cold.`}

       else if (fahren < 64) {
        return  `The tempature is ${fahren} Fahrenheite and ${_celc} celsius is cold.`}

       else if (fahren < 86) {
        return   `The tempature is ${fahren} Farenheite and ${_celc} Celsius is warm.`}

        else if (fahren < 100) {
        return  `The tempature is ${fahren} Farenheite and ${_celc} Celsius is hot.`}
        }
/**
 * Takes a number and returns a random integer from 0 to the limit
 * @param {number} limit
 * @returns {number} a number between 0 and the int passed in
 */
function rand(limit) {
  return Math.floor(Math.random()*limit);}

// -------------------- DONT NOT CHANGE THE CODE BELOW ---------------------- //

let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius"
);
let _celc = convertToCelsius(fahren);
let output = createMessage(fahren, _celc);
console.log(output);

fahren = prompt(
  "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
);
_celc = convertToCelsius(fahren);
output = createMessage(fahren, _celc);
console.log(output);

fahren = rand(110);
_celc = convertToCelsius(fahren);
output = createMessage(fahren, _celc);
console.log(output);

fahren = rand(110);
_celc = convertToCelsius(fahren);
output = createMessage(fahren, _celc);
console.log(output);
