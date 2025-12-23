let input = document.getElementById('inputBox');// Helps to access inputbox
let buttons = document.querySelectorAll("button");// Helps to access all button
let string = "";
let arr = Array.from(buttons);// Button Converts into array element 
console.log(arr);

arr.forEach(button => {

    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }

        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        else {
            string = string + e.target.innerHTML;
            input.value = string;
        }
    })

})