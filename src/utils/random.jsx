export default function random10() {
    const numbers = []
    while (numbers.length < 10) {
        let num = Math.floor(Math.random()*100)
        if (num !== 0 && !numbers.includes(num)) {
            numbers.push(num)
        }
    }
    return numbers
}


