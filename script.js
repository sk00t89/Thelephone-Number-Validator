const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");



const checkInput = (input) => {
    const regEx = /^\s*1?\s?(\(?\d{3}\)?(\s|-)?\d{3}(\s|-)\d{4}|\s*?\d{10})$/g;
    console.log(input);
    return regEx.test(input);
}

const showResult = (input) => {
    result.textContent = "";
    console.log(input);
    if (input === "") {
        alert("Please enter a valid number!");
    } else if (checkInput(input)) {
        result.textContent = `Valid US number: ${input}`;
    } else {
        result.textContent = `Invalid US number: ${input}`;
    }
}
clearBtn.addEventListener("click", () => {
    result.textContent = "";
})
checkBtn.addEventListener("click", () => {
    showResult(userInput.value)
    userInput.value = "";
});
