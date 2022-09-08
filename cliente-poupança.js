function Cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

function ClientePoupanca(nome,cpf,email,saldo,saldoPoup) {
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const Guilherme = new ClientePoupanca("Guilherme", "40528733869", "Gui_3@outlook.com", 100,200)

console.log(Guilherme)

ClientePoupanca.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor
}

Guilherme.depositarPoup(50)

console.log(Guilherme.saldoPoup)



