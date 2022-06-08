function menuShow() {
	document.getElementById("Galeri").classList.toggle("Galeri");
}
function menuClose() {
	document.getElementById("Galeri").classList.remove("Galeri");
}

function menuShow() {
	document.getElementById("Pesan").classList.toggle("Pesan");
}
function menuClose() {
	document.getElementById("Pesan").classList.remove("Pesan");
}

var couter = 1;
setInterval(function(){
	document.getElementById('radio' + couter).checked = true;
	counter++
});