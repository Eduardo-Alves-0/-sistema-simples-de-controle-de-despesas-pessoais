let nomeDespesa = '';
let valorDespesa = 0;
let categoriaDespesa = '';
let totalDespesas = 0;

let dinheiroEntrado = prompt("Digite o valor que você possui:");
while (isNaN(Number(dinheiroEntrado)) || Number(dinheiroEntrado) <= 0) {
    alert("O valor deve ser um número maior que 0!");
    dinheiroEntrado = prompt("Digite o valor que você possui:");
}
dinheiroEntrado = Number(dinheiroEntrado);

function inputDespesa() {
    let nome = prompt("Digite o nome da despesa:");
    let valor = prompt("Digite o valor da despesa:");
    let categoria = prompt("Digite a categoria da despesa (Alimentação, Transporte ou Lazer):");
    return { nome, valor, categoria };
}

function validarDespesa(nome, valor, categoria) {
    if (!nome || nome.trim() === '') {
        return { isValid: false, erro: "Nome da despesa é obrigatório!" };
    }
    if (isNaN(Number(valor)) || Number(valor) <= 0) {
        return { isValid: false, erro: "Valor deve ser um número maior que 0!" };
    }
    if (!categoria || categoria.trim() === '' || 
        (categoria.trim() !== "Alimentação" && categoria.trim() !== "Transporte" && categoria.trim() !== "Lazer")) {
        return { isValid: false, erro: "Categoria deve ser Alimentação, Transporte ou Lazer!" };
    }
    return {
        isValid: true,
        dados: {
            nome: nome.trim(),
            valor: Number(valor),
            categoria: categoria.trim()
        }
    };
}

function registrarDespesa() {
    let { nome, valor, categoria } = inputDespesa();
    let { isValid, dados, erro } = validarDespesa(nome, valor, categoria);

    if (isValid) {
        nomeDespesa = dados.nome;
        valorDespesa = dados.valor;
        categoriaDespesa = dados.categoria;
        totalDespesas += dados.valor;
        alert(`Despesa registrada: ${dados.nome}, Valor: ${dados.valor}, Categoria: ${dados.categoria}`);
    } else {
        alert(erro);
    }
}

function consultaTotalDespesas() {
    if (totalDespesas > 0) {
        alert(`Total de despesas: ${totalDespesas}`);
    } else {
        alert("Nenhuma despesa registrada.");
    }
}