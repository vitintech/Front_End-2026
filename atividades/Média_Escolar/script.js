const botao =
    document.getElementById("btnCalcular");

botao.addEventListener("click", function () {

    const nome = document.getElementById("nome").value;

    const nota1 = Number(document.getElementById("nota1").value);

    const nota2 = Number(document.getElementById("nota2").value);

    const nota3 = Number(document.getElementById("nota3").value);

    const media = (nota1 + nota2 + nota3) / 3;

    const mediaFormatada = media.toFixed(2);

    const resultado = document.getElementById("resultado");

    if (media >= 7) {

        resultado.innerHTML = `${nome} foi APROVADO com média ${mediaFormatada}`;

        resultado.style.color = "blue";

    } else if (media >= 4) {

        const falta = (10 - media).toFixed(2);

        resultado.innerHTML = `${nome} está em EXAME.
             Faltam ${falta} pontos para atingir 10.`;

        resultado.style.color = "green";

    } else {

        resultado.innerHTML = `${nome} foi REPROVADO com média ${mediaFormatada}`;

        resultado.style.color = "red";
    }
});