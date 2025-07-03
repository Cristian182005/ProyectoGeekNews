document.addEventListener('DOMContentLoaded', () =>{
    let formLogin = document.getElementById('loginForm');

    if(formLogin){
        formLogin.addEventListener('submit', (event) => {
            event.preventDefault();

            let correoLogin = document.getElementById('correoLogin').value.trim();
            let passwordLogin  = document.getElementById('passwordLogin').value.trim();

            let usuarios = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];

            let usuarioEncontrado = usuarios.find(user =>
                user.correo === correoLogin && user.password === passwordLogin
            );

            if(usuarioEncontrado){
                localStorage.setItem('usuarioActual', JSON.stringify({
                    nombre: usuarioEncontrado.nombre,
                    correo: usuarioEncontrado.correo
                }));
                alert(`¡Bienvenido, ${usuarioEncontrado.nombre}!`);
                window.location.href = '/yallico.html';
            }else{
                alert('Correo o contraseña incorrectos')
            }
        })
    }
})