let rightclick = ["back", "Refresh", "Save as", "Print", "Send to your devices", "Create QR code for this page", "read aloud", "Translate to English", "Add Page to collections", "Share", "Web capture", "Get image descriptions from Microsoft", "View page source", "Inspect"]
let fontIcon = [`<i class="fa-solid fa-floppy-disk"></i>`,`<i class="fa-solid fa-download"></i>`];
function fun() {
    let emptystr ='';
    var paraId = document.getElementById("paraId");
    rightclick.forEach(function(value,index){
        emptystr += value+"<br>"; 
    })
    paraId.innerHTML =`<div class="card shadow-lg p-3 w-25 bg-color ms-5">${emptystr}</div>`;
}
function icons(){
    let iconstr = '';
    fontIcon.forEach(function(value,index){
        iconstr += value+"<br>";
    })
    document.getElementById("paraId").innerHTML = iconstr;
}







// `<div class='card w-25 bg-light p-3 shadow-lg rounded'><p><i class="fa-solid fa-arrow-left"></i> back
//  <br><i class="fa-solid fa-rotate-right"></i> Refresh
//  <br>Open in new tab
//  <br> Save as
//  <br> Print
//  <br><i class="fa-solid fa-laptop"></i> Send to your devices
//  <br><i class="fa-solid fa-qrcode"></i> Create QR code for this page
//  <br><i class="fa-solid fa-bullhorn"></i> Read aloud
//  <br><i class="fa-solid fa-language"></i> Translate to English
//  <br>Add page to collections
//  <br>Share
//  <br>Web Capture
//  <br>Get image descriptions from Microsoft
//  <br>View page source
//  <br>Inspect</p></div>`