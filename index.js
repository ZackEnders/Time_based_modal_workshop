let modal = document.getElementById('modal')
let close = document.getElementById('close')


close.addEventListener("click", function() {
 	modal.style.display = "none"
});

setTimeout(function(){
	modal.style.display = "grid"
	// close.style.display = "block"
}, 4000)


