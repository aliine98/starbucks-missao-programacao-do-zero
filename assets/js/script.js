function trocaImagem(endereco) {
	const imagem = document.querySelector(".starbucks");
	imagem.src = endereco;
}

function trocaCor(cor) {
	const circulo = document.querySelector(".circulo");
	const texto = document.querySelector(".caixa-texto span");
	const botao = document.querySelector(".caixa-texto button");
	circulo.style.background = cor;
	texto.style.color = cor;
	botao.style.background = cor;
}
