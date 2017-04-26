
var modal = document.getElementById("modal");
var shadow = document.getElementById("shadow");
var close = document.getElementById("close");

setTimeout(function(){
	modal.style.display = 'inline-flex'; 
	shadow.classList.add("blur");
}, 00);

close.addEventListener("click", function(){

	shadow.classList.add("fadeoutBlur");
	shadow.classList.remove("blur");
	modal.classList.add("fadeout")
});

window.addEventListener("keyup", listenKey);
function listenKey(e) {
	var modal = document.getElementById("modal");
	if (e.keyCode == "27") {
		modal.classList.add("fadeout")
		shadow.classList.add("fadeoutBlur")
		shadow.classList.remove("blur")
	} else if (e.keyCode == "32") {
		modal.style.display = 'inline-flex';
		shadow.classList.add("blur");
	}

}


// window.addEventListener("keypress", checkKeyPressed, false);
 
// function checkKeyPressed(e) {
//     if (e.charCode == "97") {
//         alert("The 'a' key is pressed.");
//     }
// }
