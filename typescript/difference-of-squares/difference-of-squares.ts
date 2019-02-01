interface Square {
  squareOfSum: number;
  sumOfSquares: number;
  difference: number;
}

class Squares implements Square {
  public squareOfSum: number;
  public sumOfSquares: number;
  public difference: number;

  constructor(number: number) {
    this.calculateSqOfSum(number);
    this.calculateSumOfSq(number);
    this.calculateDifference();
  }

  private calculateSqOfSum(num:number):void {
    const sumOfNum = this.sum(num)
    this.squareOfSum = sumOfNum * sumOfNum 
  }

  private calculateSumOfSq(num:number):void {
    let result = 0;
    for (let i = 0; i < num + 1; i++) { 
      result += i * i
    }

    this.sumOfSquares = result
  }

  private calculateDifference():void {
    this.difference =  this.squareOfSum - this.sumOfSquares
  }

  private sum(num:number):number {
    let result = 0;
    for (let i = 0; i < num + 1; i++) { 
      result += i
    }

    return result
  }
}

export default Squares