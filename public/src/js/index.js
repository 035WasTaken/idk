const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log('duhidegfeuyhrbyhrbfyhbhbhjbfbehjfbeuyrigfeuyrgfeurifheruifh')
    }
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
const submitButton = document.getElementById("submitButton");
// From the wonderous world of stackoverflow.com, weighing in at an impressive 214 bytes... I bring you, URL VALIDATIONNNNNNNNNNNNNNNNNNNNNNNNNNNN
const urlValidateRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
inputField.focus();

inputField.addEventListener("input", function() {
    const val = inputField.value;
    const validated = val.match(urlValidateRegex);
        
    validated ? enableButton(submitButton) : disableButton(submitButton);
})

submitButton.onclick = function() {
    disableButton(submitButton);

    xhttp.open("POST", "/html/v1.html");

    xhttp.setRequestHeader('Content-Type', 'application/json')
        
    xhttp.send(JSON.stringify({
        url: inputField.value
    }))

    console.log(inputField.value);

    setTimeout(() => {
        enableButton(submitButton);
    }, 10000)
}
