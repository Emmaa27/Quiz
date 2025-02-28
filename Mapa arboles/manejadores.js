document.getElementById("centroid").addEventListener('click', function(){
    console.log("Vamos a calcular los centroides...");
    detectCentroids();
})

document.getElementById("areas").addEventListener('click',
    function(){
        console.log("Vamos a calcular áreas");
        calculateAreas();
    }
)