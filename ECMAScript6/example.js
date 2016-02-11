// Create vacation object
var vacation = {
    destination: "Chile",
    travelers: 2,
    activity: "skiing",
    cost: 4000
};

// Function uses destructuring assignment to take in just the desired fields of the parameter object
function vacationMarketing({destination, activity}) {
    return `Come to ${destination} and do some ${activity}`
}

// Print
console.log(vacationMarketing(vacation));
