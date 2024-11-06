import Alimento from "./Alimento"

class AlimentoDoDia {
    private dataDeConsumo: Date = new Date()
    private quantidade: number = 0
    private alimento: Alimento

    constructor(alimento: Alimento, quantidade: number, dataDeConsumo: Date) {
        this.alimento = alimento
        this.quantidade = quantidade
        this.setDataDeConsumo(dataDeConsumo)  // Ajustar para o horário de Brasília
    }

    public getAlimento = () => this.alimento
    public getQuantidade = () => this.quantidade
    public getDataDeConsumo = () => this.dataDeConsumo

    public setAlimento = (alimento: Alimento) => this.alimento = alimento
    public setQuantidade = (quantidade: number) => this.quantidade = quantidade
    
    // Ajusta a data de consumo para o horário de Brasília (UTC-3)
    public setDataDeConsumo = (dataDeConsumo: Date) => {
        // Se a data estiver em UTC, ajusta para o horário de Brasília (UTC-3)
        const localDate = new Date(dataDeConsumo);
        localDate.setHours(localDate.getHours() - 3);  // Subtrai 3 horas (UTC-3)
        this.dataDeConsumo = localDate;
    }
}

export default AlimentoDoDia
