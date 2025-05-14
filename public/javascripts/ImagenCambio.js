

const fileInput = document.getElementById('avatar1'); // Input de images
            const previewImages = document.getElementById('avatarPreview'); // Contenedor que contiene las imagenes (Div)

            // Manejador del evento de cambio
            fileInput.addEventListener('change', function(e) {
                previewImages.innerHTML = null;
                const files = e.target.files;
                
                for (let i = 0; i < files.length; i++) {
                    const objectUrl = URL.createObjectURL(files[i]);
                    
                    // Crear un etiqueta img
                    const img = document.createElement('img')

                    // Cargar la url 
                    img.src = objectUrl
                    img.className="avatar-preview"

                    previewImages.appendChild(img)
                }
            });
