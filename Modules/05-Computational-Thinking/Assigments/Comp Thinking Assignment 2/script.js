function perimeter(l, num) {
    const letter = l
    const periSquare = 4 * num
    const periCircle = 6.28 * num
    return letter === "s" ? periSquare : periCircle;
}

console.log(perimeter("s", 7));
console.log(perimeter("c", 4));
console.log(perimeter("c", 9));