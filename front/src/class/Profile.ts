import { CalculosMetabolicos } from "./calculosmet"
import {Objetivos,FatorAtividade} from "../enum/Objetivos"

import AlimentoDoDia from "./AlimentosDoDia"

class Profile {
    private id?: number | undefined
    private nome?: string | undefined
    private foto?: string | undefined
    private email?: string | undefined
    private genero?: string | undefined
    private dataNascimento?: Date | undefined

    private alimentosConsumidos: AlimentoDoDia[] = []

    private altura?: number | undefined
    private peso?: number | undefined
    private objetivoPeso?: Objetivos | undefined
    private atividade?: FatorAtividade | undefined

    // Fazer esse constructor entrar com um dado do Backend
    constructor() {
        this.foto = 'https://cdn.icon-icons.com/icons2/1465/PNG/512/265womanrunning2_100534.png'
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fromJson = (json: any) => {
        this.nome = json.nome
        this.email = json.email
        this.genero = json.genero
        if (json.dataNascimento) this.dataNascimento = new Date(json.dataNascimento)
        this.altura = json.altura
        this.peso = json.peso
        switch (json.objetivoPeso) {
            case "Ganhar Peso":
                this.objetivoPeso = Objetivos.ganharPeso
                break
            case "Manter Peso":
                this.objetivoPeso = Objetivos.manterPeso
                break
            case "Perder Peso":
                this.objetivoPeso = Objetivos.perderPeso
                break
            default:
                this.objetivoPeso = undefined
        }
        this.atividade = json.atividade
    }

    public calcularIMC = () => {
        if (this.altura && this.peso) return CalculosMetabolicos.imc(this.altura, this.peso)
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
        if (this.dataNascimento) {
  const dataISO = this.dataNascimento.toISOString().split('T')[0]; // Obtém "YYYY-MM-DD"
  const [ano, mes, dia] = dataISO.split('-'); // Divide em partes
  return `${dia}/${mes}/${ano}`; // Formata para "DD/MM/YYYY"
}
            return ""
    }
    public getAlimentosConsumidos = (): AlimentoDoDia[] => this.alimentosConsumidos
    public getAltura = (): number | undefined => this.altura
    public getPeso = (): number | undefined => this.peso
    public getObjetivoPeso = (): Objetivos | undefined => this.objetivoPeso
    public getAtividade = (): FatorAtividade | undefined => this.atividade

    public setId = (id: number) => this.id = id
    public setNome = (nome: string) => this.nome = nome
    public setFoto = (foto: string) => this.foto = foto
    public setEmail = (email: string) => this.email = email
    public setGenero = (genero: string) => this.genero = genero
    public setDataNascimento = (dataNascimento: Date) => this.dataNascimento = dataNascimento
    public setAltura = (altura: number) => this.altura = altura
    public setPeso = (peso: number) => this.peso = peso
    public setObjetivoPeso = (objetivoPeso: Objetivos) => this.objetivoPeso = objetivoPeso
    public setAtividade = (atividade: FatorAtividade) => this.atividade = atividade
}

export default Profile