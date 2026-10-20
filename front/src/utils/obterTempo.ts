
  export function TimeStamp(): string {
    const date = new Date();
    const timestamp = date.getFullYear() + '-' +
        ('00' + (date.getMonth() + 1)).slice(-2) + '-' +
        ('00' + date.getDate()).slice(-2) + ' ' + 
        ('00' + date.getHours()).slice(-2) + ':' + 
        ('00' + date.getMinutes()).slice(-2) + ':' + 
        ('00' + date.getSeconds()).slice(-2);
    return timestamp;
}

/*
export function convertToLocalTime(utcTimestamp: string): string {
    const date = new Date(utcTimestamp + ' UTC'); // Adiciona ' UTC' para garantir que a data seja interpretada como UTC
    const localYear = date.getFullYear();
    const localMonth = ('00' + (date.getMonth() + 1)).slice(-2);
    const localDay = ('00' + date.getDate()).slice(-2);
    const localHours = ('00' + date.getHours()).slice(-2);
    const localMinutes = ('00' + date.getMinutes()).slice(-2);
    const localSeconds = ('00' + date.getSeconds()).slice(-2);

    // Retorna a data no fuso horário local
    return `${localYear}-${localMonth}-${localDay} ${localHours}:${localMinutes}:${localSeconds}`;
}*/
