var x=prompt("please enter a number!");

if(x%3==0 && x%5!=0){
   alert("fizz"); 
}  
else if(x%5==0 && x%3!=0) {
    alert("buzz");    
}
else if (x%3==0 && x%5==0) {
    alert("fizzbuzz");
} 
else{
    alert("none");
} 
