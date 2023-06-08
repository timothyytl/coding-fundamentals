// 1. Reverse a String Using Loops

function reverse(str) {
    let arr = str.split('')
    let total = ''
    for (let i = arr.length - 1; i >= 0; i--) {
        total += arr[i]
    }
    return total
}


// 2. Same Back And Forth - Is a string the same backwards and forwards? Return true if it is, false if it is not.

function sameBackAndForth(str) {
    // First we split up the letters into an array
    let arr = str.split('')
    // Then we simply use the reverse() method to reverse all the letters in an array
    let reverseArr = arr.reverse()
    // Join those letters back together into a string
    let reversedStr = reverseArr.join('')
    if (str === reversedStr) {
        console.log('true')
    } else {
        console.log('false')
    }
}


// 3. Given an integer, return an integer that is the reverse ordering of numbers.

function reverseInt(num) {
    return (parseInt(num.toString().split('').reverse().join('')) * Math.sign(num))
}


// 4. SumArr - Find the sum of all items in an array, using loops.

function sumArr(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}

// 5. Angry Grandma - You will write a function that takes in a String. The function should return a new sentence where every word is yelled. A yelled word is when each word is all uppercase followed by 2 exclamation marks (!!)

function deafGrandma(str) {
    // first, take the string, convert it to uppercase (prior to converting it into an array via split(), toUpperCase() only converts string format), then we use split() to convert it into an array and into separate words with ' '. 
    let newStr = str.toUpperCase().split(' ')
    // then we can take the new UpperCase Array, use .map() function to create a new array by applying a provided function to each element (like a forEach function) of the original array and add '!!'. We then use join() to convert the array back into a string format.
    let result = newStr.map(word => word + '!!').join(' ');
    return result
}


// 6. What Is Missing - Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.

function whatIsMissing(str) {
    for (let i = 0; i < str.length; i++) {
        // Create a variable to store alphabet iterations into ASCII codes (a = 97, b = 98,...)
        const alphabets = str.charCodeAt(i)
        // if current letter is not equal to str.charCodeAt(0) + current iteration, return current letter - 1
        // Ex: current letter = a (97),  97(charCodeAt(0)) + 0, 97 + 0 = 97 (a) correct
        //     current letter = b (98),  97(charCodeAt(0)) + 1, 97 + 1 = 98 (b) correct
        //     current letter = d (100), 97(charCodeAt(0)) + 2, 97 + 2 = 99 (c) incorrect cos d (100) !== 99 (c)
        //     therefore, return [ current letter d (100) - 1 = 99 (c) ], so skipped letter is c!
        if (alphabets !== str.charCodeAt(0) + i) {
            return String.fromCharCode(alphabets - 1)
        }
    }
    return undefined
}


// 7. Do a swap on the sentence using the arguments provided and return the new sentence.

function swap(sentence, before, after) {
    // First split() the sentence into separate words in an array in order to use .indexOf() array method to find the index of the argument given in the before parameter
    let strArr = sentence.split(' ')
    let prevStr = strArr.indexOf(before)

    // Create a variable to store the converted (before) argument's first letter into uppercase
    let upperCase = before[0].toUpperCase()

    // Create a variable to store a conditional operator where if the condition is an uppercase, convert the (after) argument's first letter to uppercase followed by a concatenation of that uppercase letter with its remaining letters starting from index 1 of the word (using .slice(1))
    let newWord = upperCase ? after[0].toUpperCase() + after.slice(1) : after

    // Finally, if the (before) index value is found (if no value is available, it is -1), return the sentence argument string while replacing the (before) argument with the newWord.
    if (prevStr !== -1) {
        const removed = strArr.splice(prevStr, 1, newWord)
        const newStr = strArr.join(' ')
        return newStr
    }
}

// swap("His name is Tom", "Tom", "john") == "His name is John".
// swap("Let us get back to more Coding", "Coding", "algorithms") == "Let us get back to more Algorithms".
// swap("This has a spellngi error", "spellngi", "spelling") == "This has a spelling error".