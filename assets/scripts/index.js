function calcular() {
    // Obtener los valores del formulario
    const altura = parseFloat(document.getElementById('altura').value);
    const gravedad = parseFloat(document.getElementById('gravedad').value);
    
    // Calcular el tiempo de caída
    const tiempo = Math.sqrt(2 * altura / gravedad);

    // Calcular la velocidad final
    const velocidad = Math.sqrt(2 * altura * gravedad);

    // Calcular la aceleración alcanzada
    const aceleracion = gravedad * (1 - (1 / (2 * altura * gravedad)));

    // Mostrar los resultados en la página
    document.getElementById('tiempo').textContent = `${tiempo.toFixed(2)} segundos`;
    document.getElementById('velocidad').textContent = `${velocidad.toFixed(2)} m/s`;
    document.getElementById('aceleracion').textContent = `${aceleracion.toFixed(2)} m/s²`;

    // Mostrar elementos ocultos
    document.getElementById("resultadoOperacion").style.display = "block";
}

function limpiarFormulario() {
    // Ocultar elementos
    document.getElementById("resultadoOperacion").style.display = "none";
    document.getElementById('altura').value = null;
    document.getElementById('gravedad').value = 9.81;
}