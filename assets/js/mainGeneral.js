window.onload = () => {

    fetch('http://localhost:3000/users',{
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        .then( result => result.json())
        .then(data => {
            for(let campos of data){
                let article = document.createElement('article')
                article.className = 'cardUsu'
                for(let camposInternos in campos){
                    let p = document.createElement('p')

                    console.log(campos[camposInternos]+"\n hola");                    
                }
            }
        })

}

// for(let camposInternos in campos){
//     console.log(campos[camposInternos]);
//     texto = `
//         <article class="cardUsu">
//             <p>Id Usuario: ${camposInternos.id_usuario}<p>
//             <p>Nombre: ${camposInternos.nombre}<p>
//             <p>Apellidos: ${camposInternos.apellidos}<p>
//             <p>DNI: ${camposInternos.dni}<p>
//             <p>Teléfono: ${camposInternos.telefono}<p>
//             <p>Email: ${camposInternos.email}<p>
//             <p>Id_Admin: ${camposInternos.id_admin}<p>
//             <input class="buttonCard" type="button" value="Ver Vehiculos">
//         <article>
//     `
//     document.querySelector('#container').innerHTML = texto
// }