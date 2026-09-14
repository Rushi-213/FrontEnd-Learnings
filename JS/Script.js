document.write("hello veriable" + "<br>");
var a="hello var variable";
 a=50;
document.write(a + "<br>");

let b="Hello let veribale";
//let b=40;
document.write(b + "<br>");

const c="hello const variable";
//const c
document.write(c +"<br>");




//Data types

var str;
document.write(typeof (str) + "<br>");

var str = "Hello string";
document.write(typeof (str) + "<br>");

var str = 12;
document.write(typeof (str) + "<br>");

var str = true;
document.write(typeof (str) + "<br>");

var str = ["Hello string",12,true];
document.write(typeof (str) + "<br>");



//operators

var x=20;
var y=10;

document.write("addition is :" + (x + y) + "<br>");
document.write("Subtraction is :"+(x-y) + "<br>");
document.write("Multiplication is :" + (x*y) + "<br>");
document.write("Division is:" + (x/y) + "<br>");
document.write("Modulas is :" + (x%y) + "<br>");
document.write("Comparation equal is :" + (x==y) + "<br>");
document.write(" Both data and type are equal :" + (x === y) + "<br>");
document.write("X is greater than Y :" + (x>y) + "<br>");
document.write("X is smaller than Y :" + (x < y) + "<br>");
document.write("X is greater or equal to Y :" + (x >= y) + "<br>");
document.write("X is smaller or equal to Y :" + (x<=y) + "<br>");
document.write("Both data and type are not equal :" + (x !== y) + "<br>");
document.write("Comparation not equal is :" + (x != y) + "<br>");
document.write("Post increment is :" + (x++) + "<br>");
document.write("Pre increment is :" + (++y) + "<br>");
document.write("Exponantial is :" + (x ** y) + "<br>");





//conditional statement

var age=70
if(age>18){
    document.write("You are eligible" + "<br>");
}
else{
    document.write("You are not eligible" + "<br>")
}


if (age < 60) {
    if (age > 18) {
        document.write("You are eligible" + "<br>");
    }
    else {
        document.write("You are not eligible" + "<br>")
    }
}
else {
    if (age < 60) {
        document.write("You are eligible" + "<br>");
    }
    else {
        document.write("You are not eligible" + "<br>")
    }
}


if ((age > 18)&&(age<60)) {
    document.write("You are eligible" + "<br>");
}
else if (age < 18) {
    document.write("You are under age" + "<br>");
}
else {
    document.write("You are older" + "<br>")
}




// Loops

for(i=0;i<10;i++){
    document.write(i+"\t")
}
document.write("<br>")

for (i = 0; i < 3; i++) {
    for (j = 0;j < 3; j++) {
        document.write("["+i+"]["+j+"]" + "\t")
    }
    document.write("<br>")
}
document.write("<br>")

var i = 0;
while(i<10) {
    document.write(i + "\t")
    i++;
}
document.write("<br>")

var i = 0;
do {
    document.write(i + "\t")
    i++;
}
while (i < 10)
document.write("<br>")