const CANTIDAD_MAXIMA = 7;

let cantidadIngresada = "por def";

for (let i = 1; i <= CANTIDAD_MAXIMA; i++){
    document.querySelector("#cantidad_seleccionada").innerHTML+=`
    <option id="Op${i}"> OPCION ${i} </option>
    `;
}

function cambiar(){
    console.log(cantidadIngresada)   
    if (cantidadIngresada != "por def"){
       document.querySelector(`#Op${cantidadIngresada}`).innerHTML= `
       OPCION ${cantidadIngresada}
       `;
    }
    cantidadIngresada = document.querySelector("#convertir_vip").value;
    document.querySelector(`#Op${cantidadIngresada}`).innerHTML+= `
    VIP 
    `;
}
