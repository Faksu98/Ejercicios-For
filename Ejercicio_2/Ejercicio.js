let i = "por def";
let opcionFinal = "por def";

function crear(){
    if ((i != "por def") && (opcionFinal != "por def")){
        document.querySelector(`#opciones_generadas`).innerHTML= ``;
     }
    i = document.querySelector("#opcion_inicio").value;
    opcionFinal = document.querySelector("#opcion_final").value;
    for ( i ; i <= opcionFinal; i++){
        document.querySelector("#opciones_generadas").innerHTML+=`
        <option id="Op${i}"> OPCION ${i} </option>
        `;
    }
}