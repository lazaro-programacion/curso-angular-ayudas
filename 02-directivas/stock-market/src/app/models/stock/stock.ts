export class Stock {

  public name: string;
  public code: string;
  public price: number;
  public previousPrice: number;

  constructor(
    name: string,
    code: string,
    price: number,
    previousPrice: number
  ){
    this.code = code;
    this.name = name;
    this.price = price;
    this.previousPrice = previousPrice;
  }

  // constructor(
  //   public name: string,
  //   public code: string,
  //   public price: number,
  //   public previousPrice: number
  // ){}

  isSubiendo(): boolean {
    return this.price > this.previousPrice;
  }

}
