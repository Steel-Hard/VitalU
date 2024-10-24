interface Item {
    nome_produto: string;
    descricao_preparacao: string;
    prod_prep_id?: number;
    usr_id: number;
    data_consumo: string; // Formato ISO 8601
    quantidade_consumida: number;
}

// Função para ordenar por horario usando Quick Sort
export function quickSort(arr: Item[]): Item[] {
    //caso base
    if (arr.length <= 1) return arr;

    const pivot = new Date(arr[Math.floor(arr.length / 2)].data_consumo);
    const left: Item[] = [];
    const right: Item[] = [];

    for (const item of arr) {
        const dataConsumo = new Date(item.data_consumo);
        if (dataConsumo < pivot) {
            left.push(item);
        } else if (dataConsumo > pivot) {
            right.push(item);
        }
    }

    return [...quickSort(left), arr[Math.floor(arr.length / 2)], ...quickSort(right)];
}
