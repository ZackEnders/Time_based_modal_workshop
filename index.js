let modal = document.getElementById('modal')
let close = document.getElementById('close')
let modalOverlay = document.getElementById('modal-overlay')


close.addEventListener("click", function() {
 	modal.style.display = "none"
 	modalOverlay.style.display = "none"
});

setTimeout(function(){
	modal.style.display = "block"
	modalOverlay.style.display = "block"
}, 3000)


