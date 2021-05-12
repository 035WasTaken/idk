if(!window.indexedDB) {
    console.warn("Your browser does not support a stable version of IndexedDB, you may not have access to some features if you do not upgrade.")
}

function enable(element) {

}
  
document.onload = function() {
    const inputField = $( "#inputField" );
    inputField.focus();

    inputField.on("change", function() {
        const submitButton = $( "submitButton" );
        if(inputField.value && inputField.value.length > 0) {
            submitButton.disabled = "true";
            return submitButton.style.opacity = 0.3;
        }

        console.log(submitButton.style)
        submitButton.style.opacity = 1;
        submitButton.disabled = "false";
    })
}