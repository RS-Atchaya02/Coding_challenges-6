function findFirstNonRepeatedCharacter(str) {
    const charCount = {};
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}
const exampleString = "swiss";
const firstNonRepeated = findFirstNonRepeatedCharacter(exampleString);
console.log(firstNonRepeated);  // Output will be 'w'
