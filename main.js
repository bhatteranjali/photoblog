window.onload = function () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yy = today.getFullYear();
    today = dd + "/" + mm + "/" + yy;
    document.getElementById("date").innerHTML = today;
}
