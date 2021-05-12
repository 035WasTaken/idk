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
    const submitButton = document.getElementById("submitButton")
    inputField.focus();
    
    inputField.addEventListener("input", function() {
        inputField.value.length > 0 ? enableButton(submitButton) : disableButton(submitButton);
    })
}