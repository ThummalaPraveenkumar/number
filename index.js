var a = Math.floor(Math.random()*100+1);
var c=0;var d=0;
add=()=>{
   var b =parseInt(document.getElementById("n1").value);
   c=c+1;
   if(b>a)
   {
   document.getElementById("result").textContent=("the number is smaller than yours");
   } 
   else if(b<a)
   {
   document.getElementById("result").textContent=("the number is greater  than yours");  
   }
   else if(a==b)
   {
   
   d=d+1;
   
   if(d==1){
      document.getElementById("result").textContent=("CONGRATULATIONS! you guessed the right number you have tried "+c+"times");
   }
   }
     
}