//returns true if the given word does not contain number(s), and false - otherwise
export function checkForName(inputText) {
    let regex = /^[A-Za-z]+$/;
    if (inputText && regex.test(inputText)) {
        return true;
    } else {
        return false;
    }
}