const botao =
    document.getElementById("btnCalcular");

botao.addEventListener("click", function () {

    const bandeira =
        document.getElementById("bandeira").value;

    const valor =
        Number(document.getElementById("valor").value);

    const parcelas =
        Number(document.getElementById("parcelas").value);

    let taxaBandeira = 0;

    switch (bandeira) {

        case "visa":
            taxaBandeira = 0.02;
            break;

        case "master":
            taxaBandeira = 0.0185;
            break;

        case "elo":
            taxaBandeira = 0.03;
            break;
    }

    const valorTaxa =
        valor * taxaBandeira;

    const juros =
        valor * (0.015 * parcelas);

    const taxaMensal =
        12.5 * parcelas;

    const valorTotal =
        valor +
        valorTaxa +
        juros +
        taxaMensal;

    const valorParcela =
        valorTotal / parcelas;

    const resultado =
        document.getElementById("resultado");

    resultado.innerHTML = `

        <p>
            Taxa da bandeira:
            R$ ${valorTaxa.toFixed(2)}
        </p>

        <p>
            Juros:
            R$ ${juros.toFixed(2)}
        </p>

        <p>
            Taxa mensal:
            R$ ${taxaMensal.toFixed(2)}
        </p>

        <p>
            Valor total:
            R$ ${valorTotal.toFixed(2)}
        </p>

        <p>
            Parcelas de:
            R$ ${valorParcela.toFixed(2)}
        </p>
    `;
});