// try finding your ancestors and offspring

// x = number, 
// y = character("m" = male, "f" = female)
// returns name of an ancestor (m/f) or descendant (m/f)
// if (number === negative) return related 'ancestor';
// if (number === positive) return related 'descendant';
// I'm generation = 0 (generation 0 (m/f) === "me"), so return "me"

function generation(x, y) {
    if (x === -3 && y === "m") {
        return "great grandfather";
    } else if (x === -3 && y === "f") {
        return "great grandmother";
    } else if (x === -2 && y === "m") {
        return "grandfather";
    } else if (x === -2 && y === "f") {
        return "grandmother";
    } else if (x === -1 && y === "m") {
        return "father";
    } else if (x === -1 && y === "f") {
        return "mother";
    } else if (x === 0 && y === "m") {
        return "me!";
    } else if (x === 0 && y === "f") {
        return "me!";
    } else if (x === 1 && y === "m") {
        return "son";
    } else if (x === 1 && y === "f") {
        return "daugther";
    } else if (x === 2 && y === "m") {
        return "grandson";
    } else if (x === 2 && y === "f") {
        return "granddaughter";
    } else if (x === 3 && y === "m") {
        return "great grandson";
    } else if (x === 3 && y === "f") {
        return "great granddaugther";
    }
}

console.log(generation(2, "f"));
console.log(generation(-3, "m"));
console.log(generation(1, "f"));
console.log(generation(0, "f"));
