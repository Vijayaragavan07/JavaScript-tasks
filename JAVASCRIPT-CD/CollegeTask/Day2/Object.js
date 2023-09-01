let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};
document.getElementById("imgId").src = recipeObj.imgSrc;
document.getElementById("titleId").innerText = recipeObj.title;
for (let listel of recipeObj.ingredients){
    var list = document.createElement("li");
    var ul = document.getElementById("ulId");
    list.innerText = listel;
    ul.appendChild(list);
}
