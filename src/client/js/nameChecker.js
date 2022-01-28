export function checkForName(inputText) {
    console.log("Running checkForname", inputText);

    let names = ["Picard", "Janeway", "Kirk", "Archer", "Georgiou"];

    if (names.includes(inputText)) {
        alert(`Welcome, Captain ${inputText}`);
    }
}