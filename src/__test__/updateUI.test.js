/**
 * @jest-environment jsdom
 */

import { updateUI } from "../client/js/formHandler.js";

describe("Testing the UIupdate functionality", () => {
    test("Testing the update of the language", () => {
        document.body.innerHTML =
            `<form>
                <input id="name" type="text" name="input" value="" placeholder="Enter a word ex. Willkommen" />
                <input id="button" type="submit" name="" value="Check" />
            </form>
            <section>
                <div id="results">a</div>
            </section>`;

        //set the language
        updateUI("German");

        expect(document.getElementById('results').innerHTML).toBe('German');
    })
});