document.getElementById("appointment-scheduler").onsubmit = () => {
    clearErrors();
    let isValid = true;

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();

    if (!fname) {
        document.getElementById("err-fname").style.display = "block";
        isValid = false;
    }
    if (!lname) {
        document.getElementById("err-lname").style.display = "block";
        isValid = false;
    }

    if (!isValid) {
        window.scrollTo({top: 0, left: 0, behavior:'smooth'});
    }
    return isValid;
} 

function clearErrors() {
    let errors = document.getElementsByClassName("err")
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}