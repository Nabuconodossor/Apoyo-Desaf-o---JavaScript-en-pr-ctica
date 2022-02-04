const valor1 = document.getElementById("valor1")
const valor2 = document.getElementById("valor2")
const   resultado = document.querySelector(".resultado")
const sumar1=  document.getElementById("btn-sumar")
const restar2=  document.getElementById("btn-restar")



sumar1.addEventListener("click", ()=>{


    resultado.innerText = parseInt(valor1.value) + parseInt(valor2.value)


} );

restar2.addEventListener("click",()=>{

        let  resta = parseInt(valor1.value) - parseInt(valor2.value)

     if( resta < 0) {
        console.log("esta resta no aplica");
        resultado.innerText = 0
        
     } else {

        resultado.innerText = resta
     }
})