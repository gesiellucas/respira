let tempo = 0;
let interval;

interval = setInterval(()=>{
    tempo++
    console.log(tempo)
}, 1000)

setTimeout(()=>{
    clearInterval(interval)
    console.log("<h1>"+tempo+"</h1>")
}, 6000);

