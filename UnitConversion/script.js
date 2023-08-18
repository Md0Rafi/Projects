document.getElementById("temp").onclick = function() {
    var c = document.getElementById("c").value;
    var z = c * 9/5 + 32;
    document.getElementById("f").innerHTML = z
}

document.getElementById("kilo").onclick = function() {
    var k = document.getElementById("k").value;
    var z = k * 2.205;
    document.getElementById("p").innerHTML = z
}

document.getElementById("dis").onclick = function() {
    var k = document.getElementById("d").value;
    var z = k / 1.609344;
    document.getElementById("m").innerHTML = z
}