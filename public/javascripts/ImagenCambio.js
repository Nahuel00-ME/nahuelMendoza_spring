

 const changeImage =document.getElementById('avatar1').addEventListener('change', function(e) {
    const inputFile = e.target;
    
    // Verificar si se seleccionó una imagen
    if (!inputFile.files || !inputFile.files[0]) {
        return;
    }
    
    const file = inputFile.files[0];
    const preview = document.getElementById('avatar1-preview');
    
    // Crear una URL temporal para la imagen
    const objectURL = URL.createObjectURL(file);
    
    // Actualizar la imagen de vista previa
    preview.src = objectURL;
});

