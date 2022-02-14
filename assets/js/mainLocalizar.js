let map

window.onload = () => {

    mapboxgl.accessToken = 'pk.eyJ1IjoiaWNyZW1pbnIiLCJhIjoiY2t6ZTJ2NmczMGRkNjJwcGowc2ltbzhhdSJ9.BvqDNhPK0IVuj5xJUotcHg';
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-3.257869274676083,39.59890461577057],
        zoom: 4
    });

    document.getElementById('btn').onclick = async () => {
    
        let matricula = document.getElementById('matricula').value
        const posiciones = await mostrarLocalizacionVehiculo(matricula)
        mostrarVehiculoMapa(posiciones)
        
    }
} 

async function mostrarLocalizacionVehiculo(matricula){
        
    try {
        const reply = await fetch(`http://localhost:3000/referenceVhc?matricula='${matricula}'`)
        if(reply.status === 200){
            const data = await reply.json()
            const ref = {
                LON: data[0].LON,
                LAT: data[0].LAT
            }
            return ref

        }
    }catch (error) {
        console.log(error);
    }
}

async function mostrarVehiculoMapa(posiciones){

    console.log(posiciones);

    const geo = new mapboxgl.Marker()
    .setLngLat([posiciones.LON, posiciones.LAT])
    .addTo(map);
}