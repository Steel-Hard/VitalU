// ir adicionando coisas que o alimento tem

class Alimento {
    private nome: string

    constructor(nome: string) {
        this.nome = nome
    }

    public getNome = () => this.nome

    public setNome = (nome: string) => this.nome = nome
}

export default Alimento;