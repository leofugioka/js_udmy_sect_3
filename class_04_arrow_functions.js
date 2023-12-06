//function expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;

let birthYear = 1992;

const age3 = calcAge3(birthYear);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  // return 65 - age;
  return `${firstName} retires in ${65 - age} years`;
};

console.log(yearsUntilRetirement(birthYear, "Leandro"));
console.log(yearsUntilRetirement(1987, "Luis"));
