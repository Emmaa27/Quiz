function detectCentroids(){

    drawnLayers.forEach(
        function(layer){
            try{
                let centroid = turf.centroid(layer.toGeoJSON());
                L.geoJSON(centroid, {
                    style: {
                        color:"red",
                        fillColor: "green"
                    }
                }).addTo(map);
                console.log(centroid);
            }catch(error){
                console.warn("Error al detectar centroides", error);

            }
        } 
    )
}


function calculateAreas(){

    drawnLayers.forEach(
        function(layer){
            try{
                let area = turf.area(layer.toGeoJSON());
                let centroid= turf.centroid(layer.toGeoJSON());
                x= centroid.geometry.coordinates[1];
                y= centroid.geometry.coordinates[0];
                L.marker([x,y],{
                    icon: L.divIcon(
                        {
                            className: "area_label",
                            html: `${area} m2`
                        }
                    )
                }
                ).addTo(map);
                console.log(area);
            }catch(error){
                console.warn("Hubo un error al calcular el área.")
            }
        }
    )

}