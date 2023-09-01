document.getElementById("headId").innerText = 'Javascript=Delete Data all Array';
var obj = {
    username: ["Steve Roger", "Tony Stark", "Stephen Strange", "Peter Parker", "Peter Quill"]
}
for (let users of obj.username) {
    var trow = document.createElement("tr");
    var list = document.createElement("td");
    var list2 = document.createElement("td");
    var tableId = document.getElementById("tableId");
    list.innerHTML = users;
    list2.innerHTML = `<td><button onclick='removechild()' class ="bg-danger text-white" id="buttonId">Remove</button></td>`;
    trow.appendChild(list);
    trow.appendChild(list2);
    tableId.appendChild(trow);

}
function removechild() { 
    let i;
switch(obj.username[i]){
    case obj.username[i]:
        alert("You remove "+obj.username[0]);
        break;
    default:
        alert("invalid");
}
i++;
}