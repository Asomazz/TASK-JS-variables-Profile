/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...

let fullName = "Asma Alzemami";
let yearOfBirth = 1990;
let hobby = "Dress up";
let funFact = "I like all food";
let image =
  "data:image/jpeg;base64,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";

/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is {fullName}
 * 2. yearOfBirthString   -> assign it to: I am {YOUR_AGE}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {YOUR_HOBBY}
 *
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */

const fullNameString = `My name is ${fullName}`;
const yearOfBirthString = `I am - ${2024 - yearOfBirth} `;
const hobbyString = `My hobby is ${hobby}`;

/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  stars = stars + 1;
}
function decrementBy1() {
  stars = stars - 1;
}

function incrementBy2() {
  stars = stars + 2;
}
function decrementBy2() {
  stars = stars - 2;
}
