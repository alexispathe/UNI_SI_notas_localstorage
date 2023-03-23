const boton = document.getElementById('boton');
boton.addEventListener('click', ()=>{
    const areaTexto = document.getElementById('texto');
    const notas = localStorage.getItem("notas");
    if(notas == null){
        arreglo = [];
     }else{
        arreglo = JSON.parse(notas);
        console.log(arreglo)
    }
    arreglo.push(areaTexto.value);
    console.log("arreglo", arreglo)
    localStorage.setItem('notas', JSON.stringify(arreglo))
});