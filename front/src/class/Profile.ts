import { Objetivos } from "../enum/Objetivos"
import calcularIMC from "../utils/calcularIMC"

class Profile {
    private id?: number
    private nome?: string
    private foto?: string
    private email?: string

    private altura?: number
    private peso?: number
    private objetivoPeso?: Objetivos

    // Fazer esse constructor entrar com um dado do Backend
    constructor() {
        this.id = 1
        this.nome = 'Usuário'
        this.foto = 'https://www.w3schools.com/howto/img_avatar.png'
        this.email = "usuario@email.com"
        this.altura = 1.75
        this.peso = 70
        this.objetivoPeso = Objetivos.manterPeso
    }

    public calcularIMC = () => {
        if (this.altura && this.peso) return calcularIMC(this.altura, this.peso)
        return 0
    }

    public getId = () => this.id
    public getNome = () => this.nome
    public getFoto = () => this.foto
    public getEmail = () => this.email
    public getAltura = () => this.altura
    public getPeso = () => this.peso
    public getObjetivoPeso = () => this.objetivoPeso

    public setId = (id: number) => this.id = id
    public setNome = (nome: string) => this.nome = nome
    public setFoto = (foto: string) => this.foto = foto
    public setEmail = (email: string) => this.email = email
    public setAltura = (altura: number) => this.altura = altura
    public setPeso = (peso: number) => this.peso = peso
    public setObjetivoPeso = (objetivoPeso: Objetivos) => this.objetivoPeso = objetivoPeso
}

export default Profile