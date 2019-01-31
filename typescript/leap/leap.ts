function isLeapYear( year:number ) {
    const divisibleByFour = (year:number):boolean => {
        return year % 4 === 0 ? true : false
    }

    const divisibleByOnehundred = (year:number):boolean => {
        return year % 100 === 0 ? true : false
    }

    const divisibleByFourhundred = (year:number):boolean => {
        return year % 400 === 0 ? true : false
    }

    const isDivisibleByFour = divisibleByFour(year)
    const isDivisibleByOnehundred = divisibleByOnehundred(year)
    const isDivisibleByFourhundred = divisibleByFourhundred(year)


    const result = (isDivisibleByFour && !isDivisibleByOnehundred) || isDivisibleByFourhundred
    return result
}

export default isLeapYear