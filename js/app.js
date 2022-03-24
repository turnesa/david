
let datos= document.getElementById("datos");
let idiomas= document.getElementById("idiomas");
let aficiones  = document.getElementById("aficiones");
let contacto  = document.getElementById("contacto");
let carousel = document.getElementById("carousel");
let btn_oscuro = document.getElementById("btn_oscuro");
let imagen = document.getElementById("imagen");
let parrafo1 = document.querySelector(".para1");
let parrafo2 = document.querySelector(".para2");
let parrafo3 = document.querySelector(".para3");




datos.addEventListener("click",show);
idiomas.addEventListener("click",showartDos);
btn_oscuro.addEventListener("click",oscuro);
aficiones.addEventListener("click",showartTres);
contacto.addEventListener("click",showartCuatro);


function oscuro(){
             document.getElementById("body").classList.toggle ("oscuro");
             datos.classList.toggle ("oscuro");
             idiomas.classList.toggle ("oscuro");
             aficiones.classList.toggle ("oscuro");
             contacto.classList.toggle("oscuro");
             parrafo1.classList.toggle("oscuro");
             parrafo2.classList.toggle("oscuro");
             parrafo3.classList.toggle("oscuro");
          

}


function show (){
         document.getElementById("divoculto").classList.toggle( "visible");
         imagen.className ="oculto";
         document.getElementById("artdos").className = "oculto";
         document.getElementById("artuno").className ="visible";
         document.getElementById("divoculto1").className ="oculto";
         document.getElementById("arttres").className = "oculto";
         document.getElementById("divoculto2").className = "oculto";
         document.getElementById("artcuatro").className = "oculto";
         document.getElementById("divoculto3").className = "oculto";
   

         if(document.getElementById("divoculto").classList.toggle( "oculto")){
            imagen.className ="visible";
         }else{
            imagen.className ="oculto";

         }
        }


function showartDos(){
        document.getElementById("divoculto1").classList.toggle("visible");
        imagen.className ="oculto";
        document.getElementById("divoculto").className ="oculto";
        document.getElementById("artuno").className = "oculto";
        document.getElementById("artdos").className = "visible";
        document.getElementById("arttres").className = "oculto";
        document.getElementById("divoculto2").className = "oculto";
        document.getElementById("artcuatro").className = "oculto";
        document.getElementById("divoculto3").className = "oculto";
  

        
        if(document.getElementById("divoculto1").classList.toggle( "oculto")){
         imagen.className ="visible";
      }else{
         imagen.className ="oculto";

      }
      

      
}


function showartTres(){
      document.getElementById("divoculto2").classList.toggle("visible");
      imagen.className ="oculto";
      document.getElementById("divoculto").className = "oculto";
      document.getElementById("divoculto1").className = "oculto";
      document.getElementById("artuno").className = "oculto";
      document.getElementById("arttres").className = "visible";
      document.getElementById("artdos").className = "oculto";
      document.getElementById("artcuatro").className = "oculto";
      document.getElementById("divoculto3").className = "oculto";



      if(document.getElementById("divoculto2").classList.toggle( "oculto")){
         imagen.className ="visible";
      }else{
         imagen.className ="oculto";

      }
      
    
}
function showartCuatro (){
   document.getElementById("divoculto3").classList.toggle("visible");
   imagen.className ="oculto";
   document.getElementById("divoculto").className = "oculto";
   document.getElementById("divoculto1").className = "oculto";
   document.getElementById("artuno").className = "oculto";
   document.getElementById("arttres").className = "oculto";
   document.getElementById("artdos").className = "oculto";
   document.getElementById("divoculto2").className = "oculto";
   document.getElementById("artcuatro").className = "visible";

   if(document.getElementById("divoculto3").classList.toggle( "oculto")){
      imagen.className ="visible";
   }else{
      imagen.className ="oculto";

   }




}





    
