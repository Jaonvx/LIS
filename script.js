const btnSim = document.getElementById("sim");
const btnNao = document.getElementById("nao");
const resposta = document.getElementById("resposta");

btnSim.addEventListener("mouseover", () => {
    const largura = window.innerWidth - btnSim.offsetWidth;
    const altura = window.innerHeight - btnSim.offsetHeight;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    btnSim.style.position = "absolute";
    btnSim.style.left = `${x}px`;
    btnSim.style.top = `${y}px`;
});

btnNao.addEventListener("click", () => {
    resposta.innerHTML = "BOA LIS";
});
