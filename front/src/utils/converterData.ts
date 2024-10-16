export default function converterData(data: Date): string {
    if (!data) return ""
    if (data.getMonth() < 9) {
        return `${data.getFullYear()}-0${data.getMonth() + 1}-${data.getDate()}`
    } else {
        return `${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()}`
    }
}