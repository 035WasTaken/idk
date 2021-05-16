if (!window.indexedDB) {
    console.warn("Your browser does not support a stable version of IndexedDB, you may not have access to some features if you do not upgrade.")
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



window.onload = function () {
    const inputField = document.getElementById("inputField");
    const submitButton = document.getElementById("submitButton");
    // From the wonderous world of stackoverflow.com, weighing in at an impressive 214 bytes... I bring you, URL VALIDATIONNNNNNNNNNNNNNNNNNNNNNNNNNNN
    const urlValidateRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    inputField.focus();

    let lastClicked = 0

    inputField.addEventListener("input", function() {
        const val = inputField.value;
        const validated = val.match(urlValidateRegex);
        lastClicked = !lastClicked ? Date.now() : lastClicked;
    })

    submitButton.onclick = function() {
       validated && Date.now() - lastClicked <= 3000 ? enableButton(submitButton) : disableButton(submitButton);

       lastClicked = Date.now();
    }
}