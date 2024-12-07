const TITLE_TXT = document.getElementById("titletxt");
const COLOR_BTN = document.getElementById("colorbtn");

let colorMode = false;

function ColorChange() {
    alert("タイトル文字色変更");
    if (colorMode) {
        TITLE_TXT.style.color = "black";
        colorMode = false;
    } else {
        TITLE_TXT.style.color = "blue";
        colorMode = true;
    }
}

COLOR_BTN.addEventListener("click", ColorChange);
