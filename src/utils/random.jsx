
export function randomNum(numberOfNum=10) {
    const numbers = []
    while (numbers.length < numberOfNum) {
        let num = Math.floor(Math.random()*100)
        if (num !== 0 && !numbers.includes(num)) {
            numbers.push(num)
        }
    }
    return numbers
}


