
function getDays(a, b) {
    const firstDate = a.getTime();
    const secondDate = b.getTime();
    const daysBetween = secondDate - firstDate;

    // The time in days is equal to the milliseconds divided by 86,400,000.
    const numOfDays = daysBetween / 86400000;
    return `The difference between the two dates is ${numOfDays} days. 😎`;
}

console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019")));
console.log(getDays(new Date("December 29, 2018"), new Date("January 1, 2019")));
console.log(getDays(new Date("July 20, 2019"), new Date("July 30, 2019")));

