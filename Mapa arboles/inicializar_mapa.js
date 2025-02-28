// Asegúrate de incluir este script después de cargar Leaflet en tu HTML

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Inicializar el mapa centrado en Bogotá
    var map = L.map("map").setView([4.742, -74.071], 15);

    // Agregar capa base de OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>`
    }).addTo(map);

    // Coordenadas del barrio Grataimira Campestre
    let barrioCoord = [
        [4.745, -74.0712],
        [4.7490, -74.0665],
        [4.7485, -74.0661],
        [4.7385, -74.0691],
        [4.7385, -74.0713],
        [4.7425, -74.0783],
        [4.745, -74.0712] // Cierra el polígono
    ];

    // Agregar el polígono del barrio
    let barrioPoli = L.polygon(barrioCoord, { color: "orange", weight: 2 }).addTo(map);

    // Ajustar la vista al polígono
    map.fitBounds(barrioPoli.getBounds());

      // Coordenadas de algunos árboles en la zona
      let arboles = [
        [4.743, -74.072],
        [4.746, -74.068],
        [4.747, -74.070],
        [4.744, -74.075]
    ];

    // Agregar marcadores para los árboles
    arboles.forEach(coord => {
        L.marker(coord).addTo(map).bindPopup("Árbol");
    });

    // Calcular y mostrar distancias entre los árboles
    for (let i = 0; i < arboles.length; i++) {
        for (let j = i + 1; j < arboles.length; j++) {
            let distancia = map.distance(arboles[i], arboles[j]) / 1000; // Convertir a km
            let midPoint = [(arboles[i][0] + arboles[j][0]) / 2, (arboles[i][1] + arboles[j][1]) / 2];
            L.polyline([arboles[i], arboles[j]], { color: 'blue', weight: 1 }).addTo(map);
            L.marker(midPoint).addTo(map).bindPopup(`Distancia: ${distancia.toFixed(2)} km`).openPopup();
        }
    }
});