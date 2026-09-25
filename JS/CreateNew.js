let CreateNewElement = document.createElement("p");
let CreateNewText = document.createTextNode("This is text !");

CreateNewElement.appendChild(CreateNewText);

document.getElementById("title").appendChild(CreateNewText);
let NewComment = document.createComment("This is comment");
console.log(CreateNewElement);
console.log(CreateNewText);
console.log(NewComment);