const listaSpesa=["pane","latte","pomodori","carote","salmone"];
const outListaEl=document.querySelector(".output-lista");

const listElements=[];
let i=0;
while(i<listaSpesa.length){
    const liEl=document.createElement("li");
    liEl.append(`${listaSpesa[i]}`);
    outListaEl.append(liEl)
    listElements.push(liEl);
    // outListaEl.innerHTML+=`<li>${listaSpesa[i]}</li>`;
    liEl.addEventListener("click",function(){
        liEl.classList.toggle("checked");

    })

    i++;
}

