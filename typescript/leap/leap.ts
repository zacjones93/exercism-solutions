function isLeapYear( year:number ):boolean {  
    const isDivisibleByFour = divisibleBy(year, 4)
    const isDivisibleByOnehundred = divisibleBy(year, 100)
    const isDivisibleByFourhundred = divisibleBy(year, 400)


    const result = (isDivisibleByFour && !isDivisibleByOnehundred) || isDivisibleByFourhundred
    return result
}

const divisibleBy = (year:number, divisor:number):boolean => {
    return year % divisor === 0 ? true : false
}

export default isLeapYear