import { Objetivos } from "../enum/Objetivos"
import calcularIMC from "../utils/calcularIMC"
import AlimentoDoDia from "./AlimentosDoDia"

class Profile {
    private id?: number
    private nome?: string
    private foto?: string
    private email?: string
    private genero?: string
    private dataNascimento?: Date

    private alimentosConsumidos: AlimentoDoDia[] = []

    private altura?: number
    private peso?: number
    private objetivoPeso?: Objetivos

    // Fazer esse constructor entrar com um dado do Backend
    constructor() {
        this.id = 1
        this.nome = 'Usuário'
        this.foto = 'https://cdn.icon-icons.com/icons2/1465/PNG/512/265womanrunning2_100534.png'
        this.email = "usuario@email.com"
        this.genero = "Masculino"
        this.dataNascimento = new Date(2000, 1, 1)
        this.altura = 1.75
        this.peso = 70
        this.objetivoPeso = Objetivos.manterPeso
    }

    public calcularIMC = () => {
        if (this.altura && this.peso) return calcularIMC(this.altura, this.peso)
        return 0
    }

    public adicionarAlimentoConsumido = (alimento: AlimentoDoDia) => this.alimentosConsumidos.push(alimento)

    public removerAlimentoConsumido = (alimento: AlimentoDoDia) => {
        const index = this.alimentosConsumidos.indexOf(alimento)
        if (index !== -1) this.alimentosConsumidos.splice(index, 1)
    }
    
    public getId = (): number | undefined => this.id
    public getNome = (): string | undefined => this.nome
    public getFoto = (): string | undefined => this.foto
    public getEmail = (): string | undefined => this.email
    public getGenero = (): string | undefined => this.genero
    public getDataNascimento = (): string => {
        if (this.dataNascimento) return this.dataNascimento.toLocaleDateString()
            return "Data de nascimento não disponível"
    }
    public getAlimentosConsumidos = (): AlimentoDoDia[] => this.alimentosConsumidos
    public getAltura = (): number | undefined => this.altura
    public getPeso = (): number | undefined => this.peso
    public getObjetivoPeso = (): Objetivos | undefined => this.objetivoPeso

    public setId = (id: number) => this.id = id
    public setNome = (nome: string) => this.nome = nome
    public setFoto = (foto: string) => this.foto = foto
    public setEmail = (email: string) => this.email = email
    public setGenero = (genero: string) => this.genero = genero
    public setDataNascimento = (dataNascimento: Date) => this.dataNascimento = dataNascimento
    public setAltura = (altura: number) => this.altura = altura
    public setPeso = (peso: number) => this.peso = peso
    public setObjetivoPeso = (objetivoPeso: Objetivos) => this.objetivoPeso = objetivoPeso
}

export default Profile