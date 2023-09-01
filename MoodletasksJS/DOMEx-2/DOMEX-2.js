
    var idVariable = document.getElementById("id1");
    //div tag creation..
    var divElement = document.createElement("div");
    //h1, inputBox, button tag creation..
    var headElement = document.createElement("h1");
    var inputBox = document.createElement("input")
    var buttonVariable = document.createElement("button");
    buttonVariable.className = "m-3 bg-info text-white fs-5"
    var buttonValue = document.createTextNode("Add");
    //using appendChild method to add created tag into div tag.. 
    divElement.appendChild(headElement);
    divElement.appendChild(inputBox);
    divElement.appendChild(buttonVariable);
    buttonVariable.appendChild(buttonValue);
    //create textnode in javascript..
    var textElement = document.createTextNode("Add To Cart");
    //using appendChild method to add created content into h1 tag.. 
    headElement.appendChild(textElement);
    //create h5, textelement2 
    var headElement2 = document.createElement("h5");
    var textElement2 = document.createTextNode("My Cart Items");
    //using appendChild method to add created content into h5 tag.. 
    headElement2.appendChild(textElement2);
    //using appendChild method to add created tag into div tag.. 
    divElement.appendChild(headElement2);
    //using appendChild method to add div tag into body of the html page.. 
    document.body.appendChild(divElement, idVariable);

buttonVariable.addEventListener("click", () => {
    var unlist = document.createElement("ul");
    var listElement = document.createElement("li");
    listElement.textContent = inputBox.value;
    unlist.appendChild(listElement);
    divElement.appendChild(unlist);
    inputBox.value = '';
})


