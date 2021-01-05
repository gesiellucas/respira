let ar = document.getElementById("ar")

let tempo = 0;
let intervalo;
let intervaloTempo;



function respirador(){

    let tempoTotal = +document.getElementById("tempoTotal").value * 1000;
    let tempoRespira = +document.getElementById("tempoRespira").value * 1000;
    let tempoPrenda = +document.getElementById("tempoPrenda").value * 1000;
    let tempoSolte = +document.getElementById("tempoSolte").value * 1000;
    let tempoAguarde = +document.getElementById("tempoAguarde").value * 1000;
    

    intervalo = setInterval( ()=>{
        tempo++
        console.log(tempo)
    }, 1000)

    setTimeout(()=>{
        clearInterval(intervalo);
        clearTimeout(intervaloTempo);
        console.log("Você chegou ao fim");
    }, tempoTotal)

    tempo1()

        
    function tempo1(){
        document.getElementById("demo").innerHTML = "Respire"

        ar.animate([
            {background: '#DAF3FF', height: 0, offset:0},
            {background: '#5D99AE', height: '100%', offset:1}
        ], {
            duration: tempoRespira,
            iterations: 1,
            direction: 'alternate'
        })

        intervaloTempo = setTimeout(()=>{
            tempo2()
            
        }, tempoRespira)
    }

    function tempo2(){
        document.getElementById("demo").innerHTML = "Segura"

        ar.animate([
            {background: '#5D99AE', height: '100%', offset:0},
            {background: '#DAF3FF', height: '100%', offset:1}
        ], {
            duration: tempoPrenda,
            iterations: 1,
            direction: 'alternate'
        })

        intervaloTempo = setTimeout(()=>{
            
            tempo3()
        }, tempoPrenda)
    }

    function tempo3(){
        document.getElementById("demo").innerHTML = "Solte"

        ar.animate([
            {background: '#DAF3FF', height: '100%', offset:0},
            {background: '#5D99AE', height: 0, offset:1}
        ], {
            duration: tempoSolte,
            iterations: 1,
            direction: 'alternate'
        })
        intervaloTempo = setTimeout(()=>{
            
            tempo4()
        }, tempoSolte)
    }

    function tempo4(){
        document.getElementById("demo").innerHTML = "Prenda"
        
        ar.animate([
            {background: '#5D99AE', height: 0, offset:0},
            {background: '#DAF3FF', height: 0, offset:1}
        ], {
            duration: tempoAguarde,
            iterations: 1,
            direction: 'alternate'
        })
        
        intervaloTempo = setTimeout(()=>{
            
            tempo1()
        }, tempoAguarde)
    }
}


function fecharPreAjuste(){
    let inicioFecha = document.getElementById("inicio")
    inicioFecha.style.display = 'none';

    let inicio = document.getElementById("principal")
    inicio.style.display = 'inline-block'; 
}
