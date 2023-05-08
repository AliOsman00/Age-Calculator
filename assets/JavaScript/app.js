// INPUTS
const inpDay = document.getElementById("day");
const inpMonth = document.getElementById("month");
const inpYear = document.getElementById("year");

// OUTPUTS
const outDay = document.getElementById("DD");
const outMonth = document.getElementById("MM");
const outYear = document.getElementById("YY");

// FORM
const form = document.querySelector("form");

// ADDING THE SUBMIT EVENTLISENER TO FORM

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();


const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate () {
    const inputs = document.querySelectorAll("input");
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if (!i.value) {
            i.style.border = "solid red 2px";
            parent.querySelector("small").innerText = "this filed is required !";
            validator = false;
        } else if (inpMonth.value > 12) {
            inpMonth.style.border = "solid red 2px";
            inpMonth.parentElement("small").innerText="must be valid month !";
            validator = false;
        } else if (inpDay.value > 31) {
            inpDay.style.border = "solid red 2px";
            inpDay.parentElement("small").innerText="must be valid day !";
            validator = false;
        } else {
            i.style.borderColor = "black";
            parent.querySelector("small").innerText="";
            validator = true;       
        }
    });
    return validator;
}

function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
        if(inpDay.value > day) {
            day = day + months[month - 1];
            month = month -1;
        }
        if(inpMonth.value>month){
            month = month + 12;
            year = year - 1;
        }

        const d = day - inpDay.value;
        const m = month - inpMonth.value;
        const y = year - inpYear.value;

        outDay.innerHTML = d;
        outMonth.innerHTML = m;
        outYear.innerHTML = y;
    }
}
form.addEventListener("submit", handleSubmit);