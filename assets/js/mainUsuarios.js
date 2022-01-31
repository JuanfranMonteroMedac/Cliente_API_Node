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
                    if (camposInternos != 'contrasena') {
                        let p = document.createElement('p')
                        let texto = document.createTextNode(`${camposInternos.toUpperCase()} : ${campos[camposInternos]}`)
                        p.appendChild(texto)
                        article.appendChild(p)
                    }
                }
                let btnEditar = document.createElement('input')
                    btnEditar.type = 'button'
                    btnEditar.className = 'buttonCardEdit'
                    btnEditar.value = 'Editar Usuario'
                article.appendChild(btnEditar)
                let btn = document.createElement('input')
                    btn.type = 'button'
                    btn.className = 'buttonCardVhc'
                    btn.value = 'Ver Vehiculos'
                article.appendChild(btn)
                let btnDelete = document.createElement('input')
                    btnDelete.type = 'button'
                    btnDelete.className = 'buttonCardDelete'
                    btnDelete.value = 'Eliminar Usuario'
                article.appendChild(btnDelete)
                document.querySelector('#container').appendChild(article)
            }
        })

    // LLAMADAS EN EL MENÚ
    document.querySelector('#usuarios').addEventListener('click', () => {
        mostarUsuarios()
    })


    document.getElementById('aniadirUsuario').addEventListener('click', (e) => {
        e.stopPropagation()
        document.getElementById('datosUsuarios').style.display = 'inline-flex'
        document.querySelector('#datosUsuarios input[type="button"]').onclick = () => {
            document.getElementById('datosUsuarios').style.display = 'none'
            alert('Usuario Añadido con Exito (Mentira....)')
        }
    })

}

function mostarUsuarios(){

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
                if (camposInternos != 'contrasena') {
                    let p = document.createElement('p')
                    let texto = document.createTextNode(`${camposInternos.toUpperCase()} : ${campos[camposInternos]}`)
                    p.appendChild(texto)
                    article.appendChild(p)
                }
            }
            let btn = document.createElement('input')
                    btn.type = 'button'
                    btn.className = 'buttonCard'
                    btn.value = 'Ver Vehiculos'
                    article.appendChild(btn)
            document.querySelector('#container').appendChild(article)
        }
    })
}
