let themeTracker = false; // false if Light theme is not applied till now
const floatingThemeBtn = document.querySelector(".floatingTheme button");

floatingThemeBtn.addEventListener("click", () => {
    if (floatingThemeBtn.innerText === "Lights ON") {
        floatingThemeBtn.innerText = "Lights OFF";
        alert("Light Theme ON");
        floatingThemeBtn.setAttribute("background-color") = black;
        themeTracker = true;
    }
    else if (floatingThemeBtn.innerText === "Lights OFF") {
        alert("Dark Theme ON");
    }
});