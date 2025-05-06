// Función para validar el nombre
function validarNombre() {
    const nombre = document.getElementById('nombre1');
    const errorNombre = document.getElementById('errorNombre1');
    
    if (!nombre.value.trim()) {
        errorNombre.textContent = 'El nombre es requerido';
        return false;
    }
    
    if (nombre.value.length < 3 || nombre.value.length > 100) {
        errorNombre.textContent = 'El nombre debe tener entre 3 y 100 caracteres';
        return false;
    }
    
    errorNombre.textContent = '';
    return true;
}

// Función para validar el precio
function validarPrecio() {
    const precio = document.getElementById('precio1');
    const errorPrecio = document.querySelector('[data-error="price"]');
    
    if (!precio.value) {
        errorPrecio.textContent = 'El precio es requerido';
        return false;
    }
    
    if (isNaN(precio.value) || precio.value <= 0) {
        errorPrecio.textContent = 'El precio debe ser un número positivo';
        return false;
    }
    
    errorPrecio.textContent = '';
    return true;
}

// Función para validar la cantidad
function validarCantidad() {
    const cantidad = document.getElementById('cantidad1');
    const errorCantidad = document.querySelector('[data-error="pieces"]');
    
    if (!cantidad.value) {
        errorCantidad.textContent = 'La cantidad es requerida';
        return false;
    }
    
    if (isNaN(cantidad.value) || cantidad.value <= 0) {
        errorCantidad.textContent = 'La cantidad debe ser un número positivo';
        return false;
    }
    
    errorCantidad.textContent = '';
    return true;
}

// Función para validar el descuento
function validarDescuento() {
    const descuento = document.getElementById('cantidad1');
    const errorDescuento = document.querySelector('[data-error="discount"]');
    
    if (descuento.value && (isNaN(descuento.value) || descuento.value < 0 || descuento.value > 100)) {
        errorDescuento.textContent = 'El descuento debe ser entre 0 y 100';
        return false;
    }
    
    errorDescuento.textContent = '';
    return true;
}

// Función para validar la descripción
function validarDescripcion() {
    const descripcion = document.getElementById('descripcion1');
    const errorDescripcion = document.querySelector('[data-error="description"]');
    
    if (descripcion.value.length > 500) {
        errorDescripcion.textContent = 'La descripción no puede exceder 500 caracteres';
        return false;
    }
    
    errorDescripcion.textContent = '';
    return true;
}

// Función para validar la categoría
function validarCategoria() {
    const categoria = document.querySelector('select[name="categoryId"]');
    const errorCategoria = document.querySelector('[data-error="categoryId"]');
    
    if (categoria.value === '') {
        errorCategoria.textContent = 'Debe seleccionar una categoría';
        return false;
    }
    
    errorCategoria.textContent = '';
    return true;
}

// Función para validar la sección
function validarSeccion() {
    const seccion = document.querySelector('select[name="sectionId"]');
    const errorSeccion = document.querySelector('[data-error="sectionId"]');
    
    if (seccion.value === '') {
        errorSeccion.textContent = 'Debe seleccionar una sección';
        return false;
    }
    
    errorSeccion.textContent = '';
    return true;
}

// Función para validar los ingredientes
function validarIngredientes() {
    const ingredientes = document.querySelectorAll('input[name="ingredients"]');
    const errorIngredientes = document.querySelector('[data-error="ingredients"]');
    
    const seleccionados = Array.from(ingredientes).filter(ing => ing.checked).length;
    
    if (seleccionados < 1) {
        errorIngredientes.textContent = 'Debe seleccionar al menos un ingrediente';
        return false;
    }
    
    errorIngredientes.textContent = '';
    return true;
}

// Función para validar la imagen
function validarImagen() {
    const imagen = document.getElementById('avatar1');
    const errorImagen = document.querySelector('[data-error="image"]');
    
    if (!imagen.files.length) {
        errorImagen.textContent = 'Debe seleccionar una imagen';
        return false;
    }
    
    const fileSize = imagen.files[0].size / 1024 / 1024; // Tamaño en MB
    if (fileSize > 5) {
        errorImagen.textContent = 'La imagen no puede exceder 5MB';
        return false;
    }
    
    errorImagen.textContent = '';
    return true;
}

// Función principal para validar el formulario
function validarFormulario(event) {
    event.preventDefault();
    
    const validaciones = [
        validarNombre(),
        validarPrecio(),
        validarCantidad(),
        validarDescuento(),
        validarDescripcion(),
        validarCategoria(),
        validarSeccion(),
        validarIngredientes(),
        validarImagen()
    ];
    
    if (validaciones.every(v => v)) {
        document.getElementById('formEdicion').submit();
    }
}

// Agregar los event listeners
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formEdicion');
    
    // Validación en tiempo real
    form.addEventListener('input', (e) => {
        switch(e.target.id) {
            case 'nombre1':
                validarNombre();
                break;
            case 'precio1':
                validarPrecio();
                break;
            case 'cantidad1':
                validarCantidad();
                break;
            case 'descripcion1':
                validarDescripcion();
                break;
        }
    });
    
    // Validación al enviar el formulario
    form.addEventListener('submit', validarFormulario);
});