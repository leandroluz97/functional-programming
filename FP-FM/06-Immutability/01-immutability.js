
const MAX_NUM_COUNT = 6

const getLotteryNumber = () => Math.round(Math.random() * 100) % 50 + 1

const insertNumber = (lotteryNumber, numbers) => {

    if (!numbers.includes(lotteryNumber)) {
        numbers = [...numbers, lotteryNumber]
        numbers.sort((a, b) => a - b)
    }

    return numbers
}

let luckyLotteryNumbers = []

while (luckyLotteryNumbers.length < MAX_NUM_COUNT) {

    luckyLotteryNumbers = insertNumber(
        getLotteryNumber(),
        Object.freeze(luckyLotteryNumbers))
}

console.log(luckyLotteryNumbers);