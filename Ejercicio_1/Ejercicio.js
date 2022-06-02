const CANTIDAD_MAXIMA = 7;

let vipCambiado = "por def";

for (let i = 1; i <= CANTIDAD_MAXIMA; i++){
    document.querySelector("#cantidad_seleccionada").innerHTML+=`
    <option id="Op${i}"> OPCION ${i} </option>
    `;
}

function cambiar(){
    console.log(vipCambiado)   
    if (vipCambiado != "por def"){
       document.querySelector(`#Op${vipCambiado}`).innerHTML= `
       OPCION ${vipCambiado}
       `;
    }
    vipCambiado = document.querySelector("#convertir_vip").value;
    document.querySelector(`#Op${vipCambiado}`).innerHTML+= `
    VIP 
    `;
}
