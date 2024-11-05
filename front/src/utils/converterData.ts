export default function converterData(data: Date | string): string {
    if (!data) return ""
    if (typeof data === "string") {
        const newData = data.split("/")
        return `${newData[2]}-${newData[1]}-${newData[0]}`
    } else {
        if (data.getMonth() < 9) {
            return `${data.getFullYear()}-0${data.getMonth() + 1}-${String(data.getDate()).padStart(2, '0')}`;
        } else {
            return `${data.getFullYear()}-${data.getMonth() + 1}-${String(data.getDate()).padStart(2, '0')}`;
        }
    }
}