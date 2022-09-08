function Cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

const andre = new Cliente("Guilherme", "40528733869", "Gui_3@outlook.com", 100.000)
console.log(andre)
