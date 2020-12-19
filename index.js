let ar = document.getElementById("ar")

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
        document.getElementById("demo").innerHTML = "Respire"

        ar.animate([
            {background: '#DAF3FF', height: 0, offset:0},
            {background: '#5D99AE', height: '100%', offset:1}
        ], {
            duration: x,
            iterations: 1,
            direction: 'alternate'
        })

        intervaloTempo = setTimeout(()=>{
            tempo2()
            
        }, x)
    }

    function tempo2(){
        document.getElementById("demo").innerHTML = "Segura"

        ar.animate([
            {background: '#5D99AE', height: '100%', offset:0},
            {background: '#DAF3FF', height: '100%', offset:1}
        ], {
            duration: y,
            iterations: 1,
            direction: 'alternate'
        })

        intervaloTempo = setTimeout(()=>{
            
            tempo3()
        }, y)
    }

    function tempo3(){
        document.getElementById("demo").innerHTML = "Solte"

        ar.animate([
            {background: '#DAF3FF', height: '100%', offset:0},
            {background: '#5D99AE', height: 0, offset:1}
        ], {
            duration: x,
            iterations: 1,
            direction: 'alternate'
        })
        intervaloTempo = setTimeout(()=>{
            
            tempo4()
        }, z)
    }

    function tempo4(){
        document.getElementById("demo").innerHTML = "Prenda"
        
        ar.animate([
            {background: '#5D99AE', height: 0, offset:0},
            {background: '#DAF3FF', height: 0, offset:1}
        ], {
            duration: x,
            iterations: 1,
            direction: 'alternate'
        })
        
        intervaloTempo = setTimeout(()=>{
            
            tempo1()
        }, q)
    }
}









