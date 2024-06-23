
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let adress = document.getElementById("adress");
let order = document.getElementById("order");
function submit() {
    let FnameVal = fname.value;
    let lnameVal = lname.value;
    let AdressPlace = adress.value;
    if (FnameVal && lnameVal && AdressPlace) {
        order.innerHTML += (`<b>First Name: </b> ${FnameVal}<br><b>last Name: </b> ${lnameVal}<br> <b>Adress: </b> ${AdressPlace} <br><br>`);
        fname.value = ""
        lname.value = ""
        adress.value = ""
    }
    else {
    }

}