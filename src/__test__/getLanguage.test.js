import { getLanguage } from "../client/js/formHandler.js";
import regeneratorRuntime from "regenerator-runtime";

//mock the json response from the API
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({
            "deepTime": 0.05056333541870117,
            "language_list": [
                {
                    "iso-639-1": "fr",
                    "iso-639-2": "fra / fre",
                    "iso-639-3": "fra",
                    "language": "fr",
                    "name": "French",
                    "relevance": 100
                }
            ],
            "status": {
                "code": 0,
                "msg": "OK",
                "credits": 1,
                "remaining_credits": 19867
            },
            "time": 0.057524919509887695
        }),
    })
);

describe("Testing if the API provides a result", () => {
    beforeEach(() => {
        fetch.mockClear();
    });

    it("Get the language", async () => {
        const lang = await getLanguage(process.env.API_KEY, 'bonjour');
        expect(lang).toMatch('French');
    });

    it("Raise an error when API is not reachable", async () => {
        fetch.mockImplementationOnce(() => Promise.reject("API is not accessible"));

        const lang = await getLanguage(process.env.API_KEY, 'bonjour');
        expect(lang).toEqual(null)
    });
});

