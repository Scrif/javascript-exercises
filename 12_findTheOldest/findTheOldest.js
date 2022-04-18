const findTheOldest = function(array) {
    return array.reduce(oldest, currentValue) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath); 
    // Gets the   
    const currentAge = getAge(currentValue.yearOfBirth, currentValue.yearOfDeath);
    return oldestAge
    }
};

    // If person isn't dead (has no deathDate), figure out what today's date
    // is, and calculate their current age.
const getAge = function(birthDate,deathDate) {
    if (!deathDate) {
        deathDate = new Date().getFullYear();
    }
    return deathDate - birthDate;
};

// Do not edit below this line
module.exports = findTheOldest;
