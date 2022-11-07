const listaSpesa=["pane","latte","pomodori","carote","salmone"];
const outListaEl=document.querySelector(".output-lista");
console.log(outListaEl)

let i=0;
while(i<listaSpesa.length){
    console.log(listaSpesa[i]);

    outListaEl.innerHTML+=`<li>${listaSpesa[i]}</li>`;
    i++;
}