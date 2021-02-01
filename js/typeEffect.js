function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach(function(letra, i){
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 75 * i)
    })
}

const titulo = document.getElementById("type");

typeWriter(titulo);

