// script.js
document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const cedula = document.getElementById('cedula').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const nombres = document.getElementById('nombres').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();

    // Validaciones usando expresiones regulares
    const cedulaRegex = /^[0-9]{10}$/;
    const telefonoRegex = /^[0-9]{7,10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!cedulaRegex.test(cedula)) {
        alert('La cédula debe contener 10 dígitos.');
        return;
    }

    if (!telefonoRegex.test(telefono)) {
        alert('El teléfono debe contener entre 7 y 10 dígitos.');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('Correo electrónico no válido.');
        return;
    }

    // Crear un objeto con los datos del cliente
    const cliente = {
        cedula,
        apellidos,
        nombres,
        direccion,
        telefono,
        email
    };

    // Guardar los datos en el almacenamiento local
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    clientes.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(clientes));

    alert('Datos guardados exitosamente.');
    document.getElementById('clienteForm').reset();
});
