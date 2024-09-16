import Alimento from "./Alimento"

class AlimentoDoDia {
    private dataDeConsumo: Date = new Date()
    private quantidade: number = 0
    private alimento: Alimento

    constructor(alimento: Alimento, quantidade: number, dataDeConsumo: Date) {
        this.alimento = alimento
        this.quantidade = quantidade
        this.dataDeConsumo = dataDeConsumo
    }

    public getAlimento = () => this.alimento
    public getQuantidade = () => this.quantidade
    public getDataDeConsumo = () => this.dataDeConsumo

    public setAlimento = (alimento: Alimento) => this.alimento = alimento
    public setQuantidade = (quantidade: number) => this.quantidade = quantidade
    public setDataDeConsumo = (dataDeConsumo: Date) => this.dataDeConsumo = dataDeConsumo
}

export default AlimentoDoDia