// Script para manejar la descarga del CV
function descargarCV() {
    window.location.href = 'ruta-a-tu-cv.pdf'; // Reemplaza con la ruta a tu CV
}

// Script para manejar el formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    // Aquí puedes agregar lógica para enviar los datos del formulario, por ejemplo, utilizando Fetch API o AJAX.
    console.log('Nombre:', nombre);
    console.log('Correo:', correo);
    console.log('Mensaje:', mensaje);

    alert('¡Gracias por tu mensaje!');
});
