export function TimeStamp(): string {
    const date = new Date();
    
    // Obter as partes da data no horário UTC
    const year = date.getUTCFullYear();
    const month = ('00' + (date.getUTCMonth() + 1)).slice(-2); // Mês começa do 0, então somamos 1
    const day = ('00' + date.getUTCDate()).slice(-2);
    const hours = ('00' + date.getUTCHours()).slice(-2);
    const minutes = ('00' + date.getUTCMinutes()).slice(-2);
    const seconds = ('00' + date.getUTCSeconds()).slice(-2);

    // Formatar o timestamp no formato UTC (YYYY-MM-DD HH:MM:SS)
    const timestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    
    return timestamp;
}
