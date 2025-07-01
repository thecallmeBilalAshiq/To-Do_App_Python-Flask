document.addEventListener("DOMContentLoaded", function () {
    const text = "Bilal To Do List made with Python Flask";
    const element = document.getElementById("typed-heading");
    let index = 0;

    function typeLetter() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeLetter, 90); // typing speed
        }
    }

    typeLetter();
});
