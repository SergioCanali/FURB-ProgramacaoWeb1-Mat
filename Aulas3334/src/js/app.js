const Aluno = require('./Aluno');

var contador = 3;

class App {
    constructor() {
        this.alunos = [];

        this.iniciarEventos();

        this.adiciarAlunosExemplo();
        this.atualizarTabela();
    }

    iniciarEventos = () => {
        document.getElementById('form-alunos').addEventListener("submit", this.salvarAluno);
    }

    salvarAluno = (evento) => {
        evento.preventDefault(); //isto cancela o envio do formulário pelo Navegador
        var id = contador;
        contador++
        var nome = document.getElementById('nome').value;
        var nota = document.getElementById('nota').value;
        const aluno = new Aluno(id, nome, nota);
        this.alunos.push(aluno);

        document.getElementById('nome').value = '';
        document.getElementById('nota').value = '';
        
        this.atualizarTabela();
    }

    adiciarAlunosExemplo = () => {
        const aluno1 = new Aluno(1, 'Jonathan', 7);
        const aluno2 = new Aluno(2, 'Marcos', 10);
        this.alunos.push(aluno1);
        this.alunos.push(aluno2);
    }

    atualizarTabela = () => {

        var htmlDaTabela = "";
        for (var i = 0; i < this.alunos.length; i++) {
            var aluno = this.alunos[i];
            htmlDaTabela = htmlDaTabela + `<tr><td>${aluno.id}</td><td>${aluno.nome}</td><td>${aluno.nota}</td></tr>`;
        }

        document.getElementById('tbody-alunos').innerHTML = htmlDaTabela;
    }
}


const app = new App();
