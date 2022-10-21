const botones = document.querySelectorAll("a");

botones.forEach((boton) => {
	boton.addEventListener("click", () => {
		removerClasesActivas();
		boton.classList.add("active");
	});
});

const removerClasesActivas = () => {
	botones.forEach((boton) => {
		boton.classList.remove("active");
	});
};

// desacrivar scroll
document
	.querySelector("body")
	.addEventListener("wheel", preventScroll, { passive: false });

function preventScroll(e) {
	e.preventDefault();
	e.stopPropagation();
	return false;
}
