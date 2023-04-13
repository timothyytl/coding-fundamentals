function missingLetter(str) {
    // for loop - to loop through each character one by one throughout an entire string length
    for (let i = 0; i < str.length; i++) {
        // create a variable to store current looped character (i) into ASCII code
        const letters = str.charCodeAt(i);

        // if the ASCII code of the current character is not equal to the first character + number of iteration (the number of time/times a loop has been executed), a letter was skipped
        // Ex: Is 'a' EQUAL to charCodeAt(0) = 97(ASCII Code for 'a')? YES... 
        //     (i++), so now i = 1
        //     Is 'b' EQUAL to charCodeAt(1) = 98? YES...
        //     (i++), so now i = 2
        //     Is 'd' EQUAL to charCodeAt(2) = 99? NO...('d' === 100), meaning a letter was skipped!
        //     So, run the return condition: String.fromCharCode(100 - 1 = 99), and 99 === 'c', therefore return 'c'!
        //     Is 'd' EQUAL to charCodeAt(3): 100? YES...
        //     and so on...

        if (letters !== str.charCodeAt(0) + i) {
            return String.fromCharCode(letters - 1);
            // String.fromCharCode() returns a string created from unicodes / ASCII code units (in other words, converts codes to string!)
        }
    }
    return undefined;
}

console.log(missingLetter("abce"));
console.log(missingLetter("abcdefghijkmnoprsuvwxyz"));
