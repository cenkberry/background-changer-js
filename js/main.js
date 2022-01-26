const btn = document.getElementById('btn');
const stopbtn = document.getElementById('stopbtn');
const page = document.querySelector('#page');
const h1 = document.querySelector('#h1');

btn.addEventListener("click", () => {

    const myInt = setInterval(function colorPicker() {

        const letters = [0, 1, "A", 2, 3, "B", 4, 5, "C", 6, 7, "D", 8, 9, "F"];
        let result = [];

        for (let i = 0; i <= 5; i++)
        {
            let ranNum = Math.floor((Math.random() * 15));
            result.push(letters[ranNum]);
        }

        result.unshift("#");
        let sum = result.join('');

        page.style.backgroundColor = " " + sum;
        page.style.color = "#ffffff";
        h1.innerHTML = sum;
    }, 1000);

    stopbtn.addEventListener("click", () => {
        clearInterval(myInt);
    });
});