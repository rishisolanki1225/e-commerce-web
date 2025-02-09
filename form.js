const btn = document.getElementById("sign-in");
const form = document.getElementById("myform");

btn.addEventListener("click", dosomething);

function dosomething() {
    const formElements = form.elements;
    for (let i = 0; i < formElements.length; i++) {
        formElements[i].disabled = true;
    }
}


