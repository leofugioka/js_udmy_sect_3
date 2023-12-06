const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const calcRetirement = function (age) {
  return 65 - age;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = calcRetirement(age);

  if (retirement < 0) {
    console.log(`${firstName} is retired, congratulations!`);
  } else {
    console.log(`${firstName} will retire in ${retirement} years`);
  }
};

yearsUntilRetirement(1994, "Marcelo");
yearsUntilRetirement(1992, "Leandro");
yearsUntilRetirement(1960, "Raphaela");
