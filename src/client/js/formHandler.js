//function is triggered on 'submit' button
export function handleSubmit(event) {
    //prevents the form from submitting
    event.preventDefault();

    let inputText = document.getElementById("name").value;
    //checks if the input name contains digits
    const validationPassed = Client.checkForName(inputText);

    if (validationPassed) {
        document.getElementById("name").style.borderColor = "transparent";
        //get the key for making request to the meaningcloud API
        fetch('/key')
            .then(response => response.text())
            //get the language of the given word from the meaningcloud API
            .then(apiKey => Client.getLanguage(apiKey, inputText))
            //update the results field on the page
            .then(data => updateUI(data))
            .catch(error => {
                alert('Error occur!');
            });
    } else {
        //set the border of the unvalidated field to red
        document.getElementById("name").style.borderColor = "red";
    }
}

//sending a request to a meaningcloud API for the language of the word provided
export async function getLanguage(apiKey, inputText) {
    const url = 'https://api.meaningcloud.com/lang-4.0/identification?key=' + apiKey + '&txt=' + inputText;

    try {
        const response = await fetch(url);
        const data = await response.json();

        //returns the language name
        return data.language_list[0].name;
    } catch (error) {
        return null;
    }
}

//updates the field with id 'results' with the value for the language from the API
export function updateUI(lang) {
    document.getElementById('results').innerHTML = lang;
}
