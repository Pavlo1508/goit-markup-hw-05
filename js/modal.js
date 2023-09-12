document.getElementById("modal-open-btn").addEventListener("click", function () {
	document.getElementById("modal-order").classList.add("open")
})

document.getElementById("modal-close-order-btn").addEventListener("click", function () {
	document.getElementById("modal-order").classList.remove("open")
})