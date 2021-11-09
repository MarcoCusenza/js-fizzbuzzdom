const grid = document.getElementById("grid");
let x = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 15 == 0) {
        x = "FizzBuzz";
    } else if (i % 3 == 0) {
        x = "Fizz";
    } else if (i % 5 == 0) {
        x = "Buzz";
    } else {
        x = i;
    }

    console.log(x);

    if (isNaN(x)) {
        grid.innerHTML += `<div class="box ${x}">${x}</div>`;
    } else {
        grid.innerHTML += `<div class="box">${x}</div>`;
    }
}