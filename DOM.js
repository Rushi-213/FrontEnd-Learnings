


// how to set targeting DOM objects by HTML

let element1= document.getElementById("header").innerHTML="hypertext Markup Language";
console.log(element1); 
element2 =document.getElementById("header").setAttribute("class","abc");
console.log(element2);
element2 =document.getElementById("header").getAttribute;
console.log(element2);
//element2 =document.getElementsByClassName("list").setAttribute("class","xyz");
//element2 =document.getElementsByClassName("list").getAttribute;
console.log(element2);


// how to change css using DOM objects

let element3 =document.getElementById("header").style.backgroundColor="pink";
console.log(element3);
element3= document.getElementById("header").style.color="red";
console.log(element3);
element3= document.getElementById("header").style.border="5px solid red"
console.log(element3);

//Query Selector or Query Selector all

let element4 = document.querySelector("#header").innerHTML="<h1>Hello Js</h1>";
element4 =document.querySelector("#header").getAttribute("class");
console.log(element4); 
element4 = document.querySelector("#header").setAttribute("class","xyz");
element4 = document.querySelector("#header").getAttribute("class");
console.log(element4); 
element4=document.querySelector(".list");   
console.log(element4); 
element4=document.querySelectorAll(".list");
console.log(element4);
element4=document.querySelector("content h1");
console.log(element4);  
element4=document.querySelector("#content").style.border;
console.log(element4);


//Add event listener

let element5 =document.getElementById("header").onclick=abc;

function abc(){
    element5=document.getElementById("header").style.backgroundColor="blue";
    console.log(element5);
   // element5=document.getElementsByTagName("h1").style.color="green";
    //console.log(element5);
}

element5=document.getElementById("header").addEventListener()

function abc() {
    element5 = document.getElementById("header").style.backgroundColor = "white";
    console.log(element5);
    // element5=document.getElementsByTagName("h1").style.color="green";
    //console.log(element5);
}