document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("string");
    const checkButton = document.getElementById("checkButton");
    const result = document.getElementById("result");

    checkButton.addEventListener("click", function () {
        const text = input.value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
        const reversedText = text.split("").reverse().join("");

        if (text === reversedText) {
            result.textContent = `Yes, "${text}" is a palindrome!`;
        } else {
            result.textContent = `No, "${text}" is not a palindrome.`;
        }
    });
});
