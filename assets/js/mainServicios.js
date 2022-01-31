window.onload = () => {

    document.getElementById('btn').onclick = () => {
        const section = document.getElementById('container')
        while(section.firstChild){
            section.removeChild(section.firstChild)
        }
        let id_matricula = document.getElementById('id_matricula').value;
        mostrarVehiculos(id_matricula)
    }
} 

function mostrarVehiculos(id){
        
        fetch(`http://localhost:3000/serviceVehicle?id_matricula=${id}`,{
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
                        btn.className = 'buttonCardEdit'
                        btn.value = 'Editar Servicio'
                article.appendChild(btn)
                let btnDel = document.createElement('input')
                    btnDel.type = 'button'
                    btnDel.className = 'buttonCardDelete'
                    btnDel.value = 'Eliminar Servicio'
                article.appendChild(btnDel)
                document.querySelector('#container').appendChild(article)
            }
        })
    }