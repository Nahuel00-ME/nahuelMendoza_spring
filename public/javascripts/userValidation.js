const error = (e) => document.getElementById(e);

const formCrear = document.getElementById('formCrear');
const inputEmail = document.getElementById('email');
const inputNombre = document.getElementById('nombre');
const inputApellido = document.getElementById('apellido');
const inputContrasena = document.getElementById('contrasena ');
const inputContrasena2 = document.getElementById('contrasena2');
const inputImagen = document.getElementById('avatar1');


inputEmail.addEventListener('blur' , function() {
    switch (true) {
        case this.value.length < 1:
            this.classList.add('is-invalid');
            error('error-email').innerHTML = 'El email no puede estar vacío';
            break;
        case this.value.length > 100:
            this.classList.add('is-invalid');
            error('error-email').innerHTML = 'El email debe tener menos de 100 caracteres';
            break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
           error('error-email').innerHTML = null;
            break;
    }
})

inputApellido.addEventListener('blur' , function() {
    switch (true) {
        case this.value.length < 3:
            this.classList.add('is-invalid');
            error('error-apellido').innerHTML = 'El apellido debe tener al menos 3 caracteres';
            break;
        case this.value.length > 100:
            this.classList.add('is-invalid');
            error('error-apellido').innerHTML = 'El apellido debe tener menos de 100 caracteres';
            break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
           error('error-apellido').innerHTML = null;
            break;
    }
}
)

inputContrasena.addEventListener('blur' , function() {
    switch (true) {
        case this.value.length < 8:
            this.classList.add('is-invalid');
            error('error-contrasena').innerHTML = 'La contraseña debe tener al menos 8 caracteres';
            break;
        case this.value.length > 100:
            this.classList.add('is-invalid');
            error('error-contrasena').innerHTML = 'La contraseña debe tener menos de 100 caracteres';
            break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
           error('error-contrasena').innerHTML = null;
            break;
    }
}   )

inputContrasena2.addEventListener('blur' , function() {
    switch (true) {
        case this.value.length < 8:
            this.classList.add('is-invalid');
            error('error-contrasena2').innerHTML = 'La contraseña debe tener al menos 8 caracteres';
            break;
        case this.value.length > 100:
            this.classList.add('is-invalid');
            error('error-contrasena2').innerHTML = 'La contraseña debe tener menos de 100 caracteres';
            break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
           error('error-contrasena2').innerHTML = null;
            break;
    }
})

inputImagen.addEventListener('blur' , function() {
    switch (true) {
        case this.value.length < 1:
            this.classList.add('is-invalid');
            error('error-imagen').innerHTML = 'La imagen no puede estar vacía';
            break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
           error('error-imagen').innerHTML = null;
            break;
    }
})

formCrear.addEventListener('submit', function(e) {
    e.preventDefault();
    let error = false;
    const inputs = [inputEmail, inputNombre, inputApellido, inputContrasena, inputContrasena2, inputImagen];
    inputs.forEach(input => {
        if (input.classList.contains('is-invalid') || input.value == '') {
            input.classList.add('is-invalid');
            error = true;
        }
    });
    if (error) {
        alert('Hay errores en el formulario');
    } else {
        formCrear.submit();
    }
})