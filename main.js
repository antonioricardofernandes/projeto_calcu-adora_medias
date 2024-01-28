const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji triste" />'
const materias = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adcionaLinha();
    atualizaTabela();
    atualizaMedia();
});

function adcionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-materia');
    const inputNotaAtividade = document.getElementById('nota-materia');

    if (materias.includes(inputNomeAtividade.value)) {
        alert(`A matéria: ${inputNomeAtividade.value} já foi lançada.`);
    } else {
    materias.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;
    }
    inputNomeAtividade.value='';
    inputNotaAtividade.value='';    
}

function atualizaTabela() {
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}

function atualizaMedia(){
    const mediaFinal = calculaMedia();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >=7 ? spanAprovado : spanReprovado;
}

function calculaMedia() {
    let somaNotas = 0;

    for (let i = 0; i <notas.length; i++) {
        somaNotas += notas[i];
    }

    return somaNotas / notas.length;
}