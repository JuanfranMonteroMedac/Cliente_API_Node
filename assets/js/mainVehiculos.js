window.onload = () => {

    document.getElementById('btn').onclick = () => {
        const section = document.getElementById('container')
        while(section.firstChild){
            section.removeChild(section.firstChild)
        }
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
                        let texto = ''
                        if(camposInternos != 'año')  texto = document.createTextNode(`${camposInternos.toUpperCase()} : ${campos[camposInternos]}`)
                        else{
                            let fecha = new Date (campos[camposInternos]);
                            texto = document.createTextNode(`${camposInternos.toUpperCase()} : ${fecha.toDateString()}`)
                        }
                        p.appendChild(texto)
                        article.appendChild(p)
                }
                let btn = document.createElement('input')
                        btn.type = 'button'
                        btn.className = 'buttonCardEdit'
                        btn.value = 'Editar Vehiculo'
                article.appendChild(btn)
                let btnServ = document.createElement('input')
                    btnServ.type = 'button'
                    btnServ.className = 'buttonCardVhc'
                    btnServ.value = 'Ver Servicios'
                article.appendChild(btnServ)
                let btnDel = document.createElement('input')
                    btnDel.type = 'button'
                    btnDel.className = 'buttonCardDelete'
                    btnDel.value = 'Elimincar Vehiculo'
                article.appendChild(btnDel)
                document.querySelector('#container').appendChild(article)
            }
        })
    }