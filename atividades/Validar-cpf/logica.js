function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");

    if (cpf.length != 11) {
        return false;
    }

    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }

        let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * (10 - i);
    }

    let resto = soma % 11;

    let digito1;

    if (resto < 2) {
        digito1 = 0;

    } else {
        digito1 = 11 - resto;
    }

    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * (11 - i);
    }

    resto = soma % 11;

    let digito2;

    if (resto < 2) {
        digito2 = 0;

    } else {
        digito2 = 11 - resto;
    }

    if (digito1 == cpf[9] && digito2 == cpf[10]) {
        return true;
    }

    return false;
}

const botao = document.getElementById("btnValidar");

botao.addEventListener("click", function() {
    const cpf = document.getElementById("cpf").value;
    const resultado = document.getElementById("resultado");

    if (validarCPF(cpf)) {
        resultado.textContent = "CPF valido";
        resultado.style.color = "green";
        
    } else {
        resultado.textContent = "CPF invalido";
        resultado.style.color = "red";
    }
});