window.onload = () => {


    document.getElementById('btn').onclick = () => {
        let id_usuario = document.getElementById('id_usuario').value;
        mostrarVehiculos(id_usuario)
    }
} 

function mostrarVehiculos(id_usuario){
        
        fetch(`http://localhost:3000/vehiclesId?id=${id_usuario}`,{
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
                        let texto = document.createTextNode(`${camposInternos.toUpperCase()} : ${campos[camposInternos]}`)
                        p.appendChild(texto)
                        article.appendChild(p)
                }
                let btn = document.createElement('input')
                        btn.type = 'button'
                        btn.className = 'buttonCard'
                        btn.value = 'Ver Servicios'
                        article.appendChild(btn)
                document.querySelector('#container').appendChild(article)
            }
        })
    }