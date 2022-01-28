export function handleSubmit(event) {
    event.preventDefault();

    let formText = document.getElementById("name").value;
    //check if there are only letters
    //\p{L} or \p{Letter}: any kind of letter from any language.
    Client.checkForName(formText);

    console.log("Form Submitted");

    fetch('http://localhost:8081/test')
        .then(res => {
            return res.json()
        })
        .then(function (data) {
            document.getElementById('results').innerHTML = data.message
        })
}
