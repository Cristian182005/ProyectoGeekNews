document.addEventListener('DOMContentLoaded', () => {
    let formRegistro  = document.querySelector('form');

    formRegistro .addEventListener('submit', (event) => {
        event.preventDefault();

        let nombre = document.getElementById('nombre').value.trim();
        let correo = document.getElementById('correo').value.trim();
        let password = document.getElementById('password').value.trim();

        if(!nombre || !correo || !password){
            alert('Relleno todos los campos');
            return;
        }

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(correo)){
            alert('Introdusca un correo electrónico válido');
            return;
        }

        if(password.length < 8){
            alert('La contraseña debe tener como mínimo 8 caracteres');
            return;
        }
        
        let usuarios = JSON.parse(localStorage.getItem('usuariosRegistrados'))|| [];

        const correoExistente = usuarios.some(user => user.correo === correo);
        if(correoExistente){
            alert('Este correo electrónico ya está registrado. Por favor, usa otro.');
            return;
        }

        let nuevoUsuario = {
            nombre: nombre,
            correo: correo,
            password: password
        };

        usuarios.push(nuevoUsuario);
        localStorage.setItem('usuariosRegistrados', JSON.stringify(usuarios));
        alert(`¡Registro exitoso para ${nombre}!`)
        window.location.href = 'Login.html';
    });
});

