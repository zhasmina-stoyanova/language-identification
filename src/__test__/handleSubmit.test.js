/**
 * @jest-environment jsdom
 */
import { handleSubmit } from "../client/js/formHandler.js";
import { updateUI } from "../client/js/formHandler.js";
import { checkForName } from "../client/js/nameChecker.js";

describe("Testing the submit functionality", () => {
    //prepare the environment
    beforeEach(() => {
        document.body.innerHTML =
            `<form>
            <input id="name" type="text" name="input" value="" placeholder="Enter a word ex. Willkommen" />
            <input id="button" type="submit" name="" value="Check" />
        </form>
        <section>
            <div id="results">result</div>
        </section>`;
        require("../client/js/formHandler.js");
    });

    test("Testing the handleSubmit() function with spanish language", () => {
        //set the value of the input field to 'Spanish'
        const input = document.getElementById("name");
        input.setAttribute("value", "Spanish")

        //click the submit button
        const btn = document.getElementById('button');
        btn.addEventListener('click', handleSubmit);
        btn.click();

        expect(results = document.getElementById('results').innerHTML).toBe('Spanish');
    });
});