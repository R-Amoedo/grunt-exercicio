document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let numeroMaximo = document.getElementById('number').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio +1);

        document.getElementById('valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
}) 