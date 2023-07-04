function handleKeyPress(event) {
    var textarea = document.getElementById("keylogger");
    var letter = event.key;

    if (textarea === document.activeElement) {
        textarea.value += letter + letter;
    } else {
        textarea.value += letter;
    }
}
