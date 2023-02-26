first=document.getElementById("first");
second=document.getElementById("second");
console.log(first);
console.log(second);

document.getElementById("btn");
body=document.getElementsByTagName("body");

 cont=document.getElementsByClassName("cont");
// a=cont[0].innerText;
// console.log(a);

btn.addEventListener('click',function(){

    console.log("button clicked");
    a=first.value;
    b=second.value;
    c=parseInt(a,10);
    d=parseInt(b,10);
    
    console.log(c+d);
    cont[0].innerText=c+d; 

})
                                       
