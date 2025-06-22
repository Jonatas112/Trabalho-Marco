
function adicionarUC() {
    let novaUC = prompt("Digite o nome da nova UC:");
    if (novaUC) {
        let lista = document.getElementById("lista-ucs");
        let item = document.createElement("li");
        item.textContent = novaUC;
        lista.appendChild(item);
    }
}

function validarCPF() {
    let cpf = document.getElementById("cpf").value;
    let padrao = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (!padrao.test(cpf)) {
        alert("CPF inválido! Formato correto: 000.000.000-00");
        document.getElementById("cpf").focus();
    }
}

function validarEmail() {
    let email = document.getElementById("email").value;
    let padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!padrao.test(email)) {
        alert("E-mail inválido! Verifique se está correto.");
        document.getElementById("email").focus();
    }
}

function adicionarDescricao() {
    let texto = document.getElementById("novaDescricao").value;
    if (texto) {
        let area = document.getElementById("descricaoAdicional");
        let paragrafo = document.createElement("p");
        paragrafo.textContent = texto;
        area.appendChild(paragrafo);
        document.getElementById("novaDescricao").value = "";
    }
}
