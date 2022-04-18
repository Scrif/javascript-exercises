const findTheOldest = function(array) {
    return array.reduce(oldest, currentValue) => {
    // get the age of the oldest person in the group.
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    // get the age of the current person you're looking at in the array.    
    const currentAge = getAge(currentValue.yearOfBirth, currentValue.yearOfDeath);
    // check to see if the currentAge is older than the oldestAge.
    // if so, currentValue is now the oldest person and is the new oldestAge.
    return oldestAge < currentAge ? currentValue : oldest;
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
