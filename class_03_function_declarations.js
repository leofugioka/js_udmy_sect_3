// Function declaration
// We can declare the functions after they're called, differently from Function expressions

const age = calcAge(1992);

function calcAge(birthYear) {
  return 2037 - birthYear;
}

console.log(`My age is ${age}`);

// Function expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(2000);
console.log(age, age2);
