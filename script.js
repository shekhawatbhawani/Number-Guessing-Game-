let output = document.querySelector("#output");
let x = Math.round(Math.random() * 100);
let ans = 0;
let index = 1;
let count = 1;
console.log(x);
function submit() {
    if (index <= 10) {
        console.log(index);
        let input = document.querySelector("input").value;
        console.log(input);
        if (input == x) {
            ans = 1;
            output.textContent = "Your win the Game ";
        } else if (input < x) {
            output.textContent = "Your guess is low";
        } else if (input > x) {
            output.textContent = "Your guess is high";
        }
        if (index === 10) {
            ans = 1;
            output.textContent = "Your Loss the Game ";
        }
    }
    index++;
    if (ans === 1) {
        document.querySelector("input").readOnly = true;
        document.querySelector("#Submit").disabled = true;
        document.querySelector("input").value = "Start Again";
    }
    let total = document.querySelector(".Total");
    total.textContent = count;
    count++;
}
function reset() {
    window.location.reload();
}
