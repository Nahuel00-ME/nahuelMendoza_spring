
const errorFrase = (e) => document.getElementById(e);


const formCrear = document.getElementById('formCrear');
const inputNombre = document.getElementById('nombre1');
const inputPrecio = document.getElementById('precio1');
const inputCantidad = document.getElementById('cantidad1');
const inputPieces = document.getElementById('pieces1');
const selectCategory = document.getElementById('category1');
const selectSection = document.getElementById('section1');
const textareaDescripcion = document.getElementById('descripcion1');
const checkboxIngredientes = document.querySelectorAll('input[type="checkbox"]');
const inputImagen = document.getElementById('avatar1');

inputNombre.addEventListener('blur', function () {
    switch (true) {
        case this.value.length < 3:
            this.classList.add('is-invalid');
            errorFrase('error-nombre').innerHTML = 'El nombre debe tener al menos 3 caracteres';
            break;
        case this.value, length > 100:
            this.classList.add('is-invalid');
            errorFrase('error-nombre').innerHTML = 'El nombre debe tener menos de 100 caracteres';
            break;
            case this.value.length < 1:
            this.classList.add('is-invalid');
            errorFrase('error-nombre').innerHTML = 'El nombre no puede estar vacío';
            break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorFrase('error-nombre').innerHTML = null;
            break;
    }

})

inputPrecio.addEventListener('blur', function () {
    switch (true) {
        case this.value.length < 1:
            this.classList.add('is-invalid');
            errorFrase('error-precio').innerHTML = 'El precio no puede estar vacío';
            break;
        case this.value < 0:
            this.classList.add('is-invalid');
            errorFrase('error-precio').innerHTML = 'El precio no puede ser negativo';
            break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorFrase('error-precio').innerHTML = null;
            break;
    }

})

inputCantidad.addEventListener('blur', function () {
    switch (true) {
        case this.value.length < 1:
            this.classList.add('is-invalid');
            errorFrase('error-cantidad').innerHTML = 'La cantidad no puede estar vacía';
            break;
        case this.value < 0:
            this.classList.add('is-invalid');
            errorFrase('error-cantidad').innerHTML = 'La cantidad no puede ser negativa';
            break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorFrase('error-cantidad').innerHTML = null;
            break;
    }

})

inputPieces.addEventListener('blur', function () {
    switch (true) {
        case this.value.length < 1:
            this.classList.add('is-invalid');
            errorFrase('error-pieces').innerHTML = 'La cantidad no puede estar vacía';
            break;
        case this.value < 0:
            this.classList.add('is-invalid');
            errorFrase('error-pieces').innerHTML = 'La cantidad no puede ser negativa';
            break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorFrase('error-pieces').innerHTML = null;
            break;
    }

})
textareaDescripcion.addEventListener('blur', function () {
    switch (true) {
        case this.value.length < 20:
            this.classList.add('is-invalid');
            errorFrase('error-descripcion').innerHTML = 'La descripción debe tener al menos 20 caracteres';
            break;
        case this.value.length > 500:
            this.classList.add('is-invalid');
            errorFrase('error-descripcion').innerHTML = 'La descripción debe tener menos de 500 caracteres';
            break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorFrase('error-descripcion').innerHTML = null;
            break;
    }

})
selectCategory.addEventListener('blur', function () {
    switch (true) {
        case this.value.length < 1:
            this.classList.add('is-invalid');
            errorFrase('error-category').innerHTML = 'La categoría no puede estar vacía';
            break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorFrase('error-category').innerHTML = null;
            break;
    }

})
selectSection.addEventListener('blur', function () {
    switch (true) {
        case this.value.length < 1:
            this.classList.add('is-invalid');
            errorFrase('error-section').innerHTML = 'La sección no puede estar vacía';
            break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorFrase('error-section').innerHTML = null;
            break;
    }

})
inputImagen.addEventListener('blur', function () {
    switch (true) {
        case this.value.length < 1:
            this.classList.add('is-invalid');
            errorFrase('error-imagen').innerHTML = 'La imagen no puede estar vacía';
            break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorFrase('error-imagen').innerHTML = null;
            break;
    }

})
checkboxIngredientes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            this.classList.add('is-valid');
            errorFrase('error-ingredientes').innerHTML = null;
        } else {
            this.classList.remove('is-valid');
            errorFrase('error-ingredientes').innerHTML = 'Debe seleccionar al menos un ingrediente';
        }
    });
});


formCrear.addEventListener('submit', function (event) {
    let errors = false;
    let elementForm = this.elements;
    for (let i = 0; i < elementForm.length; i++) {
        if (elementForm[i].value == "" || elementForm[i].classList.contains('is-invalid')) {
            errors = true;
            break;
        }
    }

    if (error) {
        event.preventDefault();
        errorFrase('errorForm').innerHTML = 'Por favor, corrige los errores antes de enviar el formulario.';

    }
},
    formCrear.submit()
);

