var konamiCode = [];
var konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Code Konami : Haut Haut Bas Bas Gauche Droite Gauche Droite B A

window.addEventListener("keydown", function(event) {
    konamiCode.push(event.keyCode);

    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }

    if (arraysEqual(konamiCode, konamiSequence)) {
        document.body.classList.add("plateforme-style");
    }
});

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}
