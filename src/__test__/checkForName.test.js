import { checkForName } from "../client/js/nameChecker.js";

describe("Testing the validation of a word", () => {
    test("It should return false if the word contains a number", () => {
        expect(checkForName('6bonjour')).toBeFalsy();
    })
    test("It should return true if it is a word only", () => {
        expect(checkForName('bonjour')).toBeTruthy();
    })
    test("It should return true when the word contains upper and lowercase letters", () => {
        expect(checkForName('HeLLo')).toBeTruthy();
    })
});