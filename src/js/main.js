// Gerador de partículas
const containerFundo = document.getElementById("fundo-animado");
const quantidadeParticulas = 20;

for (let i = 0; i < quantidadeParticulas; i++) {
    const particula = document.createElement("div");
    particula.classList.add("particula");

    const tamanho = Math.random() * 10 + 6;
    particula.style.width = `${tamanho}px`;
    particula.style.height = `${tamanho}px`;

    particula.style.left = `${Math.random() * 100}vw`;

    const duracao = Math.random() * 10 + 8;
    const atraso = Math.random() * 5;

    particula.style.animationDuration = `${duracao}s`;
    particula.style.animationDelay = `${atraso}s`

    // Insere a partícula dentro da div de fundo
    containerFundo.appendChild(particula);
}

// Efeito de Digitação (Typewriter)
const textoElemento = document.getElementById("texto");
const frase = "Criadora de Soluções! Conecta ideias e transforma possibilidades em realidade.🍎💡";
let index = 0;

function digitarFrase() {
    if (index < frase.length) {
        textoElemento.textContent += frase.charAt(index);
        index++;
        setTimeout(digitarFrase, 45);// Velocidade de cada letra
        
    }
}

// Inicia o efeito de digitação
setTimeout(digitarFrase, 400);
