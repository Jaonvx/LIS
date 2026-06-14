const btnNao = document.getElementById("nao");
const btnSim = document.getElementById("sim");
const resposta = document.getElementById("resposta");

btnNao.addEventListener("mouseover", () => {
    const largura = window.innerWidth - btnNao.offsetWidth;
    const altura = window.innerHeight - btnNao.offsetHeight;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    btnNao.style.position = "absolute";
    btnNao.style.left = `${x}px`;
    btnNao.style.top = `${y}px`;
});

btnSim.addEventListener("click", () => {
    resposta.innerHTML = "❤️ Boa Resposta! ❤️";
});