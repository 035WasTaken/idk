const xhttp = new XMLHttpRequest();

function setOutput(text, outputField) {
    return outputField.value = text;
}

function enableButton(button) {
    if(!button) {
        throw Error("Bad argument")
    }

    button.style.opacity = "1";
    button.disabled = false;
}

function disableButton(button) {
    if(!button) {
        throw Error("Bad argument")
    }

    button.style.opacity = "0.3";
    button.disabled = true;
}


const inputField = document.getElementById("inputField");
const outputField = document.getElementById("outputField")
const submitButton = document.getElementById("submitButton");
const urlValidateRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
inputField.focus();

inputField.addEventListener("input", function() {
    const val = inputField.value;
    const validated = val.match(urlValidateRegex);
        
    validated ? enableButton(submitButton) : disableButton(submitButton);
})

submitButton.onclick = function() {
    disableButton(submitButton);
    const json = JSON.stringify({ url: inputField.value });

    xhttp.open("POST", "/html/v1.html");
    xhttp.setRequestHeader('Content-Type', 'application/json')
    xhttp.send(json);

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log('Received OK response from server');
            const shortURL = JSON.parse(xhttp.response).shortURL;
            setOutput(shortURL, outputField)
        }
    }

    console.log(json);

    setTimeout(() => {
        enableButton(submitButton);
    }, 10000)
}
