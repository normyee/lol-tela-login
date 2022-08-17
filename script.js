const inputs = document.querySelectorAll(".input");

const quandoFocado = (e) => {
    const span = e.target.previousElementSibling;
    span.classList.add("span_on");
};

const quandoDesfocado = (e) => {
    if (e.target.value == "") {
        const span = e.target.previousElementSibling;
        span.classList.remove("span_on");
    }



};

inputs.forEach((e) => {

    e.addEventListener("focus", quandoFocado);

});

inputs.forEach((e) => {

    e.addEventListener("focusout", quandoDesfocado);

});