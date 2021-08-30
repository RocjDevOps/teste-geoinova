class Validator {

    constructor() {
        this.validations = [
            "data-min-length",
        ]
    }
}
// iniciar a validação de todos os campos
validate(form)

// pegar os inputs
let inputs = form.getElementsByTagName("input");

// transformo uma HTMLCollection -> array
let inputsArray = [...inputs];

// loop nos inputs e validação mediante ao que for encontrado
inputsArray.forEach(function(input) {

            // loop em todas as validações existentes
            for (let i = 0; this.validations.length > i; i++) {
                // verifica se a validação atual existe no input
                if (input.getAttribute(this.validations[i]) != null) {

                    // data-min-length -> minlength
                    let method = this.validations[i].replace('data-', '').replace('-', '');

                }

            }
            this;

            {

            }
            // verifica se um input tem um número mínimo de caracteres
            minlength()

            let form = document.getElementById("register-form");
            let submit = document.getElementById("btn-submit");

            // evento que dispara as validações
            submit.addEventListener("click", function(e)

                e.preventDefault()); {} {
                Validator.validate(form);
            }