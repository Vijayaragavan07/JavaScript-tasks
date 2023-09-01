var tShirt = {
    Product_name: ["Shirt", "T-shirts", "Chudi", "Pattiala", "Pant"],
    Quantity: [30, 50, 60, 43, 67],
    imgsrc: ["https://th.bing.com/th/id/OIP.mgZZwEJz3P-gcV2Oegp-DAHaHa?pid=ImgDet&rs=1", "https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product.jpg", "https://th.bing.com/th/id/R.dd40687c058936c7c2493025e9ebbf21?rik=xwKlD7ca0geu4w&riu=http%3a%2f%2f4.bp.blogspot.com%2f-5rLbQE9ID_8%2fTfyEzuDiECI%2fAAAAAAAAABE%2f_uKC_Vty5GI%2fw1200-h630-p-k-no-nu%2fAnarkali-Churidaar-ms-426.jpg&ehk=l6Fsq76KCzqcsjJjzjMZOpD5RIjWkJnYb67s7lTQEPg%3d&risl=&pid=ImgRaw&r=0", "https://th.bing.com/th/id/R.7487be2cefd9c1eb3b64265865644947?rik=Bfy4XWKf8N5QEQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-BNQTzwxjAFY%2fUvFJPPQELKI%2fAAAAAAAAP1s%2fzb9bWN5akyg%2fs1600%2fPatiala%2bTrouser-She9.blogspot.com%2b3.jpg&ehk=GLRkJR53NzbW0qpjbvxXMdGRU%2fMz376WysoGxVVzAis%3d&risl=&pid=ImgRaw&r=0", "https://i5.walmartimages.com/asr/adda0cef-7c61-4456-b295-06567c95d50f_1.e3bf9638820ac63999dce722eb5d55c6.jpeg"],
    Price: [500, 300, 350, 300, 550]
}
var emptystr = "";
tShirt.Product_name.forEach(function (value, index) {
    emptystr += "<tr><td>" + value + "</td></tr>";
    document.getElementById("tableId").innerHTML = emptystr;
})
var emptystr2 = document.getElementById("tableId");
tShirt.Quantity.forEach(function (value, index) {
    emptystr2 += "<tr><td></td><td>" + value + "</td></tr>";
    document.getElementById("tableId").innerHTML = emptystr2;
})

