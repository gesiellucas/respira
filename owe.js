let tempo = 0;
let intervalo;
let intervaloTempo;

function respirador(x, y, z, q, tempoTotal){
    this.x = x;
    this.y = y;
    this.z = z;
    this.q = q;
    this.tempoTotal = tempoTotal;

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
        console.log("Respira")
        intervaloTempo = setTimeout(()=>{
            tempo2()
        }, x)
    }

    function tempo2(){
        console.log("Segura")
        intervaloTempo = setTimeout(()=>{
            
            tempo3()
        }, y)
    }

    function tempo3(){
        console.log("Expira")
        intervaloTempo = setTimeout(()=>{
            
            tempo4()
        }, z)
    }

    function tempo4(){
        console.log("Aguarde")
        intervaloTempo = setTimeout(()=>{
            
            tempo1()
        }, q)
    }
}

